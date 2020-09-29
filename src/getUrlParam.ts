//获取URL地址的参数值。
//name为URL参数名
//例如：?param1=abc&param2=123
// getUrlParam("param2"）时，获取到的值为：123

import { commonObject } from "./common";

export const getUrlParam = (name?: string, url?: string)
  : string | commonObject<string> | null => {
  const search = url
    ? url.split('?')[1]
    : window.location.search.substr(1);
  if (!search) {
    return null;
  }
  if (!name) {
    const params = search.split('&')
      .reduce((res: commonObject<string>, i: string) => {
        const curParam = i.split('=');
        res[curParam[0]] = curParam[1];
        return res;
      }, {});
    return params;
  }
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = search.match(reg);
  if (r !== null) {
    return r[2];
  }
  return null;
};