import { rgbToHex, hexToRgb } from '../src/color';

test('color_rgbToHex', () => {
  const b = rgbToHex(255, 255, 255);
  expect(b).toBe('#FFFFFF');
  const rgb = hexToRgb('#FFFFFF');
  expect(rgb).toBe('RGB(255, 255, 255)');
  const rgb1 = hexToRgb('#FFF');
  expect(rgb1).toBe('RGB(255, 255, 255)');
});