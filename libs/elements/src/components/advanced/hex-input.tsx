import { InputHTMLAttributes, useContext } from 'react';

import { Input } from '../basic/input';

import { ColorContext } from '../color-context';
import { colorToHexString, hexaStringToColor } from '../../utils/convertion';
import { normalizeHexa } from '../../utils/normalize';
import { COLORS } from '../../utils/colors';

type IHexInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onFocus' | 'onBlur'
>;

export function HexInput(props: IHexInputProps) {
  const { color, onChange } = useContext(ColorContext);

  const onInputChange = (text: string) => {
    const textLower = text.toLowerCase();

    if (textLower in COLORS) {
      onChange({ ...hexaStringToColor(COLORS[textLower]), a: color.a });
    } else {
      onChange(normalizeHexa(text, color.a));
    }
  };

  return (
    <Input
      {...props}
      value={colorToHexString(color)}
      onChange={onInputChange}
    />
  );
}
