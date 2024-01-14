import { createContext } from 'react';

import { IColor } from '../types';

import { DEFAULT_COLOR } from '../utils/colors';

export const ColorContext = createContext<{
  color: IColor;
  onChange: (value: IColor, notGlobalUpdate?: boolean) => void;
}>({
  color: DEFAULT_COLOR,
  onChange: () => {},
});
