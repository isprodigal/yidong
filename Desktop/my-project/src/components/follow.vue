<template>
  <div class="follow">
    <van-nav-bar title="我的关注" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in list"
        :key="item.name"
        :title="item.name"
        :label="item.keshi"
        :to="item.tz"
      >
        <img :src="item.imgs" alt />
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  name: "follow",
  data() {
    return {
      loading: false,
      finished: false,
      list: [
        {
          name: "中暑了你会喝藿香正气水吗？",
          keshi: "中医科-张程",
          imgs: "static/img/sj1.jpg",
          tz: "/zshxzq"
        }
      ]
    };
  },
  created() {},
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list[i]);
        }
        console.log(this.list);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 500);
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
</style>