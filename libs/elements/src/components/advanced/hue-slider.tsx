import { useContext } from 'react';

import { ISliderElements } from '../../types';

import { Slider } from '../basic/slider';

import { ColorContext } from '../color-context';
import { hslToRgb } from '@bluemojo/utils';

type IHueSliderProps = {
  elements?: ISliderElements;
};

export function HueSlider(props: IHueSliderProps) {
  const { color, onChange } = useContext(ColorContext);

  const onSliderChange = (value: number, notGlobalUpdate?: boolean) => {
    const h = Math.floor(value * 360);
    const hsl = { ...color.hsl, h };

    onChange(
      { ...color, rgb: hslToRgb(hsl), hsl, hsb: { ...color.hsb, h } },
      notGlobalUpdate
    );
  };

  return (
    <Slider {...props} value={color.hsl.h / 360} onChange={onSliderChange} />
  );
}
