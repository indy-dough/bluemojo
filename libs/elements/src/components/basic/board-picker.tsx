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

type IBoardPickerProps = {
  elements?: ISliderElements;
  value: { left: number; bottom: number };
  onChange: (
    value: { left: number; bottom: number },
    notGlobalUpdate?: boolean
  ) => void;
};

export function BoardPicker({ elements, value, onChange }: IBoardPickerProps) {
  const container = useRef<HTMLDivElement>(null);
  const [down, setDown] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const handleSlide = useCallback(
    (x: number, y: number, notGlobalUpdate?: boolean) => {
      if (!container.current) {
        return;
      }

      const containerWidth = container.current.clientWidth;
      const containerHeight = container.current.clientHeight;
      const rect = container.current.getBoundingClientRect();
      const containerLeft = rect.left;
      const containerTop = rect.top;
      const left = x - containerLeft - window.scrollX;
      const bottom = containerHeight - (y - containerTop - window.scrollY);

      const s = Math.max(Math.min(left / containerWidth, 1), 0);
      const b = Math.max(Math.min(bottom / containerHeight, 1), 0);

      const innerValue = { left: s, bottom: b };

      setInnerValue(innerValue);
      onChange(innerValue, notGlobalUpdate);
    },
    [onChange]
  );

  const onTouch: TouchEventHandler<HTMLDivElement> = (event) => {
    handleSlide(event.touches[0].pageX, event.touches[0].pageY, down);
  };

  const onMouseDown: MouseEventHandler = (event) => {
    setDown(true);
    handleSlide(event.pageX, event.pageY);
  };

  const onMouseMove = useEvent((event: MouseEvent) => {
    handleSlide(event.pageX, event.pageY, true);
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
          bottom: `${(down ? innerValue.bottom : value.bottom) * 100}%`,
          left: `${(down ? innerValue.left : value.left) * 100}%`,
          transform: 'translateX(-50%) translateY(50%)',
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
