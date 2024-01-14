import { IColor } from '../types';

import { DEFAULT_COLOR } from './colors';
import { hexaStringToColor } from './convertion';

function normalize3Hex(hex: string) {
  return `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`.toUpperCase();
}

function normalizeToValidHexa(hexa: string): [string, boolean] {
  if (hexa.length === 1) {
    return [hexa.repeat(6).toUpperCase(), false];
  }
  if (hexa.length === 2) {
    return [hexa.repeat(3).toUpperCase(), false];
  }
  if (hexa.length === 3) {
    return [normalize3Hex(hexa), false];
  }
  if (hexa.length === 4) {
    return [
      normalize3Hex(hexa.substring(0, 3)) +
        `${hexa[3]}${hexa[3]}`.toUpperCase(),
      true,
    ];
  }
  if (hexa.length === 5) {
    return [
      normalize3Hex(hexa.substring(0, 3)) + hexa.substring(3, 5).toUpperCase(),
      true,
    ];
  }
  if (hexa.length === 6) {
    return [hexa.toUpperCase(), false];
  }
  if (hexa.length === 7) {
    return [
      hexa.substring(0, 6).toUpperCase() + `${hexa[6]}${hexa[6]}`.toUpperCase(),
      true,
    ];
  }

  return [hexa.toUpperCase(), true];
}

export function normalizeToColor(
  value: string | null | undefined
): [IColor, boolean] {
  if (!value) {
    return [DEFAULT_COLOR, false];
  }

  const matches = value.match(/^#?([\da-f]{1,8})/i);

  if (!matches) {
    return [DEFAULT_COLOR, false];
  }

  const [hexa, hasAlpha] = normalizeToValidHexa(matches[1]);

  return [hexaStringToColor(hexa), hasAlpha];
}

export function normalizeHexa(value: string | null | undefined, a?: number) {
  const [color, hasAlpha] = normalizeToColor(value);
  return a && !hasAlpha ? { ...color, a } : color;
}
