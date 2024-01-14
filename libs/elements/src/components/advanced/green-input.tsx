import { InputHTMLAttributes, useContext } from 'react';

import { Input } from '../basic/input';

import { ColorContext } from '../color-context';
import { hslToHsb, rgbToHsl } from '@bluemojo/utils';

type IGreenInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onFocus' | 'onBlur'
>;

export function GreenInput(props: IGreenInputProps) {
  const { color, onChange } = useContext(ColorContext);

  const onInputChange = (text: string) => {
    const number = parseInt(text);

    if (isNaN(number)) {
      return;
    }

    const g = Math.max(Math.min(parseInt(text), 255), 0);
    const rgb = { ...color.rgb, g };
    const hsl = rgbToHsl(rgb);
    onChange({ ...color, rgb, hsl, hsb: hslToHsb(hsl) });
  };

  return (
    <Input {...props} value={color.rgb.g.toString()} onChange={onInputChange} />
  );
}
