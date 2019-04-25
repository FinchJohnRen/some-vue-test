<template>
  <div>
    <h1>事件BUS</h1>
    <childA/>
  </div>
</template>
<script>
import eventbus from './eventbus';
import childA from './childA';
export default {
  components: {
    childA,
  },
  data () {
    return {
      
    }
  },
  created () {
    eventbus.$on('getName', function () {
      console.log('我是父组件');
    })
  }
}
</script>
