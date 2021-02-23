import type { Module } from '@nuxt/types'
import type { MotionVariants } from '@vueuse/motion'
import defu from 'defu'
import { resolve } from 'path'

export interface ModuleOptions {
  directives?: {
    [key: string]: MotionVariants
  }
  excludePresets?: boolean
}

const DEFAULTS: ModuleOptions = {}

const CONFIG_KEY = 'motion'

const nuxtModule: Module<ModuleOptions> = async function (moduleOptions) {
  const options = defu<ModuleOptions>(
    this.options[CONFIG_KEY],
    moduleOptions,
    DEFAULTS
  )

  this.addTemplate({
    fileName: 'motion.config.js',
    src: resolve(__dirname, '../templates', 'motion.config.js'),
    options,
  })

  this.addPlugin({
    src: resolve(__dirname, '../templates', 'motion.js'),
    fileName: 'motion.js',
  })

  await this.addModule('@nuxtjs/composition-api')
}

;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig {
    [CONFIG_KEY]?: ModuleOptions
  } // Nuxt 2.14+
  interface Configuration {
    [CONFIG_KEY]?: ModuleOptions
  } // Nuxt 2.9 - 2.13
}

export default nuxtModule
