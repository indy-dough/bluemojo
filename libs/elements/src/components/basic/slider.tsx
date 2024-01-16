import {
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ISliderElements } from '../../types';

import useEvent from '../../hooks/use-event';

import { getElementProperties, mergeElement } from '../../utils/style';

type ISliderProps = {
  elements?: ISliderElements;
  value: number;
  onChange: (value: number, notGlobalUpdate?: boolean) => void;
};

export function Slider({ elements, value, onChange }: ISliderProps) {
  const container = useRef<HTMLDivElement>(null);
  const [down, setDown] = useState(false);
  const [innerValue, setInnerValue] = useState<number>(value);

  const handleSlide = useCallback(
    (x: number, notGlobalUpdate?: boolean) => {
      if (!container.current) {
        return;
      }

      const left =
        x - container.current.getBoundingClientRect().left - window.scrollX;

      const innerValue = Math.max(
        Math.min(left / container.current.clientWidth, 1),
        0
      );

      setInnerValue(innerValue);
      onChange(innerValue, notGlobalUpdate);
    },
    [onChange]
  );

  const onTouch: TouchEventHandler<HTMLDivElement> = (event) => {
    handleSlide(event.touches[0].pageX, down);
  };

  const onMouseDown: MouseEventHandler = (event) => {
    setDown(true);
    handleSlide(event.pageX);
  };

  const onMouseMove = useEvent((event: MouseEvent) => {
    handleSlide(event.pageX, true);
  });

  const onMouseUp = useEvent(() => {
    setDown(false);
    onChange(innerValue);
  });

  useEffect(() => {
    if (!down) {
      return;
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [down]);

  const containerElement = useMemo(
    () =>
      mergeElement(elements?.container, {
        style: {
          position: 'relative',
        },
      }),
    [elements?.container]
  );

  const sliderBoxElement = useMemo(
    () =>
      mergeElement(elements?.sliderBox, {
        style: {
          position: 'absolute',
          left: `${(down ? innerValue : value) * 100}%`,
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        },
      }),
    [elements?.sliderBox, down, innerValue, value]
  );

  return (
    <div
      ref={container}
      {...getElementProperties(containerElement)}
      onMouseDown={onMouseDown}
      onTouchMove={onTouch}
      onTouchStart={onTouch}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div {...getElementProperties(sliderBoxElement)}>
            <div {...getElementProperties(elements?.slider)} />
          </div>
        </div>
      </div>
    </div>
  );
}
