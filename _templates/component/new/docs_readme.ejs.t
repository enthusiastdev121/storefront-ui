---
to: apps/docs/components/components/<%= name.replace('Sf', '').toLowerCase() %>.md
force: false
---
<%- '---' %>
layout: AtomLayout
hideBreadcrumbs: true
<%- '---' %>

<% DocsName = name.replace('Sf', '') %># <%= DocsName %> component

<Generate />

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|                       |                            |               |                                        |


## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
|           |                                   |

## Events

| Event name |            Trigger             |
| ---------- | ---------------------------- |
|            |                                |

## Accessibility notes


## Source code

::vue-only
<<<../../../packages/sfui/frameworks/vue/components/<%= name %>/<%= name %>.vue
::
::react-only
<<<../../../packages/sfui/frameworks/react/components/<%= name %>/<%= name %>.tsx
::
