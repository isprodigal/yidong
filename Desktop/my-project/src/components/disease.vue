<template>
  <div class="disease">
    <van-nav-bar title="乙肝疾病常识" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="header">
      <img :src="list.src" alt />
      <div class="jieshao">
        <p>{{list.jieshao}}</p>
        <p>
          <span>|</span>
          <b>基本知识:</b>
        </p>
        <p>是否属于医保：非医保疾病</p>
        <p>别名： 乙型肝炎</p>
        <p>发病部位： 肝</p>
        <p>传染性：有传染性</p>
        <p>传播途径： 血液传播 性触传播 母婴传播</p>
        <p>多发人群：所有人群</p>
        <p>相关症状： 转氨酶增高 肝肿大 乙肝表面抗原(HBsAg)阳性 乙肝e抗原(HBeAg)阳性 肝功能异常。</p>
        <p>并发疾病： 肝性脑病 肝硬化 腹膜炎 消化道出血 肺炎</p>
        <p>
          <span>|</span>
          <b>治疗常识:</b>
        </p>
        <p>就诊科室： 传染科 肝病</p>
        <p>治疗方法：药物治疗、饮食疗法等</p>
        <p>治疗费用： 市三甲医院约(3000 —— 8000元)</p>
        <p>治愈率：0.0001%</p>
        <p>
          相关检查： 乙肝病毒学指标 凝血酶原时间(PT) 乙肝五项 乙型肝炎抗原抗体检测(HBcAb) 血清白蛋白与球蛋白比值(A/G) HBsAg免疫复合物
          血清前S1蛋白 血清前S2蛋白 血清抗前S2蛋白 免疫球蛋白M
        </p>
        <p>常用药品： 恩替卡韦分散片 阿德福韦酯胶囊等</p>
        <p>
          <span>|</span><b>温馨提示:</b>
        </p>
        <p>请到正规医院进行诊疗，切勿偏信小广告，滥用药物，进一步造成肝脏损伤！</p>
        <p>
          <span>|</span><b>乙肝病因</b>
        </p>
        <p>慢性乙型肝炎是由于感染乙型肝炎病毒(HBV)引起的，乙型肝炎患者和HBV携带者是本病的主要传染源，HBV可通过母婴、血和血液制品、破损的皮肤黏膜及性接触传播。感染HBV后，由于受病毒因素、宿主因素、环境因素等影响，会出现不同的结局和临床类型，导致其发展为慢性乙型肝炎的常见原因有：</p>
        <p>1.家族性传播</p>
        <p>我国乙肝高发的主要原因是家族性传播，其中以母婴垂直传播为主，母亲如果乙肝E抗原阳性，所生子女未注射乙肝疫苗，大都成为乙肝病毒携带者。而精液中可检出乙肝病毒，因此可通过性传播。这是造成我国乙肝的家庭聚集特征的主要原因。</p>
        <p>2.婴幼儿期感染病毒</p>
        <p>最初感染乙肝的年龄与慢性乙肝有密切关系。胎儿、新生儿一旦感染乙肝病毒，约有90%～95%成为慢性病毒携带者;儿童感染乙肝病毒，约有20%成为慢性乙肝病毒携带者;成人感染乙肝病毒，只有3%～6%发展为慢性乙肝病毒携带状态。</p>
        <p>3.缺乏预防意识</p>
        <p>乙肝疫苗是阻断乙肝垂直传播的措施，由于经济条件限制以及缺乏预防意识，乙肝疫苗的接种工作开展不够理想，使得对乙肝的预防难以贯彻，慢性病例越来越多。</p>
        <p>4.漏诊</p>
        <p>急性期隐匿起病的无黄疸型肝炎比急性黄疸型肝炎容易发展为慢性，这与无黄疸型肝炎容易被误诊或漏诊，未得到及时诊治和休息有关。</p>
        <p>5.免疫功能低下者感染病毒</p>
        <p>肾移植、肿瘤、白血病、艾滋病、血液透析者感染乙肝易演变为慢性肝炎。乙肝发病的急性期使用肾上腺糖皮质激素等免疫抵制剂治疗者，破坏患者体内的免疫平衡，容易使急性肝炎转变为慢性。</p>
        <p>6.既往有其他肝病史感染病毒者</p>
        <p>
          原有肝炎(酒精性肝炎、脂肪肝、酒精性肝纤维化等)、血吸虫病、疟疾、结核病等，再感染乙肝病毒后，不仅容易成为慢性肝炎，且预后较差。
        </p>
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
        src: "static/img/bkbjt.jpg",
        jieshao:
          "乙肝(又称乙型病毒性肝炎)系由乙肝病毒(HBV)引起，临床表现为：乏力、食欲减退、恶心、呕吐、厌油、肝大及肝功能异常。发展中国家发病率高，多数无症状，其中1/3出现肝损害的临床表现。据统计，全世界无症状乙肝病毒携带者(HBsAg携带者)超过2.8亿,我国约占9300万。 乙肝包括下面类型：急性乙肝(急性黄疸型肝炎、急性无黄疸型肝炎)、慢性乙肝、重型乙肝、淤胆型肝炎、肝炎后肝硬化、小儿乙型肝炎病毒相关肾炎、新生儿乙型肝炎、乙型肝炎病毒性关节炎等。"
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