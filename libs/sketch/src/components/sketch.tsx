import { Bluemojo } from '@bluemojo/elements';
import { SketchStyles } from './sketch.element';
import { HTMLAttributes } from 'react';

type ISketchProps = HTMLAttributes<HTMLDivElement> & {
  value?: string;
  onChange?: (value: string) => void;
};

export function Sketch({ value, onChange, ...props }: ISketchProps) {
  return (
    <Bluemojo value={value} onChange={onChange}>
      <SketchStyles {...props} />
    </Bluemojo>
  );
}
