import { directive, slugify } from '@vueuse/motion'
import { options } from './motions'

/**
* @type {import('@nuxt/types').Plugin}
*/
export default async function ({ app }, inject) {
  app.directive('motion', directive())

  if (!options || (options && !options.excludePresets)) {
    for const (key in presets) {
      // Get preset variants
      const preset = presets[key]

      // Register the preset `v-motion-${key}` directive
      app.directive(`motion-${slugify(key)}`, directive(preset))
    }
  }

  // Register module-wise directives
  if (options && options.directives) {
    // Loop on options, create a custom directive for each definition
    for (const key in options.directives) {
      // Get directive variants
      const variants = options.directives[key] as MotionVariants

      // Development warning, showing definitions missing `initial` key
      if (!variants.initial) {
        console.warn(
          `Your directive v-motion-${key} is missing initial variant!`,
        )
      }

      // Register the custom `v-motion-${key}` directive
      app.directive(`motion-${key}`, directive(variants))
    }
  }
}
