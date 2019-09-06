<template>
  <div id="app">
    <bm-na></bm-na>
    <router-view />
  </div>
</template>

<script>
import "../static/js/iconfont";
import BmNa from "@/components/BmNa.vue";
export default {
  name: "App",
  components: {
    BmNa
  },
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
p {
  font-size: 0.3rem;
}
span {
  font-size: 0.3rem;
}
b {
  font-size: 0.3rem;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.lstb {
  color: #1989fa;
}
.van-nav-bar {
  background-color: #1989fa;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__text {
  color: #fff;
}
.hddb {
  position: fixed;
  right: 0.5rem;
  bottom: 2rem;
  width: 1rem;
  height: 1rem;
}
.van-nav-bar__left{
  left: 5px;
}
.van-nav-bar__right{
  right: 0px;
}
</style>
