<template>
  <div>
     <child-com :foo="foo" :boo="boo" :coo="coo" :doo="doo" data-custom="custom" class="test" v-on="$listeners" @click="click"></child-com>
  </div>
</template>
<script>
var childCom = {
  props: ['foo'],
  inheritAttrs: false,
  template: `<div>
      <p>foo: {{ foo }}</p>
      <p>attrs: {{ $attrs }}</p>
      <button @click="$listeners.click(emeit)">click</button>
    </div>`,
  data () {
    return {
      emeit: 'emit'
    }
  },
  mounted () {
    console.log(this.$listeners);
  },
  methods: {
    childClick() {
      this.$emit('click')
    }
  }
  
}

export default {
  components: {
    childCom,
  },
  data () {
    return {
      foo: 'Hello World!',
      boo: 'Hello Javascript!',
      coo: 'Hello Vue',
      doo: 'Last'
    }
  },
  methods: {
    click(arg) {
      console.log(arg);
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
