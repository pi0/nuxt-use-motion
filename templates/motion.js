import { MotionPlugin } from '@vueuse/motion'
import Vue from 'vue'
import userOptions from './motion.config'

const options = Object.assign(<%= JSON.stringify(options) %>, userOptions)

Vue.use(MotionPlugin, options)
