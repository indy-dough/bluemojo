import { rgbContrast } from './contrast';

const colors = [
  {
    rgb1: { r: 0, g: 0, b: 0 },
    rgb2: { r: 255, g: 255, b: 255 },
    contrast: '21.00',
  },
  {
    rgb1: { r: 217, g: 32, b: 32 },
    rgb2: { r: 255, g: 255, b: 255 },
    contrast: '5.03',
  },
  {
    rgb1: { r: 217, g: 32, b: 32 },
    rgb2: { r: 179, g: 226, b: 50 },
    contrast: '3.31',
  },
  {
    rgb1: { r: 141, g: 125, b: 202 },
    rgb2: { r: 179, g: 226, b: 50 },
    contrast: '2.34',
  },
  {
    rgb1: { r: 141, g: 125, b: 202 },
    rgb2: { r: 226, g: 67, b: 50 },
    contrast: '1.16',
  },
];

describe('contrast utils', () => {
  it('rgbContrast', () => {
    for (const color of colors) {
      expect(rgbContrast(color.rgb1, color.rgb2).toFixed(2)).toEqual(
        color.contrast
      );
    }
  });
});
