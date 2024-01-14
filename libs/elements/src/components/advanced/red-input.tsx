import { InputHTMLAttributes, useContext } from 'react';

import { Input } from '../basic/input';

import { ColorContext } from '../color-context';
import { hslToHsb, rgbToHsl } from '@bluemojo/utils';

type IRedInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onFocus' | 'onBlur'
>;

export function RedInput(props: IRedInputProps) {
  const { color, onChange } = useContext(ColorContext);

  const onInputChange = (text: string) => {
    const number = parseInt(text);

    if (isNaN(number)) {
      return;
    }

    const r = Math.max(Math.min(number, 255), 0);
    const rgb = { ...color.rgb, r };
    const hsl = rgbToHsl(rgb);
    onChange({ ...color, rgb, hsl, hsb: hslToHsb(hsl) });
  };

  return (
    <Input {...props} value={color.rgb.r.toString()} onChange={onInputChange} />
  );
}
