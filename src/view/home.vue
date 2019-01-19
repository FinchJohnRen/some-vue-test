<template>
 <div class="home">
      <!-- <div class="TEST"> CSS IS AWSOME</div> -->
      <ul>
        <li class="link" v-for=" (val , idx) in componentsArr" :key="idx"  @click="change(val)">
         <router-link to="">{{val}}</router-link>
        </li>
      </ul>
      <components :is="currentCom">
        <h1 slot="red">插槽</h1>
      </components>
 </div>
</template>
<script>
import Imgs  from "@components/Imgs";
import Slot  from "@components/Slot";
import Attrs  from "@components/Attrs";
import EventBus  from "@components/eventbus/index";
export default {
  el: '#app',
  components: {
    Imgs,
    Slot,
    Attrs,
    EventBus
  },
  data () {
    return {
        componentsArr: ['Imgs','Slot', 'Attrs', 'EventBus'],
        currentCom: 'Imgs'
      }
    },
    created () {
      console.log(this);
      Promise.try(this.p1).then(res => {
        console.log('try', res)
      })
      this.p1().then(this.p2).then(res => {
          console.log('函数执行',res)
      })
      this.asy()
    },
    mounted () {
      this.asy().then(res => console.log(res))
    },
    methods: {
      p1 () {
        return new Promise((resolve, reject) => {
          let a = { one: 'P1函数', two: 2}
          setTimeout(() => {
            resolve(a)
          }, 1000);
        }).then(res => {
          res.three = 3
          return res
        })
      },
      p2 () {
        return new Promise((resolve, reject) => {
          let b = 'p2请求'
          setTimeout(() => {
            resolve(b)
          }, 2000);
        })
      },
      async asy() {
        let p1 = await this.p1()
        let p2 = await this.p1()
        return '我是 async函数'
      },
      change(val) {
        this.currentCom = val
      }
    }
}
</script>
<style>
html body {
  margin: 0;
}
.home {
  width: 100vw;

}
</style>
