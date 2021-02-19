import { Module } from '@nuxt/types'
import { MotionVariants } from '@vueuse/motion'
import defu from 'defu'
import { resolve } from 'path'

export interface ModuleOptions {
  directives?: {
    [key: string]: MotionVariants
  }
  excludePresets?: boolean
}

const DEFAULTS: ModuleOptions = {}

const CONFIG_KEY = 'motions'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  const options = defu<ModuleOptions>(
    this.options[CONFIG_KEY],
    moduleOptions,
    DEFAULTS
  )
  // const { nuxt } = this

  this.addTemplate({
    fileName: 'motions.js',
    src: resolve(__dirname, '../templates', 'options.js'),
    options
  })

  this.addPlugin({
    src: resolve(__dirname, '../templates', 'plugin.js'),
    fileName: 'nuxt-use-motion.js'
  })
}

;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig {
    [CONFIG_KEY]?: ModuleOptions;
  } // Nuxt 2.14+
  interface Configuration {
    [CONFIG_KEY]?: ModuleOptions;
  } // Nuxt 2.9 - 2.13
}

export default nuxtModule
