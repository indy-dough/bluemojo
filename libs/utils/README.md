# @bluemojo/utils

This is a package for color utils

## Installation

```sh
npm install @bluemojo/utils
```

## Conversion utils

Utils for different transformation between color schemas (hsl, hsb/hsl, rgb).

```ts
hslToRgb(color: IHsl): IRgb
hslToHsb(color: IHsl): IHsb
hsbToRgb(color: IHsb): IRgb
hsbToHsl(color: IHsb): IHsl
rgbToHsl(color: IRgb): IHsl
```

## Contrast utils

Utils for checking contrast between colors. Implemented according to [WCAG guidelines](https://accessibleweb.com/color-contrast-checker/).

```ts
rgbContrast(color1: IRgb, color2: IRgb): number
wcagAASmallText(contrast: number): boolean
wcagAALargeText(contrast: number): boolean
wcagAANonText(contrast: number): boolean
wcagAAASmallText(contrast: number): boolean
wcagAAALargeText(contrast: number): boolean
```
