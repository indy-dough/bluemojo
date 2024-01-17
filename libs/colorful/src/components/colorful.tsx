import { HTMLAttributes } from 'react';
import { Bluemojo } from '@bluemojo/elements';
import { ColorfulStyles, IColorfulElements } from './colorful.element';

type IColorfulProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> & {
  hideAlpha?: boolean;
  defaultValue?: string;
  elements?: IColorfulElements;
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
