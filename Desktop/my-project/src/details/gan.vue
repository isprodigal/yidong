<template>
  <div class="disease">
    <van-nav-bar title="肝癌疾病常识" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="header">
      <img :src="list.src" alt />
      <div class="jieshao">
        <p>{{list.jieshao}}</p>
        <p>
          <span>|</span>
          <b>基本知识:</b>
        </p>
        <p>是否属于医保：医保疾病</p>
        <p>发病部位： 肝</p>
        <p>传染性：该病不具备传染性</p>
        <p>多发人群：中老年男性</p>
        <p>相关症状： 右上腹痛 乏力 消瘦 消化不良 腹水</p>
        <p>并发疾病： 转移性肝癌 老年人原发性肝癌 原发性肝癌 肝纤维板层癌 肝脏类癌</p>
        <p>
          <span>|</span>
          <b>治疗常识:</b>
        </p>
        <p>就诊科室： 肝胆外科 肿瘤科</p>
        <p>治疗费用： 市三甲医院约(30000-50000元)</p>
        <p>治愈率：5%(早期肝癌手术切除后一年生存率达80%以上</p>
        <p>治疗方法： 手术治疗、放射治疗、化疗、药物治疗</p>
        <p>相关检查： AFP 异常凝血酶原(APT) 血清丙酮酸激酶 血清醛缩酶同工酶 CT检查</p>
        <p>相关手术： 肝部分切除术 肝移植</p>
        <p>常用药品： 注射用胸腺五肽 注射用核糖核酸、 灵芝胶囊</p>
        <p>
          <span>|</span>
          <b>温馨提示:</b>
        </p>
        <p>一旦到了肝癌的晚期，治愈希望是渺茫的，但是仍然存在希望。所以关于肝癌晚期能活多久的问题和治疗手段及患者是否配合治疗是有很大关系的。因此，出现肝癌晚期症状的患者也不要放弃希望，要坚持自己能够被治疗好，才能活的更久，更好些。</p>
        <p>
          <span>|</span>
          <b>肝癌病因</b>
        </p>
        <p>原发性肝癌的病因及确切分子机制尚不完全清楚，目前认为其发病是多因素、多步骤的复杂过程，受环境和自身双重因素影响。流行病学及实验研究资料表明，乙型肝炎病毒(HBV)和丙型肝炎病毒(HCV)感染、黄曲霉素、饮水污染、酒精、肝硬化、性激素、亚硝胺类物质、微量元素等都与肝癌发病相关。继发性肝癌(转移性肝癌)可通过不同途径，如随血液、淋巴液转移或直接侵润肝脏而形成疾病。</p>
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
        src: "static/img/gan.jpg",
        jieshao:
          "肝癌即肝脏恶性肿瘤，可分为原发性和继发性两大类。原发性肝脏恶性肿瘤起源于肝脏的上皮或间叶组织，前者称为原发性肝癌，是我国高发的，危害极大的恶性肿瘤;后者称为肉瘤，与原发性肝癌相比较较为少见。继发性或称转移性肝癌系指全身多个器官起源的恶性肿瘤侵犯至肝脏。一般多见于胃、胆道、胰腺、结直肠、卵巢、子宫、肺、乳腺等器官恶性肿瘤的肝转移。"
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