import { CSSProperties } from 'react';

import { IElement } from '../types';

export function getClassNameFromElement(
  element?: IElement
): string | undefined {
  return typeof element === 'string' ? element : element?.className;
}

export function getStyleFromElement(
  element?: IElement
): CSSProperties | undefined {
  return typeof element === 'object' ? element.style : undefined;
}
