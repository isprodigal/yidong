<template>
  <div class="information">
    <van-nav-bar title="疾病百科" />
    <van-tabs v-model="active" >
      <van-tab v-for="index in zxlist" :title="index.name" :key="index.name">
        <div v-show="active==0?false:true" class="main" v-for="item in listss" :key="item.name">
          <router-link :to="item.link">
            <div class="header">
              <span style="color:#1989fa;font-weight: 700;">|</span>
              <span style="color:#000">{{item.name}}</span>
            </div>
            <div class="mainzhuti">
              <img :src="item.src" alt />
              <div class="bjyse">
                <p>{{item.cs}}</p>
                <span>{{item.yd}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <!-- 列表 -->
        <div v-show="active==1?false:true">
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
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {
      active: 0,
      zxlist:[{name:'资讯'},{name:'疾病常识'}],
      listss: [
        {
          name: "乙肝常识",
          src: "static/img/bkbjt.jpg",
          cs: "乙肝疾病常识",
          yd: "15321人已阅读",
          link: "/disease"
        },
        {
          name: "肝癌常识",
          src: "static/img/gan.jpg",
          cs: "肝癌疾病常识",
          yd: "71823人已阅读",
          link: "/gan"
        },
        {
          name: "肝热病常识",
          src: "static/img/ganre.jpg",
          cs: "肝热病疾病常识",
          yd: "54913人已阅读",
          link: "/ganre"
        }
      ],
      loading: false,
      finished: false,
      hddb: false,
      value: "健康生活",
      list: [
        {
          name: "中暑了你会喝藿香正气水吗？",
          keshi: "中医科-张程",
          imgs: "static/img/sj1.jpg",
          tz: "/zshxzq"
        },
        {
          name: " 什么是近视？看书也会导致近视吗？",
          keshi: "眼科-张张",
          imgs: "static/img/lb3.jpg",
          tz: "/smsjs"
        },
        {
          name: " 合理膳食，餐餐有蔬菜，天天有水果。",
          keshi: "养生科-刘飞",
          imgs: "static/img/lb2.jpg",
          tz: "/reasonable"
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
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.information {
  .main {
    padding: 0.2rem 0.2rem;
    border-bottom: 0.2rem solid #eee;
    a {
      width: 100%;
      height: 100%;
    }
    .mainzhuti {
      height: 3rem;
      position: relative;
      color: #fff;
      .bjyse {
        background: linear-gradient(transparent, #000);
        width: 100%;
        height: 0.8rem;
        position: absolute;
        bottom: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        bottom: 0.1rem;
        left: 0;
        padding: 0 0.2rem;
      }
      span {
        position: absolute;
        bottom: 0.1rem;
        right: 0;
        padding: 0 0.2rem;
      }
    }
    .header {
      margin-bottom: 0.1rem;
    }
  }
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
  padding-bottom: 1rem;
  font-size: 0.3rem;
}
</style>