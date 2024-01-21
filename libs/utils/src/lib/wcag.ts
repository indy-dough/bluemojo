/**
 * https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 * https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced
 * https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
 */

export function wcagAASmallText(contrast: number) {
  return contrast > 4.5;
}

export function wcagAALargeText(contrast: number) {
  return contrast > 3;
}

export function wcagAANonText(contrast: number) {
  return contrast > 3;
}

export function wcagAAASmallText(contrast: number) {
  return contrast > 7;
}

export function wcagAAALargeText(contrast: number) {
  return contrast > 4.5;
}
