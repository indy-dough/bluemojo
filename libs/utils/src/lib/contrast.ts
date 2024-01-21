import { IRgb } from '../types';

function transform(c: number) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function rgbLuminance(rgb: IRgb) {
  return (
    0.2126 * transform(rgb.r) +
    0.7152 * transform(rgb.g) +
    0.0722 * transform(rgb.b)
  );
}

function luminanceContrast(l1: number, l2: number) {
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function rgbContrast(color1: IRgb, color2: IRgb) {
  return luminanceContrast(rgbLuminance(color1), rgbLuminance(color2));
}
