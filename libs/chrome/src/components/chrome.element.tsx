import { CSSProperties, HTMLAttributes, useContext } from 'react';

import {
  SBPicker,
  HueSlider,
  AlphaSlider,
  HexInput,
  ColorContext,
  getClassNameFromElement,
  getStyleFromElement,
} from '@bluemojo/elements';
import {
  DEFAULT_HUE_BACKGROUND,
  DEFAULT_SQUARED_BACKGROUND,
} from '@bluemojo/utils';

type IElement = string | { className?: string; style?: CSSProperties };

type ISliderElements = {
  container?: IElement;
  sliderBox?: IElement;
  slider?: IElement;
};

export type IChromeElements = {
  SBPicker?: ISliderElements;
  HueSlider?: ISliderElements;
  AlphaSlider?: ISliderElements;
  HexInput?: IElement;
};

type IChromeStylesProps = HTMLAttributes<HTMLDivElement> & {
  hideAlpha?: boolean;
  elements?: IChromeElements;
};

export function ChromeElement({
  style,
  hideAlpha,
  elements,
  ...props
}: IChromeStylesProps) {
  const { color } = useContext(ColorContext);

  const rgb = `${color.rgb.r},${color.rgb.g},${color.rgb.b}`;
  const rgba = `rgba(${rgb},${color.a})`;

  return (
    <div {...props} style={{ width: 220, ...style }}>
      <SBPicker
        elements={
          elements?.SBPicker || {
            container: {
              style: {
                height: 150,
                background: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), hsl(${color.hsl.h} 100% 50%)`,
              },
            },
            slider: {
              style: {
                width: 12,
                height: 12,
                boxSizing: 'border-box',
                borderRadius: '50%',
                background: `rgb(${rgb})`,
                border: '1px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,.2)',
              },
            },
          }
        }
      />
      <div style={{ padding: 10 }}>
        <div
          style={{
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              flexShrink: 0,
              borderRadius: '50%',
              width: hideAlpha ? 16 : 32,
              height: hideAlpha ? 16 : 32,
              background: `linear-gradient(to right, ${rgba}, ${rgba}), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
              border: '1px solid #C7C7C7',
            }}
          />
          <div style={{ flex: '1 1 100%' }}>
            <HueSlider
              elements={
                elements?.HueSlider || {
                  container: {
                    style: {
                      height: 11,
                      borderRadius: 2,
                      background: DEFAULT_HUE_BACKGROUND,
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
                }
              }
            />
            {!hideAlpha && (
              <AlphaSlider
                elements={
                  elements?.AlphaSlider || {
                    container: {
                      style: {
                        gridColumn: 2,
                        height: 11,
                        borderRadius: 2,
                        background: `linear-gradient(to right, transparent 0%, hsl(${color.hsl.h} 100% 50%) 100%), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
                        marginTop: 8,
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
                  }
                }
              />
            )}
          </div>
        </div>
        <div
          style={{
            marginTop: 8,
          }}
        >
          <HexInput
            hideAlpha={hideAlpha}
            className={getClassNameFromElement(elements?.HexInput)}
            style={
              getStyleFromElement(elements?.HexInput) || {
                display: 'block',
                width: '100%',
                fontSize: 11,
                boxSizing: 'border-box',
                padding: '4px 3px',
                border: '1px solid #C7C7C7',
                borderRadius: 4,
                textAlign: 'center',
              }
            }
          />
        </div>
      </div>
    </div>
  );
}
