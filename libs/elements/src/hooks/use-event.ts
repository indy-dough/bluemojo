import { useRef, useCallback } from 'react';

// https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
export default function useEvent<Handler extends (...args: any) => any>(
  handler: Handler
): (...args: Parameters<Handler>) => ReturnType<Handler> {
  const handlerRef = useRef<Handler>(handler);

  handlerRef.current = handler;

  return useCallback((...args: any[]) => handlerRef.current(...args), []);
}
