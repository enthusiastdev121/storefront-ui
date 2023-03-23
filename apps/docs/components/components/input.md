---
layout: AtomLayout
hideBreadcrumbs: true
description: An input is a single-line text field allows users to enter any combination of letters, numbers, or symbols. Supports the use of prefix and suffix as text or icon.
---
# Input

::: slot usage

{{ $frontmatter.description }}


## Notes

Used for forms, for example to enter address details, email, password, credit card numbers.

For search feature use Search component instead of Input.

All attributes added to `SfInput` component are passed directly to native input element and so are the styles. But if you want to style entire component pass your classes via <!-- vue -->`wrapperClass`<!-- end vue --> <!-- react --> `wrapperClassName`<!-- end react -->prop. 

If you want to apply `size` attribute to input element, use `width` property with `ch` unit instead, eg. `width: 10ch`. `size` property is already used to customize layout of `SfInput` component.

## Accessibility notes

Keyboard users can use `tab` to focus on `input`
Used an `input` element with `type="text"`, for single-line input.


## Basic input component

The simple input without the label in three accessible size variants.

<Showcase showcase-name="Input/InputWithoutLabel" style="min-height:400px;">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputWithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputWithoutLabel.tsx
<!-- end react -->
</Showcase>

## Input with icons

The input with icons passed through <!-- vue --> `prefix` and `suffix` slots<!-- end vue --><!-- react -->`slotPrefix` and `slotSuffix` props<!-- end react -->. 

<Showcase showcase-name="Input/InputIcons">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputIcons.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputIcons.tsx#source
<!-- end react -->
</Showcase>

## Input in disabled state

The component when disabled. 

<Showcase showcase-name="Input/InputDisabled">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputDisabled.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputDisabled.tsx#source
<!-- end react -->
</Showcase>

## Input component in readonly

The input component with readonly attribute. 

<Showcase showcase-name="Input/InputReadonly">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputReadonly.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputReadonly.tsx#source
<!-- end react -->
</Showcase>

## Basic input in invalid state

The input component when in invalid state. 

<Showcase showcase-name="Input/InputInvalid">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputInvalid.tsx#source
<!-- end react -->
</Showcase>

## Input component with all states styles applied and characters counting

The input component when in invalid state. 

<Showcase showcase-name="Input/InputCharacters">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputCharacters.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputCharacters.tsx#source
<!-- end react -->
</Showcase>

## Playground

<Generate style="height: 600px;"/>

:::

::: slot api

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| size         | SfInputSize  | base          | sm, base, lg                           |
| invalid      | Boolean         | false         |                                        |
<!-- react -->
| slotPrefix   | ReactNode       |               |                                        |
| slotSuffix   | ReactNode       |               |                                        |
| className    | String          |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                        |
| --------- | ---------------------------------- |
| prefix    | Custom content for prefix in input |
| suffix    | Custom content for suffix in input |
<!-- end vue -->

<!-- vue -->

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| update:modelValue | triggers v-model update event |

<!-- end vue -->


:::

::: slot source
<SourceCode>

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/SfInput/SfInput.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/SfInput/SfInput.tsx

<!-- end react -->
</SourceCode>
:::
