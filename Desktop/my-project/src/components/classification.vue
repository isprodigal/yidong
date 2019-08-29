<template>
  <div class="classification">
    <van-nav-bar title="药品" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-grid>
      <van-grid-item
        v-for="value in list"
        :key="value.name"
        :to="value.tzym"
        style="margin:.2rem;border:1px solid #ccc;flex-basis: 28%;"
      >
        <img :src="value.src" alt />
        <p style="margin-top:.1rem;text-align:center;width:100%">{{value.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "classification",
  data() {
    return {
      list: [
        {
          name: "玉屏风颗粒",
          src: "static/img/yp1.jpg",
          tzym: "/sj?1"
        },
        {
          name: "99感冒灵颗粒",
          src: "static/img/yp2.jpg",
          tzym: "/sj?2"
        },
        {
          name: "枸橼酸西地那非片",
          src: "static/img/yp3.jpg",
          tzym: "/sj?3"
        }
      ]
    };
  },
  methods: {
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
</style>