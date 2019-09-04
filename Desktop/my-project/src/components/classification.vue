<template>
  <div class="classification">
    <van-nav-bar title="药品" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-row type="flex" justify="space-between">
      <van-col span="11" v-for="litm in list" :key="litm.src">
        <router-link :to="litm.href" style="width:100%;height:100%">
          <img :src="litm.src" />
          <span>{{litm.name}}</span>
        </router-link>
      </van-col>
    </van-row>
    <!-- <van-grid>
      <van-grid-item
        v-for="value in list"
        :key="value.name"
        :to="value.tzym"
        style="margin:.2rem;border:1px solid #ccc;flex-basis: 28%;"
      >
        <img :src="value.src" alt />
        <span style="margin-top:.1rem;text-align:center;width:100%;">{{value.name}}</span>
      </van-grid-item>
    </van-grid>-->
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
          href: "/sj?0"
        },
        {
          name: "999感冒灵颗粒",
          src: "static/img/yp2.jpg",
          href: "/sj?1"
        },
        {
          name: "复方感冒灵片",
          src: "static/img/yp3.jpg",
          href: "/sj?2"
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
.classification {
  font-size: 0.3rem;
  .van-col {
    border: 1px solid rgb(234, 234, 234);
    margin: 0.2rem;
    img {
      width: 100%;
      height: 2rem;
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      color: #000;
      text-align: center;
    }
  }
}
</style>