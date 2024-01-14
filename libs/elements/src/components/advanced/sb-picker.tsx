import { useContext } from 'react';

import { ISliderElements } from '../../types';

import { BoardPicker } from '../basic/board-picker';

import { ColorContext } from '../color-context';
import { hsbToHsl, hsbToRgb } from '@bluemojo/utils';

type ISBPickerProps = {
  elements?: ISliderElements;
};

export function SBPicker(props: ISBPickerProps) {
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
    const hsb = { ...color.hsb, s: left, b: bottom };
    onChange(
      { ...color, hsb, hsl: hsbToHsl(hsb), rgb: hsbToRgb(hsb) },
      notGlobalUpdate
    );
  };

  return (
    <BoardPicker
      {...props}
      value={{ left: color.hsb.s, bottom: color.hsb.b }}
      onChange={onSliderChange}
    />
  );
}
