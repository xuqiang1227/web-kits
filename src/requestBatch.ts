import axios, { AxiosRequestConfig } from "axios";

class RequestBatch {

  private requestQueue: string[] = [];
  private queueLength;
  private pendingQueue: AxiosRequestConfig[] = [];
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
    } else {
      this.requestQueue.push(key);
      return new Promise((resolve, reject) => {
        axios(config).then(data => {
          resolve(data);
        }).catch(e => {
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