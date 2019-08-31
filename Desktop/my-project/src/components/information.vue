<template>
  <div class="information">
    <van-nav-bar title="疾病百科" />
    <div class="main" v-for="item in list" :key="item.name">
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
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {
      list: [
        {
          name: "乙肝1",
          src: "static/img/bkbjt.jpg",
          cs: "乙肝疾病常识",
          yd: "1532人已阅读",
          link: "/disease"
        },
        {
          name: "乙肝2",
          src: "static/img/bkbjt.jpg",
          cs: "乙肝疾病常识",
          yd: "1532人已阅读",
          link: "/disease"
        },
        {
          name: "乙肝3",
          src: "static/img/bkbjt.jpg",
          cs: "乙肝疾病常识",
          yd: "1532人已阅读",
          link: "/disease"
        },
        {
          name: "乙肝4",
          src: "static/img/bkbjt.jpg",
          cs: "乙肝疾病常识",
          yd: "1532人已阅读",
          link: "/disease"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.information {
  .main {
    padding: 0.2rem 0.2rem;
    border-bottom: 1px solid #aaa;
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
  padding-bottom: 1rem;
  font-size: 0.3rem;
}
</style>