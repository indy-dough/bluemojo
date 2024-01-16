import { HTMLAttributes } from 'react';

import { Bluemojo } from '@bluemojo/elements';
import { ChromeElement, IChromeElements } from './chrome.element';

type IChromeProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> & {
  hideAlpha?: boolean;
  defaultValue?: string;
  elements?: IChromeElements;
  value?: string;
  onChange?: (value: string) => void;
};

export function Chrome({
  defaultValue,
  value,
  onChange,
  ...props
}: IChromeProps) {
  return (
    <Bluemojo defaultValue={defaultValue} value={value} onChange={onChange}>
      <ChromeElement {...props} />
    </Bluemojo>
  );
}
