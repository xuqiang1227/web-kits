import { add, plus } from '../src/bigNumber';


test("bigNumber-add", () => {
  const a = '111111111111119';
  const b = '11111111111111112';
  expect(add(a, b)).toBe('11222222222222231');
  expect(add('0', '0')).toBe('0');
  expect(add('0.1', '0.3')).toBe('0.4');
  expect(add('0.94', '0.38')).toBe('1.32');
  expect(add('94', '38')).toBe('132');
  expect(add('-94', '-38')).toBe('-132');
  //expect(longAdd('-1', '0')).toBe('0');
});

test("bigNumber-plus", () => {
  const a = "123", b = "111";
  expect(plus(a, b)).toBe('13653');
  expect(plus("0", "0")).toBe('0');
  expect(plus("88", "8")).toBe('704');
  expect(plus("999", "999")).toBe('998001');
  expect(plus("99.9", "9.99")).toBe('998.001');
  expect(plus("12.3", "11.1")).toBe('136.53');
  expect(plus("-12.3", "11.1")).toBe('-136.53');
})