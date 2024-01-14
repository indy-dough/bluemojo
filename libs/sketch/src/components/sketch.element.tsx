import { CSSProperties, HTMLAttributes, useContext } from 'react';

import {
  SBPicker,
  HueSlider,
  AlphaSlider,
  HexInput,
  RedInput,
  GreenInput,
  BlueInput,
  AlphaInput,
  ColorContext,
  Color,
} from '@bluemojo/elements';
import {
  DEFAULT_HUE_BACKGROUND,
  DEFAULT_SQUARED_BACKGROUND,
} from '@bluemojo/utils';

const colors = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

type ISketchElementProps = HTMLAttributes<HTMLDivElement>;

export function SketchStyles({ style, ...props }: ISketchElementProps) {
  const { color } = useContext(ColorContext);

  const rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.a})`;
  const inputStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    fontSize: 11,
    boxSizing: 'border-box',
    padding: '4px 10% 3px',
    border: 'none',
    boxShadow: 'rgb(204, 204, 204) 0px 0px 0px 1px inset',
  };
  const labelStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: 11,
    color: '#222222',
    paddingTop: 3,
    paddingBottom: 4,
  };

  return (
    <div {...props} style={{ width: 220, ...style }}>
      <div style={{ padding: 10 }}>
        <SBPicker
          elements={{
            container: {
              style: {
                height: 150,
                background: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), hsl(${color.hsl.h} 100% 50%)`,
              },
            },
            slider: {
              style: {
                width: 4,
                height: 4,
                borderRadius: '50%',
                boxShadow:
                  'rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px',
              },
            },
          }}
        />
        <div
          style={{
            marginTop: 4,
            display: 'grid',
            gap: 4,
            gridTemplateColumns: '1fr 24px',
          }}
        >
          <HueSlider
            elements={{
              container: {
                style: {
                  height: 10,
                  background: DEFAULT_HUE_BACKGROUND,
                  padding: '0 3px',
                },
              },
              slider: {
                style: {
                  height: 8,
                  width: 4,
                  borderRadius: 1,
                  backgroundColor: '#fff',
                  boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px',
                },
              },
            }}
          />
          <AlphaSlider
            elements={{
              container: {
                style: {
                  gridColumn: 1,
                  height: 10,
                  background: `linear-gradient(to right, transparent 0%, hsl(${color.hsl.h} 100% 50%) 100%), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
                  padding: '0 3px',
                },
              },
              slider: {
                style: {
                  height: 8,
                  width: 4,
                  borderRadius: 1,
                  backgroundColor: '#fff',
                  boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px',
                },
              },
            }}
          />
          <div
            style={{
              gridArea: '1 / 2 / 3',
              borderRadius: 2,
              boxShadow:
                'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset',
              background: `linear-gradient(to right, ${rgba}, ${rgba}), url('${DEFAULT_SQUARED_BACKGROUND}') left center`,
            }}
          />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: 8,
            marginTop: 8,
          }}
        >
          <div>
            <HexInput style={inputStyle} />
            <div style={labelStyle}>Hex</div>
          </div>
          <div>
            <RedInput style={inputStyle} />
            <div style={labelStyle}>R</div>
          </div>
          <div>
            <GreenInput style={inputStyle} />
            <div style={labelStyle}>G</div>
          </div>
          <div>
            <BlueInput style={inputStyle} />
            <div style={labelStyle}>B</div>
          </div>
          <div>
            <AlphaInput style={inputStyle} />
            <div style={labelStyle}>A</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: '16px 16px',
          gap: 10,
          borderTop: '1px solid #eeeeee',
          padding: 10,
        }}
      >
        {colors.map((color) => (
          <Color
            key={color}
            value={color}
            style={{
              borderRadius: 3,
              boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
            }}
          />
        ))}
      </div>
    </div>
  );
}
