import { useContext } from 'react';

import { ISliderElements } from '../../types';

import { BoardPicker } from '../basic/board-picker';

import { ColorContext } from '../color-context';
import { hslToHsb, hslToRgb } from '@bluemojo/utils';

type ISLPickerProps = {
  elements?: ISliderElements;
};

export function SLPicker(props: ISLPickerProps) {
  const { color, onChange } = useContext(ColorContext);

  const onSliderChange = (
    {
      left,
      bottom,
    }: {
      left: number;
      bottom: number;
    },
    notGlobalUpdate?: boolean
  ) => {
    const hsl = { ...color.hsl, s: left, l: bottom };
    onChange(
      { ...color, hsl, hsb: hslToHsb(hsl), rgb: hslToRgb(hsl) },
      notGlobalUpdate
    );
  };

  return (
    <BoardPicker
      {...props}
      value={{ left: color.hsl.s, bottom: color.hsl.l }}
      onChange={onSliderChange}
    />
  );
}
