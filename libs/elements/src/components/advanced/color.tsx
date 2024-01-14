import { HTMLAttributes, useContext } from 'react';

import { ColorContext } from '../color-context';
import { normalizeHexa } from '../../utils/normalize';

type IIColorProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function Color({ value, style, ...props }: IIColorProps) {
  const { color, onChange } = useContext(ColorContext);

  const onColorChange = () => {
    onChange(normalizeHexa(value, color.a));
  };

  return <div {...props} style={{ background: value, cursor: 'pointer', ...style }} onClick={onColorChange} />;
}
