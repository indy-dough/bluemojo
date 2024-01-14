import { hsbToHsl, hsbToRgb, hslToHsb, hslToRgb, rgbToHsl } from './utils';

const colors = [
  {
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    hsb: { h: 0, s: 0, b: 0 },
  },
  {
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 1 },
    hsb: { h: 0, s: 0, b: 1 },
  },
  {
    rgb: { r: 255, g: 0, b: 0 },
    hsl: { h: 0, s: 1, l: 0.5 },
    hsb: { h: 0, s: 1, b: 1 },
  },
  {
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 1, l: 0.5 },
    hsb: { h: 120, s: 1, b: 1 },
  },
  {
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 1, l: 0.5 },
    hsb: { h: 240, s: 1, b: 1 },
  },
  {
    rgb: { r: 255, g: 255, b: 0 },
    hsl: { h: 60, s: 1, l: 0.5 },
    hsb: { h: 60, s: 1, b: 1 },
  },
  {
    rgb: { r: 0, g: 255, b: 255 },
    hsl: { h: 180, s: 1, l: 0.5 },
    hsb: { h: 180, s: 1, b: 1 },
  },
  {
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 1, l: 0.5 },
    hsb: { h: 300, s: 1, b: 1 },
  },
  {
    rgb: { r: 191, g: 191, b: 191 },
    hsl: { h: 0, s: 0, l: 0.75 },
    hsb: { h: 0, s: 0, b: 0.75 },
  },
  {
    rgb: { r: 128, g: 128, b: 128 },
    hsl: { h: 0, s: 0, l: 0.5 },
    hsb: { h: 0, s: 0, b: 0.5 },
  },
  {
    rgb: { r: 128, g: 0, b: 0 },
    hsl: { h: 0, s: 1, l: 0.25 },
    hsb: { h: 0, s: 1, b: 0.5 },
  },
  {
    rgb: { r: 128, g: 128, b: 0 },
    hsl: { h: 60, s: 1, l: 0.25 },
    hsb: { h: 60, s: 1, b: 0.5 },
  },
  {
    rgb: { r: 0, g: 128, b: 0 },
    hsl: { h: 120, s: 1, l: 0.25 },
    hsb: { h: 120, s: 1, b: 0.5 },
  },
  {
    rgb: { r: 128, g: 0, b: 128 },
    hsl: { h: 300, s: 1, l: 0.25 },
    hsb: { h: 300, s: 1, b: 0.5 },
  },
  {
    rgb: { r: 0, g: 128, b: 128 },
    hsl: { h: 180, s: 1, l: 0.25 },
    hsb: { h: 180, s: 1, b: 0.5 },
  },
  {
    rgb: { r: 0, g: 0, b: 128 },
    hsl: { h: 240, s: 1, l: 0.25 },
    hsb: { h: 240, s: 1, b: 0.5 },
  },
];

describe('color utils', () => {
  it('hslToRgb', () => {
    for (const color of colors) {
      expect(hslToRgb(color.hsl)).toEqual(color.rgb);
    }
  });

  it('rgbToHsl', () => {
    for (const color of colors) {
      expect(rgbToHsl(color.rgb)).toEqual(color.hsl);
    }
  });

  it('hsbToRgb', () => {
    for (const color of colors) {
      expect(hslToHsb(color.hsl)).toEqual(color.hsb);
    }
  });

  it('hsbToRgb', () => {
    for (const color of colors) {
      expect(hsbToRgb(color.hsb)).toEqual(color.rgb);
    }
  });

  it('hsbToHsl', () => {
    for (const color of colors) {
      expect(hsbToHsl(color.hsb)).toEqual(color.hsl);
    }
  });
});
