---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useDisclosure hook.
---

# useDisclosure

::: slot usage

{{ $frontmatter.description }}

## Usage

<!-- react -->
```tsx
import { VsfButton, useDisclosure } from '@storefront-ui/react';

function Basic() {
  const { isOpen, toggle } = useDisclosure();

  return (
    <>
      <VsfButton onClick={toggle}>Toggle</VsfButton>
      {isOpen && <p>This text shows when isOpen value is true.</p>}
    </>
  );
}
```
<!-- end react -->
<!-- vue -->
```vue
<script lang="ts" setup>
import { VsfButton, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure();
</script>

<template>
  <VsfButton @click="toggle">Toggle</VsfButton>
  <p v-if="isOpen">This text shows when isOpen value is true.</p>
</template>
```
<!-- end vue -->

:::

::: slot api

## Parameters

| Name         | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| initialValue | `boolean` | false         |             |

## Return value

| Name   | Type         | Default value | Description |
| ------ | ------------ | ------------- | ----------- |
| isOpen | `boolean`    |               |             |
| open   | `() => void` |               |             |
| close  | `() => void` |               |             |
| toggle | `() => void` |               |             |

:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/useDisclosure/useDisclosure.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useDisclosure/useDisclosure.ts
<!-- end vue -->

</SourceCode>
:::
