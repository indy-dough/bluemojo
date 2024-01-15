import { Bluemojo } from '@bluemojo/elements';
import { ChromeElement } from './chrome.element';
import { HTMLAttributes } from 'react';

type IChromeProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> & {
  hideAlpha?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export function Chrome({ value, onChange, ...props }: IChromeProps) {
  return (
    <Bluemojo value={value} onChange={onChange}>
      <ChromeElement {...props} />
    </Bluemojo>
  );
}
