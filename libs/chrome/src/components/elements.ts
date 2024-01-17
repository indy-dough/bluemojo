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

const SBPicker: ISliderElements = {
  container: {
    style: {
      height: 150,
      background: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), var(--hsl-color)`,
    },
  },
  slider: {
    style: {
      width: 12,
      height: 12,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'var(--rgb-color)',
      border: '1px solid white',
      boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    },
  },
};

function slider(styles: CSSProperties) {
  return {
    container: {
      style: {
        height: 11,
        borderRadius: 2,
        ...styles,
      },
    },
    slider: {
      style: {
        height: 14,
        width: 14,
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px',
      },
    },
  };
}

const HueSlider: ISliderElements = slider({
  background: DEFAULT_HUE_BACKGROUND,
});

const AlphaSlider: ISliderElements = slider({
  background: `linear-gradient(to right, transparent 0%, var(--hsl-color) 100%), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
  marginTop: 8,
});

const HexInput: IElement = {
  style: {
    display: 'block',
    width: '100%',
    fontSize: 11,
    boxSizing: 'border-box',
    padding: '4px 3px',
    border: '1px solid #C7C7C7',
    borderRadius: 4,
    textAlign: 'center',
  },
};

const Probe: IElement = {
  style: {
    flexShrink: 0,
    borderRadius: '50%',
    width: 'var(--probe-size)',
    height: 'var(--probe-size)',
    background: `linear-gradient(to right, var(--rgba-color), var(--rgba-color)), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
    border: '1px solid #C7C7C7',
  },
};

export const defaultElements = {
  SBPicker,
  HueSlider,
  AlphaSlider,
  HexInput,
  Probe,
};
