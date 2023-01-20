---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Search

The Search component is used to search for content on the page.

<Generate />

## Props

| Prop name   | Type      | Default value | Possible values |
| ----------- | --------- | ------------- | --------------- |
| placeholder | `String`  |               |                 |
| disabled    | `Boolean` |               |                 |
| name        | `String`  | `search`      |                 |
| inputProps  | `Object`  |               |                 |
<!-- react -->
| value       | `String`    |               |                 |
| className   | `String`    |               |                 |
| onInput     | `Function`  |               |                 |
| onReset     | `Function`  |               |                 |
| onSubmit    | `Function`  |               |                 |
| slotPrefix  | `ReactNode` |               |                 |
| slotSuffix  | `ReactNode` |               |                 |
| slotResults | `ReactNode` |               |                 |
| slotSubmit  | `ReactNode` |               |                 |
<!-- end react -->
<!-- vue -->
| modelValue | `String` |               |                 |

## Slots

| Slot name |        Description         |
| --------- | :------------------------: |
| prefix    |      prefix icon slot      |
| suffix    |      suffix icon slot      |
| submit    | submit button content slot |
| results   |     bottom panel slot      |

## Events

| Event name        |            Trigger            |
| ----------------- | :---------------------------: |
| update:modelValue | triggers v-model update event |
| reset             |      reset button event       |
| submit            |       submit form event       |
<!-- end vue -->

## Accessibility notes

The wrapper element has the `role="search"` attribute.

The search button is a `submit` type `<button>` in the form to reduce the number of keystrokes required to use the form.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSearch/VsfSearch.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfSearch/VsfSearch.tsx
<!-- end react -->
