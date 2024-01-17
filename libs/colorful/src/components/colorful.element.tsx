import { CSSProperties, HTMLAttributes, useContext, useMemo } from 'react';

import {
  SBPicker,
  HueSlider,
  AlphaSlider,
  ColorContext,
  mergeElements,
} from '@bluemojo/elements';
import { defaultElements, ISliderElements } from './elements';

export type IColorfulElements = {
  SBPicker?: ISliderElements;
  HueSlider?: ISliderElements;
  AlphaSlider?: ISliderElements;
};

type IColorfulElementProps = HTMLAttributes<HTMLDivElement> & {
  hideAlpha?: boolean;
  elements?: IColorfulElements;
};

export function ColorfulStyles({
  style,
  hideAlpha,
  elements,
  ...props
}: IColorfulElementProps) {
  const { color } = useContext(ColorContext);

  const localStyle = useMemo(() => {
    const rgb = `${color.rgb.r},${color.rgb.g},${color.rgb.b}`;

    return {
      width: 200,
      ...style,
      '--rgba-color': `rgba(${rgb},${color.a})`,
      '--rgb-color': `rgb(${rgb})`,
      '--hsl-color': `hsl(${color.hsl.h} 100% 50%)`,
      '--hsla-color': `hsl(${color.hsl.h}, 100%, 50%, ${color.a})`,
      '--hue-slider-border-radius': hideAlpha ? '0 0 8px 8px' : undefined,
    } as CSSProperties;
  }, [hideAlpha, color, style]);

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
    [elements?.AlphaSlider]
  );

  return (
    <div {...props} style={localStyle}>
      <SBPicker elements={SBPickerElements} />
      <HueSlider elements={HueSliderElements} />
      {!hideAlpha && <AlphaSlider elements={AlphaSliderElements} />}
    </div>
  );
}
