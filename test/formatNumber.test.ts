import { formatNumber } from '../src/formatNumber';

test('formatNumber', () => {
  expect(formatNumber(123456)).toBe('123,456');
  expect(formatNumber(123456.78)).toBe('123,456.78');
  expect(formatNumber(123456.789876)).toBe('123,456.789876');
  expect(formatNumber(10000123456.78987)).toBe('10,000,123,456.78987');
  expect(formatNumber(10000123456.78987, 2)).toBe('10,000,123,456.79');
});