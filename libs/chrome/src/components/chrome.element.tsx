import { CSSProperties, HTMLAttributes, useContext, useMemo } from 'react';

import {
  SBPicker,
  HueSlider,
  AlphaSlider,
  HexInput,
  ColorContext,
  mergeElements,
  mergeElement,
  getElementProperties,
} from '@bluemojo/elements';
import { defaultElements, ISliderElements, IElement } from './elements';

export type IChromeElements = {
  SBPicker?: ISliderElements;
  HueSlider?: ISliderElements;
  AlphaSlider?: ISliderElements;
  HexInput?: IElement;
  Probe?: IElement;
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

  const SBPickerElements = useMemo(
    () => mergeElements(elements?.SBPicker, defaultElements.SBPicker),
    [elements?.SBPicker]
  );
  const HueSliderElements = useMemo(
    () => mergeElements(elements?.HueSlider, defaultElements.HueSlider),
    [elements?.HueSlider]
  );
  const AlphaSliderElements = useMemo(
    () => mergeElements(elements?.AlphaSlider, defaultElements.AlphaSlider),
    [elements?.HueSlider]
  );
  const HexInputElement = useMemo(
    () => mergeElement(elements?.HexInput, defaultElements.HexInput),
    [elements?.HueSlider]
  );
  const ProbeElement = useMemo(
    () => mergeElement(elements?.Probe, defaultElements.Probe),
    [elements?.Probe]
  );

  return (
    <div
      {...props}
      style={
        {
          width: 220,
          ...style,
          '--rgba-color': `rgba(${rgb},${color.a})`,
          '--rgb-color': `rgb(${rgb})`,
          '--hsl-color': `hsl(${color.hsl.h} 100% 50%)`,
          '--probe-size': hideAlpha ? '16px' : '32px',
        } as CSSProperties
      }
    >
      <SBPicker elements={SBPickerElements} />
      <div style={{ padding: 10 }}>
        <div
          style={{
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div {...getElementProperties(ProbeElement)} />
          <div style={{ flex: '1 1 100%' }}>
            <HueSlider elements={HueSliderElements} />
            {!hideAlpha && <AlphaSlider elements={AlphaSliderElements} />}
          </div>
        </div>
        <div
          style={{
            marginTop: 8,
          }}
        >
          <HexInput
            hideAlpha={hideAlpha}
            {...getElementProperties(HexInputElement)}
          />
        </div>
      </div>
    </div>
  );
}
