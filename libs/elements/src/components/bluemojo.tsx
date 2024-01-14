import { ReactNode, useCallback, useEffect, useState } from 'react';

import { IColor } from '../types';

import { ColorContext } from './color-context';
import { colorToHexaString } from '../utils/convertion';
import { normalizeHexa } from '../utils/normalize';
import { DEFAULT_COLOR, DEFAULT_HEX_COLOR } from '../utils/colors';

export type IBluemojoProps = {
  children: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
};

export function Bluemojo({ children, value, onChange }: IBluemojoProps) {
  const [innerColor, setInnerColor] = useState<IColor>(DEFAULT_COLOR);
  const [innerValue, setInnerValue] = useState(DEFAULT_HEX_COLOR);

  useEffect(() => {
    if (value !== innerValue) {
      const innerColor = normalizeHexa(value);

      setInnerValue(colorToHexaString(innerColor));
      setInnerColor(innerColor);
    }
  }, [value]);

  const onChangeHandle = useCallback(
    (innerColor: IColor, notGlobalUpdate?: boolean) => {
      const innerValue = colorToHexaString(innerColor);

      setInnerValue(innerValue);
      setInnerColor(innerColor);
      if (!notGlobalUpdate) {
        onChange?.(innerValue);
      }
    },
    [onChange]
  );

  return (
    <ColorContext.Provider
      value={{ color: innerColor, onChange: onChangeHandle }}
    >
      {children}
    </ColorContext.Provider>
  );
}
