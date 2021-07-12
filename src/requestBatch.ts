import axios, { AxiosRequestConfig } from "axios";

class RequestBatch {

  private requestQueue: string[] = [];
  private queueLength;
  private pendingQueue: AxiosRequestConfig[] = [];
  private pendingPromise: {[key: string]: Function}[] = [];
  constructor(length: number) {
    this.queueLength = length;
  }

  request = async (config: AxiosRequestConfig) => {
    const key =
      (config.method || "GET").toUpperCase() +
      "||" +
      config.url! +
      `${config.data ? "_data_" + JSON.stringify(config.data) : ""}` +
      `${config.params ? "_params" + JSON.stringify(config.params) : ""
      }`;

    if (this.requestQueue.length >= this.queueLength) {
      this.pendingQueue.push(config);
      return new Promise((resolve, reject) => {
        this.pendingPromise.push({[`${key}_resolve`]: resolve, [`${key}_reject`]: reject});
      });
    } else {
      this.requestQueue.push(key);
      return new Promise((resolve, reject) => {
        const pending = this.pendingPromise.find(res => !!res[`${key}_resolve`]);
        axios(config).then(data => {
          if(pending) {
            pending[`${key}_resolve`](data);
          }
          resolve(data);
        }).catch(e => {
          if(pending) {
            pending[`${key}_reject`](e);
          }
          reject(e);
        }).finally(() => {
          this.requestQueue = this.requestQueue.filter(q => q !== key);
          if (this.pendingQueue.length > 0) {
            const pending = this.pendingQueue.shift();
            if (pending) {
              return this.request(pending);
            }
          }
        });
      })
    }
  }

  setLength = (length: number) => {
    if (length > this.requestQueue.length) {
      this.queueLength = length;
    } else {
      this.queueLength = this.requestQueue.length;
    }
  }
}

let _length = 5;
let _requestBatch = new RequestBatch(_length);

export const requestBatch = async (config: AxiosRequestConfig, length?: number) => {
  if (length && length != _length) {
    _requestBatch.setLength(length);
  }
  return await _requestBatch.request(config);
}