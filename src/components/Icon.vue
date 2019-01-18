<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
import '../../static/iconfont.js'
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    }
  },
  computed: {
    iconName () {
      return `#${this.iconClass}`
    }
  }
}
</script>
<style>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: red;
  overflow: hidden;
}
</style>
