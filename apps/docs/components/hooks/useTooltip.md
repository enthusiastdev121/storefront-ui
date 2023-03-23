---
layout: AtomLayout
hideBreadcrumbs: true
description: A wrapper for usePopover with additional features for creating tooltips.
---

# useTooltip

::: slot usage

`useTooltip` is a wrapper around `usePopover` that adds specific behavior for displaying tooltips. For example, the tooltip will automatically hide/show depending on the hover state of a given element.

## Usage



<!-- react -->
To implement a tooltip, we can use the `useTooltip` hook to create a custom tooltip component. This hook returns a set of properties that can be used to build a custom tooltip component. For a minimal example, we can implement a tooltip using the following properties:

1. `refs` - An object that contains a `floating` property that should be placed on your tooltip content
2. `isOpen` - A boolean that indicates whether or not the tooltip should be open
3. `getTriggerProps` - A function that returns the props that should be placed on the trigger element (the element that the tooltip will be positioned relative to)
4. `getTooltipProps` - A function that returns the props that should be placed on the tooltip element
5. `getArrowProps` - A function that returns the props that should be placed on the tooltip arrow element

So if we wanted to build a custom tooltip with `Transition`, we could do something like this:
```tsx
import * as React from 'react';
import { useTooltip } from '@storefront-ui/react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props {
  children?: React.ReactNode;
  label?: string;
}

function CustomTooltip(props: Props) {
  const { children, label } = props;
  const { refs, isOpen, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip();

  return (
    <span {...getTriggerProps()}>
      {children}<
      <Transition nodeRef={refs.floating} in={isOpen} timeout={300} unmountOnExit mountOnEnter>
        {(state) => (
          <div
            {...getTooltipProps({
              style: transitionStyles[state],
              className: 'bg-green-800 p-1 rounded text-white w-max transition-opacity duration-300',
            })}
          >
            {label}
            <span {...getArrowProps({ className: 'bg-green-800 w-[8px] h-[8px] rotate-45' })} />
          </div>
        )}
      </Transition>
    </span>
  );
}
```
<!-- end react -->
<!-- vue -->

To implement a tooltip, we can use the `useTooltip` composable to create a custom tooltip component. This hook returns a set of properties that can be used to build a custom tooltip component. For a minimal example, we can implement a tooltip using the following properties:

1. `isOpen` - A boolean that indicates whether or not the tooltip should be open
2. `triggerProps` - An object containing the props that should be placed on the trigger element (the element that the tooltip will be positioned relative to)
3. `tooltipProps` - An object containing the props that should be placed on the tooltip element
4. `arrowProps` - An object containing  the props that should be placed on the tooltip arrow element

So if we wanted to build a custom tooltip with `Transition`, we could do something like this:

```vue
<script lang="ts" setup>
import { toRefs } from 'vue';
import { useTooltip } from '@storefront-ui/vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});

const { label } = toRefs(props);
const { isOpen, triggerProps, tooltipProps, arrowProps } = useTooltip();
</script>

<template>
  <span v-bind="triggerProps">
    <slot />
    <div
      v-if="label && isOpen"
      class="bg-green-800 p-1 rounded text-white w-max transition-opacity duration-300"
      v-bind="tooltipProps"
    >
      {{ label }}
      <span v-bind="arrowProps" class="bg-green-800 w-[8px] h-[8px] rotate-45" />
    </div>
  </span>
</template>
```
<!-- end vue -->

:::

::: slot api

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| arrowSize | `CSSLength`    | '6px'      | Size of arrow in any of CSS length units (px, rem, vw, etc)              |
<!-- vue -->
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
| arrowRef  | `MaybeElementRef<HTMLElement>`  | `undefined`              |                 |
<!-- end vue -->
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| style           | `StylesObject` |               |  Style objects for floating and arrow elements |
<!-- react -->
| isOpen          | `boolean`      |               |             |
| refs  | `Object`   |               | Element refs setters & getters            |
| getTriggerProps | `PropsGetters` |               |             |
| getTooltipProps | `PropsGetters` |               |             |
| getArrowProps   | `PropsGetters` |               |             |
<!-- end react -->
<!-- vue -->
| isOpen          | `Ref<boolean>`      |               |             |
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
| arrowRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element that will receive arrow styling and positioning  |
| triggerProps | `PropsObject` |               |             |
| tooltipProps | `PropsObject` |               |             |
| arrowProps   | `PropsObject` |               |             |
<!-- end vue -->
| open            | `() => void`   |               |             |
| close           | `() => void`   |               |             |
| toggle          | `() => void`   |               |             |

:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/useTooltip/useTooltip.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useTooltip/useTooltip.ts
<!-- end vue -->

</SourceCode>
:::
