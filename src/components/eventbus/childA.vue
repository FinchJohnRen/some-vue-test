<template>
  <div>
    <h1>我是child A</h1>
    <button @click="touchB">点击我触发子组件B的事件</button>
  </div>
</template>
<script>
import eventbus from './eventbus';
export default {
  methods: {
    touchB() {
      eventbus.$emit('getName')
    }
  }
  
}
</script>
