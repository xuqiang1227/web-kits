import { isNumber } from '../src/isNumber';

test('isNumber', () => {
  expect(isNumber()).toBe(false);
  expect(isNumber('123')).toBe(false);
  expect(isNumber(123)).toBe(true);
  expect(isNumber(123.34)).toBe(true);
  expect(isNumber(null)).toBe(false);
})