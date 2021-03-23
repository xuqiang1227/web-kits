import axios, { AxiosRequestConfig } from "axios";

interface RequestThrottlerConfig {
  cacheMaxAgeMS: number;
}

interface CachedRequestRecord {
  data: any;
  expired: number;
}

export class RequestThrottler {
  conf: RequestThrottlerConfig;
  protected _map: {
    [key: string]: CachedRequestRecord;
  } = {};
  protected _pendingURLs: {
    [key: string]: { resolve: Function; reject: Function }[];
  } = {};
  constructor(conf?: RequestThrottlerConfig) {
    this.conf = { cacheMaxAgeMS: 20000, ...(conf || {}) };
  }
  protected getValidCachedRequest = (key: string) => {
    const req = this._map[key];

    if (req) {
      if (req.expired >= Date.now()) {
        return req;
      } else {
        delete this._map[key];
        return null;
      }
    }
    return null;
    // return req && req.expired >= Date.now() ? req : null;
  };
  protected setPendingURL = (
    key: string,
    resolve?: Function,
    reject?: Function
  ) => {
    let list = this._pendingURLs[key] || (this._pendingURLs[key] = []);
    resolve && list.push({ resolve, reject: reject! });
  };
  protected setCachedRequest = (key: string, data: any) => {
    this._map[key] = {
      data,
      expired: this.conf.cacheMaxAgeMS + Date.now(),
    };
  };
  request = async (requestConf: AxiosRequestConfig) => {
    const key =
      (requestConf.method || "GET").toUpperCase() +
      "||" +
      requestConf.url! +
      `${requestConf.data ? "_data_" + JSON.stringify(requestConf.data) : ""}` +
      `${requestConf.params ? "_params" + JSON.stringify(requestConf.params) : ""
      }`;
    const validReq = this.getValidCachedRequest(key);
    if (validReq) {
      console.log("request", "cached", requestConf.url);

      return validReq;
    } else if (this._pendingURLs[key]) {
      console.log("request", "pending", requestConf.url);

      return new Promise((resolve, reject) => {
        this._pendingURLs[key].push({ resolve, reject });
      });
    } else {
      console.log("request", "fetch", requestConf.url);
      this.setPendingURL(key);
      return new Promise((resolve, reject) => {
        this._pendingURLs[key].push({ resolve, reject });
        axios(requestConf)
          .then((data) => {
            const list = this._pendingURLs[key];
            list.forEach((item) => {
              item.resolve(data);
            });
            delete this._pendingURLs[key];
            this.setCachedRequest(key, data);
          })
          .catch((ex) => {
            const list = this._pendingURLs[key];
            list.forEach((item) => {
              item.reject(ex);
            });
            delete this._pendingURLs[key];
          });
      });
    }
  };

}

const _requestThrottler = new RequestThrottler();

/**
 * 通用请求接口
 * @param requestConf 请求配置
 * @param throttle 是否限流
 */
export const requestThrottler = async (
  requestConf: AxiosRequestConfig,
  throttle?: boolean
) => {
  let data: any;
  if (throttle) {
    data = await _requestThrottler.request(requestConf);
  } else {
    data = await axios(requestConf);
  }
  return data;
};