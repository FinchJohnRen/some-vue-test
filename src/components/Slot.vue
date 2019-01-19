<template>
  <div class="container">
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <slot :text="item">{{item}}</slot>
      </li>
    </ul>

    <div style="background: #f2f2f2;">
      <template v-if="$slots.red">
        <h2 style="color:red;">
          <slot name="red">红</slot>
        </h2>
      </template>
      <h1 v-if="$slots.black">
          <h2 style="color:#000;">
          <slot name="black">黑</slot>
        </h2>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layoutSlot',
  props: {
    list: {
      type: Array
    },
  },
  data () {
    return {
      
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
