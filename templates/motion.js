import { MotionPlugin } from '@vueuse/motion'
import Vue from 'vue'
import defu from 'defu'
import appOptions from './motion.config'

const options = defu(appOptions, <%= JSON.stringify(options, null, 2) %>)

Vue.use(MotionPlugin, options)
