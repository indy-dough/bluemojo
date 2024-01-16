import { CSSProperties } from 'react';

export type IRgb = {
  r: number;
  g: number;
  b: number;
};

export type IHsl = {
  h: number;
  s: number;
  l: number;
};

export type IHsb = {
  h: number;
  s: number;
  b: number;
};

export type IColor = {
  rgb: IRgb;
  hsl: IHsl;
  hsb: IHsb;
  a: number;
};

export type IElement = string | { className?: string; style?: CSSProperties };

export type INormalizedElement = { className?: string; style?: CSSProperties };

export type ISliderElements = {
  container?: IElement;
  sliderBox?: IElement;
  slider?: IElement;
};
