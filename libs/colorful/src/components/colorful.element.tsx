import { CSSProperties, HTMLAttributes, useContext } from 'react';

import {
  SBPicker,
  HueSlider,
  AlphaSlider,
  ColorContext,
} from '@bluemojo/elements';
import {
  DEFAULT_HUE_BACKGROUND,
  DEFAULT_SQUARED_BACKGROUND,
} from '@bluemojo/utils';

type IColorfulElementProps = HTMLAttributes<HTMLDivElement>;

export function ColorfulStyles({ style, ...props }: IColorfulElementProps) {
  const { color } = useContext(ColorContext);

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

  return (
    <div {...props} style={{ width: 200, ...style }}>
      <SBPicker
        elements={{
          container: {
            style: {
              height: 152,
              borderRadius: '8px 8px 0 0',
              background: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), hsl(${color.hsl.h} 100% 50%)`,
              paddingBottom: 12,
            },
          },
          sliderBox: {
            style: { zIndex: 3 },
          },
          slider: slider(`rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`),
        }}
      />
      <HueSlider
        elements={{
          container: {
            style: {
              height: 24,
              background: DEFAULT_HUE_BACKGROUND,
            },
          },
          sliderBox: {
            style: { zIndex: 2 },
          },
          slider: slider(`hsl(${color.hsl.h} 100% 50%)`),
        }}
      />
      <AlphaSlider
        elements={{
          container: {
            style: {
              gridColumn: 1,
              height: 24,
              background: `linear-gradient(to right, transparent 0%, hsl(${color.hsl.h} 100% 50%) 100%), url('${DEFAULT_SQUARED_BACKGROUND}')`,
              borderRadius: '0 0 8px 8px',
            },
          },
          sliderBox: {
            style: { zIndex: 1 },
          },
          slider: slider(
            `linear-gradient(to right, hsla(${color.hsl.h}, 100%, 50%, ${color.a}) 0%, hsla(${color.hsl.h}, 100%, 50%, ${color.a}) 100%), url('${DEFAULT_SQUARED_BACKGROUND}'), white`
          ),
        }}
      />
    </div>
  );
}
