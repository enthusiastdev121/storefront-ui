import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { focusFirstElement, focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { useEffect, useRef, type RefObject } from 'react';

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: boolean;
  };
/**
 * arrowFocusGroupSelector - when arrow left/right press will focus first element of given selector requirement: all children needs to be same structure, options dedicated for slider with many items that has focusable elements inside
 * trapTabs - define if tab should be trapped inside container, usefull when user would like to have only arrow right/left trapped but not tab
 * */
const defaultOptions = {
  trapTabs: true,
  activeState: true,
};
export const useTrapFocus = (containerElementRef: RefObject<HTMLElement | null>, options?: UseTrapFocusOptions) => {
  const { trapTabs, arrowFocusGroupSelector, includeContainer, activeState } = { ...defaultOptions, ...options };
  const currentlyFocused = useRef<HTMLElement | undefined>();
  const focusableElements = useRef<FocusableElement[]>([]);

  const onKeyDownListener = (event: KeyboardEvent) => {
    const isAnyGroupElement =
      arrowFocusGroupSelector && containerElementRef.current?.querySelector(arrowFocusGroupSelector);
    if (event.key === 'ArrowRight') {
      focusNext({
        current: currentlyFocused.current,
        focusables: focusableElements.current,
        ...(isAnyGroupElement && { arrowFocusGroupSelector }),
      });
    } else if (event.key === 'ArrowLeft') {
      focusPrev({
        current: currentlyFocused.current,
        focusables: focusableElements.current,
        ...(isAnyGroupElement && { arrowFocusGroupSelector }),
      });
    }

    if (trapTabs && isTab(event)) {
      focusNext({ current: currentlyFocused.current, event, focusables: focusableElements.current });
    }

    if (trapTabs && isTabAndShift(event)) {
      focusPrev({ current: currentlyFocused.current, event, focusables: focusableElements.current });
    }
  };
  const onFocusListener = () => {
    currentlyFocused.current = document.activeElement as HTMLElement | undefined;
  };

  const removeEventListeners = () => {
    containerElementRef.current?.removeEventListener('keydown', onKeyDownListener);
    containerElementRef.current?.removeEventListener('keydown', onFocusListener);
  };

  useEffect(() => {
    if (containerElementRef.current) {
      containerElementRef.current?.addEventListener('focus', onFocusListener, true);
      containerElementRef.current?.addEventListener('keydown', onKeyDownListener);
    } else {
      removeEventListeners();
    }
    if (containerElementRef.current && activeState) {
      focusableElements.current = tabbable(containerElementRef.current, { includeContainer });
      focusFirstElement({ focusables: focusableElements.current });
    } else {
      focusableElements.current = [];
      currentlyFocused.current = undefined;
    }

    return removeEventListeners;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeState, containerElementRef.current]);

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
  };
};
