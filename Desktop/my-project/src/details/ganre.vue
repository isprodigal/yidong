<template>
  <div class="disease">
    <van-nav-bar title="肝热病常识" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="header">
      <img :src="list.src" alt />
      <div class="jieshao">
        <p>{{list.jieshao}}</p>
        <p>
          <span>|</span>
          <b>基本知识:</b>
        </p>
        <p>是否属于医保：非医保疾病</p>
        <p>发病部位： 肝脏</p>
        <p>相关症状： 纳差 腹胀 肝热及胆 恶心 肝肿大</p>
        <p>并发疾病： 脑囊虫病 矮小症 新生儿泪囊炎 脑动静脉畸形 慢性肝炎</p>
        <p>
          <span>|</span>
          <b>治疗常识:</b>
        </p>
        <p>就诊科室： 中医科 肝病科</p>
        <p>相关检查： 血清谷丙转氨酶 凝血酶原时间(PT) 白细胞计数(WBC)</p>
        <p>常用药品： 乙肝扶正胶囊 乙肝灵丸 久强脑立清 </p>
        <p>
          <span>|</span>
          <b>温馨提示:</b>
        </p>
        <p>凡治疗热病，应在喝些清凉的饮料，以解里热之后，再进行针刺，并且要病人衣服穿的单薄些，居住于凉爽的地方，以解除表热，如此使表里热退身凉而病愈。</p>
        <p>
          <span>|</span>
          <b>肝热病病因</b>
        </p>
        <p>因湿热疫毒之邪侵及中焦，郁蒸肝胆，肝失疏泄，脾失健运所致。</p>
        <p>
          <span>|</span>
          <b>肝热病症状</b>
        </p>
        <p>以腹胀纳差、恶心厌油、右胁疼痛、肝肿大，或有黄疸为主要临床表现。</p>
        <p>
          <span>|</span>
          <b>肝热病检查</b>
        </p>
        <p>转氨酶显著增高，酶水平的高低与临床表现的严重程度无明显关系。尿胆色素增高，早期发现尿胆色素增高为诊断提供了有价值的线索。碱性磷酸酶仅轻度升高。凝血酶原时间延长不常见，但若出现则预示病情严重。白细胞计数较正常偏低，血涂片常可见少量非典型的淋巴细胞。</p>
      </div>
    </div>
    <img class="hddb" @click="dingbu" v-show="hddb" src="static/img/mescroll-totop.png" alt />
  </div>
</template>
<script>
export default {
  name: "disease",
  data() {
    return {
      hddb: false,
      list: {
        src: "static/img/ganre.jpg",
        jieshao:
          "湿热疫毒之邪侵及中焦，郁蒸肝胆，肝失疏泄，脾失健运而成。以腹胀纳差，恶心厌油，小便黄，胁腹满痛，身热，躁狂不安或嗜睡等为主要表现的疾病。病位在肝。"
      }
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
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.disease {
  .header {
    .jieshao {
      p {
        padding: 0.1rem 0.2rem;
      }
      span {
        color: #1989fa;
        font-weight: 700;
        padding-right: 0.2rem;
      }
    }
    img {
      height: 3rem;
    }
  }
  padding-bottom: 1rem;
}
</style>