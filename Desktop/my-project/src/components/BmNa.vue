<template>
  <div class="BmNa">
      <van-tabbar  v-model="active">
      <van-tabbar-item name="home" icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="healthy" icon="like-o" replace to="/healthy">药品</van-tabbar-item>
      <van-tabbar-item name="information" icon="more-o" replace to="/information">百科</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'BmNa',
  data() {
    return {
      active:'home',
    }
  },
 
};
</script>
<style lang="less" scoped>

</style>