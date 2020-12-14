import { numberFormatCommon, numberFormat, numberParse } from '../src/formatNumber';

test('formatNumber', () => {
  expect(numberFormatCommon(123456)).toBe('123,456');
  expect(numberFormatCommon(123456.78)).toBe('123,456.78');
  expect(numberFormatCommon(123456.789876)).toBe('123,456.789876');
  expect(numberFormatCommon(10000123456.78987)).toBe('10,000,123,456.78987');
  expect(numberFormatCommon(10000123456.78987, 2)).toBe('10,000,123,456.79');
  
  expect(numberFormat(1234567.89)).toBe('1,234,567.89')
  expect(numberFormat(1234567.89, 'x.xxx.xxx,xxx')).toBe('1.234.567,89')

  expect(numberParse('1.234.567,89', 'x.xxx.xxx,xxx')).toBe('1234567.89')
});