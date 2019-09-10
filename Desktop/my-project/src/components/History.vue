<template>
  <div class="History">
    <van-nav-bar title="浏览历史" left-text="返回" left-arrow @click-left="onClickLeft" />
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
  name: "History",
  data() {
    return {
      loading: false,
      finished: false,
      list: [
        {
          name: "中暑了你会喝藿香正气水吗？",
          keshi: "中医科-张程",
          imgs: "static/img/sjList1.jpg",
          tz: "/zshxzq"
        },
        {
          name: " 什么是近视？看书也会导致近视吗？",
          keshi: "眼科-张张",
          imgs: "static/img/sjList2.jpg",
          tz: "/smsjs"
        },
        {
          name: " 合理膳食，餐餐有蔬菜，天天有水果。",
          keshi: "养生科-刘飞",
          imgs: "static/img/sjList3.jpg",
          tz: "/reasonable"
        },
        {
          name: " 养肝护肾，多吃这个菜，价格便宜，一年四季常有，爽口开胃还下饭",
          keshi: "养生科-小笙",
          imgs: "static/img/sj2.jpg",
          tz: "/Nourishing"
        },
        {
          name: " 拉肚子怎么办 哪些食物吃不得",
          keshi: "生活科-王天",
          imgs: "static/img/sj3.jpg",
          tz: "/Suffer"
        },
        {
          name: " 饭后这些事情千万不要做 伤身呐",
          keshi: "健康科-朝朝",
          imgs: "static/img/sj4.jpg",
          tz: "/meal"
        },
        {
          name: " 3岁多小孩不说话怎么办?",
          keshi: "儿童科-花儿",
          imgs: "static/img/sj5.jpg",
          tz: "/speak"
        },
        {
          name: " 腹泻吃什么能快速止泻?",
          keshi: "肠胃科-朱明",
          imgs: "static/img/sjList4.jpg",
          tz: "/diarrhea"
        },
        {
          name: " 经常吃得太饱会有什么坏处",
          keshi: "肠胃科-小峰",
          imgs: "static/img/sjList5.jpg",
          tz: "/eat"
        },
        {
          name: " 这三种物品少往家里买：湿巾 空气清新剂等",
          keshi: "生活科-艳梅",
          imgs: "static/img/sjList6.jpg",
          tz: "/Wipes"
        },
        {
          name: " 运动造成的损伤数百种，哪些部位容最常见呢？",
          keshi: "生活科-张山",
          imgs: "static/img/sjList7.jpg",
          tz: "/motion"
        }
      ]
    };
  },
  created() {},
  methods: {
    onLoad() {
       this.loading = false;
       this.finished = true;
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 5; i++) {
      //     this.list.push(this.list[i]);
      //   }
      //   console.log(this.list);
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 100) {
      //     this.finished = true;
      //   }
      // }, 500);
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.History{
  padding-bottom: 1rem;
}
</style>