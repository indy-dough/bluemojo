import { IHsb, IHsl, IRgb } from '../types';

export function hslToRgb({ h, s, l }: IHsl): IRgb {
  s = s * Math.min(l, 1 - l);

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - s * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };

  return { r: f(0), g: f(8), b: f(4) };
}

export function hsbToRgb({ h, s, b }: IHsb): IRgb {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    const color = b * (1 - s * Math.max(Math.min(k, 4 - k, 1), 0));
    return Math.round(255 * color);
  };

  return { r: f(5), g: f(3), b: f(1) };
}

export function hslToHsb({ h, s, l }: IHsl): IHsb {
  const b = s * Math.min(l, 1 - l) + l;
  return { h, s: b ? 2 - (2 * l) / b : 0, b };
}

export function hsbToHsl({ h, s, b }: IHsb): IHsl {
  const l = b - (b * s) / 2;
  const m = Math.min(l, 1 - l);
  return { h, s: m ? (b - l) / m : 0, l };
}

export function rgbToHsl({ r, g, b }: IRgb): IHsl {
  r /= 255;
  g /= 255;
  b /= 255;

  const cMin = Math.min(r, g, b);
  const cMax = Math.max(r, g, b);
  const delta = cMax - cMin;
  let h;
  let s;
  let l;

  if (delta === 0) {
    h = 0;
  } else if (cMax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cMax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cMax + cMin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +s.toFixed(1);
  l = +l.toFixed(1);

  return { h, s, l };
}
