export default {
  directives: {
    'slide-rotate-bottom': {
      initial: {
        y: 200,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      }
    }
  }
}
