import { requestThrottler } from './requestThrottler';
import axios, { AxiosRequestConfig } from "axios";

export const requestThrottlerWithFormData = async (
  requestConf: AxiosRequestConfig,
  throttle?: boolean
) => {
  //@ts-ignore
  requestConf['headers'] = {
    ...requestConf['headers'],
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  requestConf['transformRequest'] = [
    //@ts-ignore
    ...requestConf['transformRequest'],
    (data: any) => {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      ret = ret.substring(0, ret.lastIndexOf('&'));
      return ret;
    }
  ]
  return await requestThrottler(requestConf, throttle);
}