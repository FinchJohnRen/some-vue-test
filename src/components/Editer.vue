<template>
  <div>
    <div id="editor">
      <p>欢迎使用 <b>wangEditor</b> <a href="http://baidu.com">富文本编辑器</a><a href="http://baidu.com">链接</a></p>
      <p class="card" :style="classObject">
        卡片
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      classObject: {
        color: 'red',
        fontSize: '13px',
        top: 0,
        left: 0,
        display: 'none',
      }
    }
  },
  mounted () {
    this.createEditor()
    this.linkHover('editor')
  },
  methods: {
    createEditor() {
      var E = window.wangEditor
      var editor = new E('#editor')
      editor.create()
    },
    linkHover(editor) {
      let that = this
      let E = document.getElementById(editor)
      E.addEventListener('mouseover', function (e) {
        if ( e.target.nodeName === 'A') {
          let aTag = e.target
          that.showCard(aTag)
          that.classObject.display = 'inline-block'
        } else {
          that.classObject.display = 'none'
        }
      },false)
    },
    showCard(el) {
      let style = el.getBoundingClientRect()
      console.log(el.offsetLeft);
      this.classObject.top = el.offsetTop + el.offsetHeight/2 + 'px'
      this.classObject.left = el.offsetLeft + 'px'
    }
  }
}
</script>

<style >
.card {
  position: absolute;
  width: 200px;
  height: 60px;
  background: #333
}
</style>

