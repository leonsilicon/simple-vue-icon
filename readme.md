# simple-vue-icon

[![npm version](https://badge.fury.io/js/simple-vue-icon.svg)](https://badge.fury.io/js/simple-vue-icon)

A simple icon component for Vue 3.

## Installation

Install the package from npm using your package manager (I recommend [pnpm](https://pnpm.io/)):

```shell
pnpm add simple-vue-icon
```

Then, add the plugin to where you create your Vue instance:

```typescript
import { createApp } from 'vue';
import simpleVueIcon from 'simple-vue-icon';

const app = createApp();
app.use(simpleVueIcon);
// ... adding other plugins and mounting the instance ...
```

Then, in your components, simply pass the path string:

```vue
<template>
  <v-icon :icon='mdiArrowLeft' />
</template>

<script>
import { mdiArrowLeft } from '@mdi/js';

export default {
  setup() {
    return {
      mdiArrowLeft,
    };
  }
};
</script>
```

or using `<script setup>` (recommended):

```vue
<template>
  <v-icon :icon='mdiArrowLeft' />
</template>

<script setup>
import { mdiArrowLeft } from '@mdi/js';
</script>
```

## Props

### icon (required)

The [path string](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) of the icon to render.

### width/height (number or string; default: 24)

```vue
<v-icon :icon="mdiArrowLeft" width="30" :height="30" />
```

### size (number or string; default: 24)

Sets the width and the height of the icon

```vue
<!-- Equivalent to <v-icon :icon="mdiArrowLeft" width="64" height="64" /> -->
<v-icon :icon="mdiArrowLeft" size="64" />
```

## Credits

Most of the code is forked from [mdi-vue](https://github.com/therufa/mdi-vue).
