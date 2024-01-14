import { InputHTMLAttributes, useContext } from 'react';

import { Input } from '../basic/input';

import { ColorContext } from '../color-context';
import { hslToHsb, rgbToHsl } from '@bluemojo/utils';

type IBlueInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onFocus' | 'onBlur'
>;

export function BlueInput(props: IBlueInputProps) {
  const { color, onChange } = useContext(ColorContext);

  const onInputChange = (text: string) => {
    const number = parseInt(text);

    if (isNaN(number)) {
      return;
    }

    const b = Math.max(Math.min(parseInt(text), 255), 0);
    const rgb = { ...color.rgb, b };
    const hsl = rgbToHsl(rgb);
    onChange({ ...color, rgb, hsl, hsb: hslToHsb(hsl) });
  };

  return (
    <Input {...props} value={color.rgb.b.toString()} onChange={onInputChange} />
  );
}
