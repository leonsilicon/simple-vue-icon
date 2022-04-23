# simple-vue-icon

[![npm version](https://img.shields.io/npm/v/simple-vue-icon)](https://npmjs.com/package/simple-vue-icon)

A simple icon component for Vue 3.

## Installation

Install the package from npm using your package manager (I recommend [pnpm](https://pnpm.io/)):

```shell
pnpm add simple-vue-icon
```

Then, import the icon to use it in your Vue components:

```vue
<script>
import { mdiArrowLeft } from '@mdi/js';
import VueIcon from 'simple-vue-icon';

export default {
  components: { VueIcon },
  setup() {
    return {
      mdiArrowLeft,
    };
  },
};
</script>

<template>
  <vue-icon :icon="mdiArrowLeft" />
</template>
```

or using `<script setup>` (recommended):

```vue
<script setup>
import { mdiArrowLeft } from '@mdi/js';
import VueIcon from 'simple-vue-icon';
</script>

<template>
  <vue-icon :icon="mdiArrowLeft" />
</template>
```

If you don't want to import the component manually, you can register it globally in your app entrypoint:

```typescript
import { createApp } from 'vue'
import App from './app.vue';
import VueIcon from 'simple-vue-icon';

const app = createApp(App);
app.use('VueIcon', VueIcon);
// ...
```

## Props

### icon (required)

The [path string](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) of the icon to render.

### width/height (number or string; default: 24)

```vue
<vue-icon :icon="mdiArrowLeft" width="30" :height="30" />
```

### size (number or string; default: 24)

Sets the width and the height of the icon

```vue
<!-- Equivalent to <vue-icon :icon="mdiArrowLeft" width="64" height="64" /> -->
<vue-icon :icon="mdiArrowLeft" size="64" />
```

## Credits

Most of the code is forked from [mdi-vue](https://github.com/therufa/mdi-vue).
