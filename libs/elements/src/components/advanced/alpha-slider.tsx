import { useContext } from 'react';

import { ISliderElements } from '../../types';

import { Slider } from '../basic/slider';

import { ColorContext } from '../color-context';

type IAlphaSliderProps = {
  elements?: ISliderElements;
};

export function AlphaSlider(props: IAlphaSliderProps) {
  const { color, onChange } = useContext(ColorContext);

  const onSliderChange = (value: number, notGlobalUpdate?: boolean) => {
    onChange({ ...color, a: value }, notGlobalUpdate);
  };

  return <Slider {...props} value={color.a} onChange={onSliderChange} />;
}
