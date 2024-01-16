import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { IColor } from '../types';

import { ColorContext } from './color-context';
import { colorToHexaString } from '../utils/convertion';
import { normalizeHexa } from '../utils/normalize';
import { DEFAULT_COLOR } from '../utils/colors';

export type IBluemojoProps = {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function Bluemojo({
  children,
  defaultValue,
  value,
  onChange,
}: IBluemojoProps) {
  const defaultInnerColor = useMemo(
    () => (defaultValue ? normalizeHexa(defaultValue) : DEFAULT_COLOR),
    []
  );
  const [innerColor, setInnerColor] = useState<IColor>(defaultInnerColor);
  const [innerValue, setInnerValue] = useState(value);

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
