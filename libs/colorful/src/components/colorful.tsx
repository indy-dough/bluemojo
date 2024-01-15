import { Bluemojo } from '@bluemojo/elements';
import { ColorfulStyles } from './colorful.element';
import { HTMLAttributes } from 'react';

type IColorfulProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> & {
  hideAlpha?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export function Colorful({ value, onChange, ...props }: IColorfulProps) {
  return (
    <Bluemojo value={value} onChange={onChange}>
      <ColorfulStyles {...props} />
    </Bluemojo>
  );
}
