import { CSSProperties } from 'react';

import { IElement, INormalizedElement } from '../types';

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

export function getElementProperties(element?: IElement):
  | {
      className?: string;
      style?: CSSProperties;
    }
  | undefined {
  if (!element) {
    return;
  }

  return {
    className: getClassNameFromElement(element),
    style: getStyleFromElement(element),
  };
}

function normalizeElement(element?: IElement): INormalizedElement {
  if (!element) {
    return {};
  }
  if (typeof element === 'string') {
    return { className: element };
  }

  return element;
}

export function mergeElement(
  element1?: IElement,
  element2?: IElement
): IElement | undefined {
  if (!element1 || !element2) {
    return element1 || element2;
  }

  const normalizedElement1 = normalizeElement(element1);
  const normalizedElement2 = normalizeElement(element2);

  return {
    className:
      !normalizedElement1.className || !normalizedElement2.className
        ? normalizedElement1.className || normalizedElement2.className
        : `${normalizedElement1.className} ${normalizedElement2.className}`,
    style:
      !normalizedElement1?.style || !normalizedElement2?.style
        ? normalizedElement1?.style || normalizedElement2?.style
        : { ...normalizedElement1?.style, ...normalizedElement2?.style },
  };
}

export function mergeElements(
  elements1?: Record<string, IElement>,
  elements2?: Record<string, IElement>
) {
  if (!elements1 || !elements2) {
    return elements1 || elements2;
  }

  const keys = new Set(Object.keys(elements1).concat(Object.keys(elements2)));
  const elements: Record<string, IElement | undefined> = {};

  for (const key of keys) {
    elements[key] = mergeElement(elements1[key], elements2[key]);
  }

  return elements;
}
