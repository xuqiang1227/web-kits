import { plus, times, minus } from '../src/bigNumber';


test("bigNumber-plus", () => {
  const a = '111111111111119';
  const b = '11111111111111112';
  expect(plus(a, b)).toBe('11222222222222231');
  expect(plus('0', '0')).toBe('0');
  expect(plus('0.1', '0.3')).toBe('0.4');
  expect(plus('0.94', '0.38')).toBe('1.32');
  expect(plus('94', '38')).toBe('132');
  expect(plus('-94', '-38')).toBe('-132');
  expect(plus('-94', '38')).toBe('-56');
  expect(plus('94', '-38')).toBe('56');
  
});

test("bigNumber-times", () => {
  const a = "123", b = "111";
  expect(times(a, b)).toBe('13653');
  expect(times("0", "0")).toBe('0');
  expect(times("88", "8")).toBe('704');
  expect(times("999", "999")).toBe('998001');
  expect(times("99.9", "9.99")).toBe('998.001');
  expect(times("12.3", "11.1")).toBe('136.53');
  expect(times("-12.3", "11.1")).toBe('-136.53');
})

//TODO
test('bigNumber-minus', () => {
  expect(minus('999', '998')).toBe('1');
  expect(minus('888', '999')).toBe('-111');
  expect(minus('9899', '9999')).toBe('-100');
  expect(minus('-100', '100')).toBe('-200');
  expect(minus('-100', '-100')).toBe('0');
  expect(minus('100', '-100')).toBe('200');
  expect(minus('100', '100')).toBe('0');
  expect(minus('0', '0')).toBe('0');
  expect(minus('38', '94')).toBe('-56');
  expect(minus('38.4', '-94.3')).toBe('132.7');
  expect(minus('100', '99')).toBe('1');
  expect(minus('99', '100')).toBe('-1');
  expect(minus('100.99', '99.11')).toBe('1.88');
  expect(minus('-38.4', '-94.3')).toBe('55.9');
  expect(minus('38.4', '94.3')).toBe('-55.9');
})