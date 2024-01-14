import { InputHTMLAttributes, useContext } from 'react';

import { Input } from '../basic/input';

import { ColorContext } from '../color-context';

type IAlphaInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur'>;

export function AlphaInput(props: IAlphaInputProps) {
  const { color, onChange } = useContext(ColorContext);

  const onInputChange = (text: string) => {
    const number = parseInt(text);

    if (isNaN(number)) {
      return;
    }

    const a = Math.max(Math.min(parseInt(text), 100), 0);
    onChange({ ...color, a: a / 100 });
  };

  return <Input {...props} value={Math.floor(color.a * 100).toString()} onChange={onInputChange} />;
}
