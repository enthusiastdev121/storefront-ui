import { useEventListener } from '@vueuse/core';
import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { Ref, ref, watch } from 'vue';
import { focusFirstElement, focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { waitForNextRender } from '../render';

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: Ref<boolean>;
  };
/**
 * arrowFocusGroupSelector - when arrow left/right press will focus first element of given selector requirement: all children needs to be same structure, options dedicated for slider with many items that has focusable elements inside
 * trapTabs - define if tab should be trapped inside container, usefull when user would like to have only arrow right/left trapped but not tab
 * */
const defaultOptions = {
  trapTabs: true,
  activeState: ref(true),
};
export const useTrapFocus = (containerElementRef: Ref<HTMLElement | undefined>, options?: UseTrapFocusOptions) => {
  const { trapTabs, arrowFocusGroupSelector, includeContainer, activeState } = { ...defaultOptions, ...options };
  const currentlyFocused = ref<HTMLElement | undefined>();
  const focusableElements = ref<FocusableElement[]>([]);
  let containeHTMLElement: HTMLElement | null;

  useEventListener(
    containerElementRef,
    'focus',
    () => {
      currentlyFocused.value = document.activeElement as HTMLElement;
    },
    true,
  );

  watch(
    [containerElementRef, activeState],
    async ([containerElement, activeState]) => {
      if (containerElement && activeState) {
        containeHTMLElement = containerElement;
        await waitForNextRender();
        focusableElements.value = tabbable(containeHTMLElement, { includeContainer });
        focusFirstElement({ focusables: focusableElements.value });
      } else {
        focusableElements.value = [];
        currentlyFocused.value = undefined;
      }
    },
    { immediate: true },
  );

  useEventListener(containerElementRef, 'keydown', (event: KeyboardEvent) => {
    const isAnyGroupElement = arrowFocusGroupSelector && containeHTMLElement?.querySelector(arrowFocusGroupSelector);
    if (event.key === 'ArrowRight') {
      focusNext({
        current: currentlyFocused.value,
        focusables: focusableElements.value,
        ...(isAnyGroupElement && { arrowFocusGroupSelector }),
      });
    } else if (event.key === 'ArrowLeft') {
      focusPrev({
        current: currentlyFocused.value,
        focusables: focusableElements.value,
        ...(isAnyGroupElement && { arrowFocusGroupSelector }),
      });
    }

    if (trapTabs && isTab(event)) {
      focusNext({ current: currentlyFocused.value, event, focusables: focusableElements.value });
    }

    if (trapTabs && isTabAndShift(event)) {
      focusPrev({ current: currentlyFocused.value, event, focusables: focusableElements.value });
    }
  });

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
  };
};
