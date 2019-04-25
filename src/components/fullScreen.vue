<template>
 <div>
   <button @click="fullScreenFun">{{fullScreenInfo}}</button>
 </div>
</template>
<script>
import "../../static/iconfont.js";
export default {
  name: "svg-icon",
  data() {
    return {
      fullScreenInfo : '打开全屏'
    };
  },
  methods: {
    fullScreenFun() {
      let self = this;
      var fullscreenEnabled =
        document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.msFullscreenEnabled;

      if (fullscreenEnabled) {
        let de = document.documentElement;
        if (self.fullScreenInfo === "打开全屏") {
          if (de.requestFullscreen) {
            de.requestFullscreen();
          } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
          } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
          }
          self.fullScreenInfo = "退出全屏";
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
          self.fullScreenInfo = "打开全屏";
        }
      } else {
        self.fullScreenInfo = "浏览器当前不能全屏";
      }
    }
  }
};
</script>

