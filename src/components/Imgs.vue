<template>
  <div>
    <img src="/static/img/logo.png" alt="">
    <p>CSS背景图</p>
    <div class="img"></div>
    <p>asset背景图</p>
    <div class="assetimg"></div>
    <p>别名路径</p>
    <img src="~@assets/logo.png" alt="">
  </div>
</template>

<style scoped>
.img,.assetimg{
  display: inline-block;
  width: 120px;
  height: 120px;
  background: url('/static/img/logo.png');
}
.assetimg {
  background: url('~@assets/logo.png');
}
</style>

