<template>
  <div class="BmNa">
      <van-tabbar route  v-model="active">
      <van-tabbar-item name="home" icon="static/img/home.png" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="healthy" icon="static/img/yaowu.png" replace to="/healthy">药品</van-tabbar-item>
      <van-tabbar-item name="information" icon="static/img/baike.png" replace to="/information">百科</van-tabbar-item>
      <van-tabbar-item name="user" icon="static/img/wode.png" replace to="/user">我的</van-tabbar-item>
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
  created(){
    console.log(this.$router)
  }
 
};
</script>
<style lang="less" scoped>

</style>