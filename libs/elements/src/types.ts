import { CSSProperties } from 'react';

import { IRgb, IHsl, IHsb } from '@bluemojo/utils';

export type IColor = {
  rgb: IRgb;
  hsl: IHsl;
  hsb: IHsb;
  a: number;
};

export type IElement = string | { className?: string; style?: CSSProperties };

export type ISliderElements = {
  container?: IElement;
  sliderBox?: IElement;
  slider?: IElement;
};
