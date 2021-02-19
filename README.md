# 🤹 nuxt-use-motion

This module is a **Nuxt** implementation of the Vue Composables [**@vueuse/motion**](https://github.com/Tahul/vue-use-sound).

For a better **understanding** of this **module**, you should check out the original [**composables page**](https://github.com/Tahul/vue-use-sound).

[🌍 **Documentation**](https://vue-use-motion.netlify.app)

[👀 **Demos**](https://vue-use-motion-demo.netlify.app)

## Setup

In order to use this module, you must have [@nuxt/composition-api](https://composition-api.nuxtjs.org/) setup in your project.

Once you installed it, add `nuxt-use-sound` dependency to your project

```bash
yarn add nuxt-use-sound
```

Add `nuxt-use-sound` to the `modules` section of `nuxt.config.js`

```js
{
  // nuxt.config.js
  modules: ["nuxt-use-sound"];
}
```

Configure your animations 🤹

```js
{
  // nuxt.config.js
  {
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
```

## Usage

In **addition** to the native [**@vueuse/motion**](https://vue-use-motion.netlify.app) features, the module allows you to **define** animations **presets** from your **nuxt.config.js**.

Once **defined**, as shown above, those **animations** will be available using **directives**, available in **every component** of your **app**.

```vue
<template>
  <div v-motion-pop-bottom>Pop from bottom! 🎺</div>
</template>
```

To see more about how to **control** animations declared with **directives**, check out [**Directive Usage**](https://vue-use-motion.netlify.app/directive-usage).

To see more about what **properties** you can **animate**, check out [**Motion Properties**](https://vue-use-motion.netlify.app/motion-properties).

To see more about how to **create** your own **animations** styles, check out [**Transition Properties**](https://vue-use-motion.netlify.app/transition-properties).

To see more about what are **variants** and how you can **use** them, check out [**Variants**](https://vue-use-motion.netlify.app/variants).

To see more about how to **control** your declared **variants**, check out [**Motion Instance**](https://vue-use-motion.netlify.app/motion-instance).

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)
