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
    <van-notice-bar mode="link" left-icon="volume-o" @click="tongzhi">通知: 高温天气即将来袭，准备好了吗？点击查看最新消息</van-notice-bar>
    <!-- 列表 -->
    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
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
    <img class="hddb" @click="dingbu" v-show="hddb" src="static/img/mescroll-totop.png" alt />-->
    <van-row type="flex" justify="center" style="margin:0;">
      <van-col span="6">
        <a
          href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8C%BB%E9%99%A2&c=315/third_party=uri_api"
        >
          <div class="bkssr" style=" background-color:#04beff;">
            <img src="static/img/yiyuan.png" alt />
            <p>找医院</p>
          </div>
        </a>
      </van-col>
      <van-col span="6">
        <router-link to="healthy">
          <div class="bkssr" style="background-color:#fbc107">
            <img src="static/img/yaoping.png" alt />
            <p>查药品</p>
          </div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="information">
          <div class="bkssr" style="background-color:#9278fe">
            <img src="static/img/jibing.png" alt />
            <p>疾病百科</p>
          </div>
        </router-link>
      </van-col>
    </van-row>
    <div class="fujin">
      <van-icon name="location-o" />
      <span>附近医院</span>
    </div>
    <van-divider style="margin:.1rem 0;border-color: #ccc;" />
    <div class="fujinlist">
      <a
        href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8C%BB%E9%99%A2&c=315/third_party=uri_api"
      >
        <ul>
          <li>
            <img class="fl daxiao" src="static/img/jsyiyuan.jpg" alt />
            <div class="fr" style="text-align: right;">
              <p>江苏省人民医院</p>
              <p class="dizhi">南京市鼓楼区广州路300号</p>
              <img class="daohang" src="static/img/daohang.png" alt />
            </div>
          </li>
          <li>
            <img class="fl daxiao" src="static/img/tuyiyuan.jpg" alt />
            <div class="fr" style="text-align: right;">
              <p>南京市中西医结合医院</p>
              <p class="dizhi">南京市玄武区孝陵卫179号</p>
              <img class="daohang" src="static/img/daohang.png" alt />
            </div>
          </li>
          <li>
            <img class="fl daxiao" src="static/img/pukyiyuan.jpg" alt />
            <div class="fr" style="text-align: right;">
              <p>南京市浦口区中心医院</p>
              <p class="dizhi">南京市浦口区上河街166号</p>
              <img class="daohang" src="static/img/daohang.png" alt />
            </div>
          </li>
          <li>
            <img class="fl daxiao" src="static/img/tryiyuan.jpg" alt />
            <div class="fr" style="text-align: right;">
              <p>南京同仁医院</p>
              <p class="dizhi">南京市江宁区吉印大道2007号</p>
              <img class="daohang" src="static/img/daohang.png" alt />
            </div>
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
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
    //关闭
    // guanbi(){
    //   this.closeable=false
    // },
    //关闭和通知有冲突
    //通知
    tongzhi() {
      this.$router.push({ path: "notice" });
    },
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
.home {
  font-size: 0.3rem;
  padding-bottom: 1rem;
  .fujinlist {
    padding: 0.2rem;
    a{
      width: 100%;
    }
    ul {
      li {
        overflow: hidden;
        padding-bottom: 0.3rem;
        .daohang {
          width: 0.5rem;
        }
        .dizhi {
          font-size: 0.26rem;
          color: #999;
        }
        .daxiao {
          width: 40%;
        }
        p {
          padding: 0.1rem 0.1rem;
          color: #000;
        }
      }
      li:last-child{
        padding-bottom: 0;
      }
    }
  }
  .fujin {
    padding-left: 0.2rem;
    .van-icon {
      color: #1989fa;
    }
  }
  .bkssr {
    padding: 0.2rem;
    border-radius: 0.4rem;
  }
  .van-col--6 {
    text-align: center;
    margin: 0.2rem;
    a {
      width: 100%;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    p {
      color: #fff;
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
}
</style>