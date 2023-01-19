---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Select

A select is an input that allows the user to choose from a set of options. Uses native html `<select>` tag.

Used for forms or as a global setting, e.g. language, location.

For a few options use [Radio](radio.html) component instead of Select. For very long set of options think about using Combobox component.

<Generate />

<!-- vue -->
## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| name         | String          | ''            |                                        |
| options      | String[]        | []            |                                        |
| value        | String          | ''            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfSelectSize  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | '*Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |

## Slots

| Slot name     |            Description            |
| ---------     | :-------------------------------: |
|  default      |   Place for select options        |
|  placeholder  |   Custom option for placeholder   |
|  label        |   Custom label                    |
|  errorText    |   Custom error text               |
|  helpText     |   Custom help text                |
|  requiredText |   Custom required text            |



<!-- end vue -->

<!-- react -->

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| name         | String          | ''            |                                        |
| options      | String[]        | []            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfSelectSize  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | '*Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |
| onChange     | Function        |               |                                        |

<!-- end react -->

<!-- vue -->

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

## Accessibility notes

Keyboard users can use `tab`, open select with `space` and select options using `arrows`.
Selected option is marked with `aria-selected`.

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfSelect/VsfSelect.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfSelect/VsfSelect.tsx

<!-- end react -->
