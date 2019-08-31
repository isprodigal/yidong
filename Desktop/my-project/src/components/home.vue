<template>
  <div class="home">
    <van-nav-bar :title="value" />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/image/lb1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/lb2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/lb3.jpg" />
      </van-swipe-item>
    </van-swipe>
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
    <img class="hddb" @click="dingbu" v-show="hddb" src="static/img/mescroll-totop.png" alt />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      loading: false,
      finished: false,
      hddb:false,
      value: "健康生活",
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
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    //回到顶部
    scrollToTop(el) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight / 2) {
        this.hddb = true;
      } else {
        this.hddb = false;
      }
    },
    dingbu() {
      var timer;
      timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    },
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
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .van-swipe {
    img {
      display: block;
      width: 100%;
      height: 4rem;
    }
  }
  .van-cell__label {
    position: absolute;
    bottom: 0.3rem;
  }
  .van-cell__value {
    img {
      width: 3rem;
      height: 2rem;
    }
  }
}
</style>