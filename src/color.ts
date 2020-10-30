
const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b);
  let h: number = 0, s: number, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5
      ? d / (2 - max - min)
      : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}


const hexToHsl = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [];
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  return rgbToHsl(r, g, b);
}

const rgbToHex = (r: number, g: number, b: number) => {
  if (r < 0 || r > 255) {
    throw new Error('R should to 0 from 255');
  }
  if (g < 0 || g > 255) {
    throw new Error('G should to 0 from 255');
  }
  if (b < 0 || b > 255) {
    throw new Error('B should to 0 from 255');
  }
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toLocaleUpperCase();
}

const hexToRgb = (hex: string) => {
  if (hex.length !== 4 && hex.length !== 7 || !hex.startsWith('#')) {
    throw new Error('color is invalid');
  }
  if (hex.length === 4) {
    let index = 1;
    do {
      const rep = hex.charAt(index);
      hex = hex.replace(rep, rep.repeat(2));
      index += 2;
    } while (hex.length < 7);
  }
  hex = hex.replace('#', "");
  let rgb = [];
  rgb[0] = parseInt(`0x${hex.substring(0, 2)}`);
  rgb[1] = parseInt(`0x${hex.substring(2, 4)}`);
  rgb[2] = parseInt(`0x${hex.substring(4, 6)}`);
  return `RGB(${rgb.join(', ')})`;
}

export {
  rgbToHsl,
  hexToHsl,
  rgbToHex,
  hexToRgb
};