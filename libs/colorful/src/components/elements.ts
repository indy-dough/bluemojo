import { CSSProperties } from 'react';
import {
  DEFAULT_HUE_BACKGROUND,
  DEFAULT_SQUARED_BACKGROUND,
} from '@bluemojo/utils';

export type IElement = string | { className?: string; style?: CSSProperties };

export type ISliderElements = {
  container?: IElement;
  sliderBox?: IElement;
  slider?: IElement;
};

const slider = (background: string): { style: CSSProperties } => ({
  style: {
    width: 28,
    height: 28,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background,
    border: '2px solid white',
    boxShadow: '0 2px 4px rgba(0,0,0,.2)',
  },
});

const SBPicker: ISliderElements = {
  container: {
    style: {
      height: 152,
      borderRadius: '8px 8px 0 0',
      background:
        'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), var(--hsl-color)',
      paddingBottom: 12,
    },
  },
  sliderBox: {
    style: { zIndex: 3 },
  },
  slider: slider('var(--rgb-color)'),
};

const HueSlider: ISliderElements = {
  container: {
    style: {
      height: 24,
      background: DEFAULT_HUE_BACKGROUND,
      borderRadius: 'var(--hue-slider-border-radius)',
    },
  },
  sliderBox: {
    style: { zIndex: 2 },
  },
  slider: slider(`var(--hsl-color)`),
};

const AlphaSlider: ISliderElements = {
  container: {
    style: {
      gridColumn: 1,
      height: 24,
      background: `linear-gradient(to right, transparent 0%, var(--hsl-color) 100%), url('${DEFAULT_SQUARED_BACKGROUND}')`,
      borderRadius: '0 0 8px 8px',
    },
  },
  sliderBox: {
    style: { zIndex: 1 },
  },
  slider: slider(
    `linear-gradient(to right, var(--hsla-color) 0%, var(--hsla-color) 100%), url('${DEFAULT_SQUARED_BACKGROUND}'), white`
  ),
};

export const defaultElements = {
  SBPicker,
  HueSlider,
  AlphaSlider,
};
