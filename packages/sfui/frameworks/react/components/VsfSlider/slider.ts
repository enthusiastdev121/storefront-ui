import { useCallback, useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import { equal, Options, VSFSlider } from '@storefront-ui/shared';

export function useSlider<T extends HTMLElement>(
  options?: Partial<Options>,
): [(node: T | null) => void, MutableRefObject<VSFSlider | null>] {
  const sliderRef = useRef<VSFSlider | null>(null);
  const currentOptions = useRef(options);

  const onRefChange = useCallback(
    (node: T | null) => {
      if (node) {
        currentOptions.current = options;
        sliderRef.current = new VSFSlider(node, options);
      } else {
        sliderRef.current?.destroy?.();
        sliderRef.current = null;
      }
    },
    [options],
  );

  useEffect(() => {
    if (!equal(currentOptions.current, options)) {
      currentOptions.current = options;

      if (sliderRef.current) {
        sliderRef.current.update(currentOptions.current);
      }
    }
  }, [options]);

  return [onRefChange, sliderRef];
}
