import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

type IInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur'> & {
  value: string;
  onChange: (value: string) => void;
};

export function Input({ value, onChange, ...props }: IInputProps) {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) {
      setText(value);
    }
  }, [focused, value]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onBlur = () => {
    onChange(text);
    setFocused(false);
  };

  return (
    <input
      {...props}
      value={focused ? text : value}
      onChange={onInputChange}
      onFocus={() => setFocused(true)}
      onBlur={onBlur}
    />
  );
}
