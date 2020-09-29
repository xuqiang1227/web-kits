import { isEmail } from "../src/isEmail";

test('isEmail', () => {
  expect(isEmail('')).toBe(false);

  expect(isEmail('abcd')).toBe(false);

  expect(isEmail('abc@ab.com')).toBe(true);

  expect(isEmail('abc@com')).toBe(false);

  expect(isEmail('@abc.com')).toBe(false);

  expect(isEmail('abcd@abc')).toBe(false);
});