import { commonObject } from "src/common";
import { getUrlParam } from "../src/getUrlParam";

test("getUrlParam", () => {
  const p1 = getUrlParam();
  expect(p1).toBeNull();

  const url = 'http://test.com?response_type=code&client_id=bffClientId_1001&code=F7AFFBB414A818B02C994D2F64FC3585';

  const p2 = getUrlParam('client_id', url);
  expect(p2).toBe('bffClientId_1001')

  const p3 = getUrlParam(undefined, url) as commonObject<string>;
  expect(p3['code']).toBe('F7AFFBB414A818B02C994D2F64FC3585');

});