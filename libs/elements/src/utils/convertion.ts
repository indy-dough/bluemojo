import { IColor, IRgb } from '../types';

import { hslToHsb, rgbToHsl } from '@bluemojo/utils';

function hexaStringToRgbA(hexa: string): { rgb: IRgb; a: number } {
  const r = parseInt('0x' + hexa[0] + hexa[1], 16);
  const g = parseInt('0x' + hexa[2] + hexa[3], 16);
  const b = parseInt('0x' + hexa[4] + hexa[5], 16);
  const a = hexa[6]
    ? +(parseInt('0x' + hexa[6] + hexa[7], 16) / 255).toFixed(2)
    : 1;

  return { rgb: { r, g, b }, a };
}

export function hexaStringToColor(hexa: string): IColor {
  const { rgb, a } = hexaStringToRgbA(hexa);
  const hsl = rgbToHsl(rgb);
  const hsb = hslToHsb(hsl);

  return { rgb, hsl, hsb, a };
}

function rgbToHexString({ r, g, b }: IRgb) {
  return `${((r << 16) + (g << 8) + b).toString(16)}`.padStart(6, '0');
}

function alphaToHexString(a: number) {
  return a === 1 ? '' : Math.floor(a * 255).toString(16);
}

export function colorToHexString(color: IColor) {
  return `${rgbToHexString(color.rgb)}`.toUpperCase();
}

export function colorToHexaString(
  color: IColor,
  options?: { hideHash?: boolean; hideAlpha?: boolean }
) {
  return `${options?.hideHash ? '' : '#'}${rgbToHexString(color.rgb)}${
    options?.hideAlpha ? '' : alphaToHexString(color.a)
  }`.toUpperCase();
}
