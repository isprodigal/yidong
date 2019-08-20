<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>针对mounted钩子和created钩子只在页面第一次加载后才能调用出来</p>
    <p>只要el被加载过，之后的重复加载该页面就不会调用该钩子了</p>
    <p>使用beforeRouteUpdate重新调用钩子</p>
    <p>在当前路由改变，但是该组件被复用时调用</p>
    <p>对于一个带有动态参数的路径/move/:id，在 /move/1 和 /move/2 之间跳转的时候</p>
    <p>由于会渲染同样的move组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</p>
    <p>点击同一模块根据不同的情况拿取不同的数据</p>

    <router-link to="/move/1">电影1详情</router-link>
    <p></p>
    <router-link to="/move/2">电影2详情</router-link>
    <p></p>
    <router-link to="/move/3">电影3详情</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
  
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
