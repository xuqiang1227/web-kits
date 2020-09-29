import { isWebSite } from "../src/isWebSite";

test('isWebSite', () => {
  expect(isWebSite('www.github.com')).toBe(false);
  expect(isWebSite('www.github.com', true)).toBe(true);
  expect(isWebSite('https://www.github.com', true)).toBe(true);
  expect(isWebSite('https://www.github.com')).toBe(true);
  expect(isWebSite('abcdefg')).toBe(false);
});