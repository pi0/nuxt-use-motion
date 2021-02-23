# 🤹 nuxt-use-motion

This module is a **Nuxt** implementation of the Vue Composables [**@vueuse/motion**](https://github.com/vueuse/motion).

For a better **understanding** of this **module**, you should check out the original [**composables page**](https://github.com/vueuse/motion).

[🌍 **Documentation**](https://vueuse-motion.netlify.app)

[👀 **Demos**](https://vueuse-motion-demo.netlify.app)

## Setup

Once you installed it, add `nuxt-use-motion` dependency to your project

```bash
yarn add --dev nuxt-use-motion
# or
npm i -D nuxt-use-motion
```

Add `nuxt-use-motion` to the `buildModules` section of `nuxt.config.js`

```js
{
  // nuxt.config.js
  buildModules: ['nuxt-use-motion']
}
```

Configure your animations 🤹

```js
{
  // nuxt.config.js
  motion: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0
        },
      }
    }
  }
}
```

## Usage

In **addition** to the native [**@vueuse/motion**](https://vueuse-motion.netlify.app) features, the module allows you to **define** animations **presets** from your **nuxt.config.js**.

Once **defined**, as shown above, those **animations** will be available using **directives**, available in **every component** of your **app**.

```vue
<template>
  <div v-motion-pop-bottom>Pop from bottom! 🎺</div>
</template>
```

To see more about how to **control** animations declared with **directives**, check out [**Directive Usage**](https://vueuse-motion.netlify.app/directive-usage).

To see more about what **properties** you can **animate**, check out [**Motion Properties**](https://vueuse-motion.netlify.app/motion-properties).

To see more about how to **create** your own **animations** styles, check out [**Transition Properties**](https://vueuse-motion.netlify.app/transition-properties).

To see more about what are **variants** and how you can **use** them, check out [**Variants**](https://vueuse-motion.netlify.app/variants).

To see more about how to **control** your declared **variants**, check out [**Motion Instance**](https://vueuse-motion.netlify.app/motion-instance).

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)
