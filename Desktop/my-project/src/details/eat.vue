<template>
  <div class="smsjs">
    <van-nav-bar title=" 经常吃得太饱会有什么坏处" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg>-->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sjList5.jpg" alt />
    </div>
    <div class="zhuti">
      <p>　　科学证明，吃饭吃八分饱是最佳的状态，如果太多就会造成肥胖、胃病以及其他并发症，所以吃饭不要贪多，适量就好，吃的太饱会诱发哪些疾病呢？</p>
      <p class="jiacu">1.肥胖</p>
      <p
        style="text-indent: 25px;"
      >　　现代人之所以“富贵病”高发，就是因为吃的太饱、太好的缘故。高脂肪、高蛋白的现代饮食习惯，使得消化更加困难，让多余的“营养物质” 堆积在体内，就导致了肥胖、高血压等一系列富贵病。</p>
     
      <p class="jiacu">2.胃病</p>
      <p
        style="text-indent:25px"
      >胃是用来存储和消化食物的，吃得过饱最直接的危害就是增加胃的负担，引起消化不良。而且人体胃黏膜上皮细胞寿命较短，每2—3天就应修复一次。如果吃得过饱，导致胃始终处于饱胀状态，没有修复胃粘膜的机会，那么胃大量分泌胃液，会破坏胃黏膜，极易发生胃穿孔、胃糜烂、胃溃疡等疾病。</p>
     
      <p class="jiacu">3.肠道疾病</p>
      <p
        style="text-indent:25px"
      >吃的过饱，可能导致脂肪堵塞在肠道里，会造成肠阻塞，大便黑色、带血。而晚上吃太多高蛋白食物的话，由于来不及完全消化，残余的蛋白质在肠道细菌作用下产生有毒物质，长期刺激下对肠道健康不利。</p>
    
      <p class="jiacu">4.急性胰腺炎</p>
      <p
        style="text-indent:25px"
      >晚餐吃得过好过饱，容易诱发急性胰腺炎。如果在睡眠中突发急性胰腺炎并休克的话，容易因无法抢救而致死。本来就有胆道结石、慢性胆囊炎的患者，若晚餐暴饮暴食，也容易诱发急性胰腺炎而猝死。</p>
      <p class="jiacu">5.加速大脑衰老</p>
      <p
        style="text-indent:25px"
      >长期吃得过饱，会引起大脑反应迟钝，加速大脑的衰老。因为人们在吃饱后，身上的血液都跑到肠胃系统去“工作”了，容易让人长期处于疲劳状态，昏昏欲睡。</p>
         <p class="jiacu">6.神经衰弱</p>
      <p
        style="text-indent:25px"
      >晚餐若吃得过饱，鼓胀的胃肠会对周围器官造成压迫，使兴奋的“波浪”扩散到大脑皮质其他部位，诱发神经衰弱。</p>
         <p class="jiacu">7.骨质疏松</p>
      <p
        style="text-indent:25px"
      >
      长期吃得过饱，会大大提高骨质疏松的概率。因为长期饱食就会使人体内甲状旁腺激素增多，容易使骨骼过分脱钙，造成骨质疏松。从年轻时就经常饱食的人，到了老年，由于体内甲状旁腺激素含量明显增加，即使摄取较多的钙，也难以沉着于骨骼之中，所以患骨质疏松的机会就会明显增加。
      </p>
       <p class="jiacu">8.老年痴呆</p>
      <p
        style="text-indent:25px"
      >长期吃得过饱还容易导致老年痴呆。根据日本有关专家的研究发现，大约有30%—40%的老年痴呆病人，在青壮年时期都有长期饱食的习惯。
      </p>
    </div>
    <div class="shijian">
      <span class="fl">
        <van-icon name="browsing-history-o" />72
      </span>
      <span class="fr">
        <van-icon name="todo-list-o" />2019-6-30 06:23
      </span>
    </div>
    <div class="fgx"></div>
    <div class="plnr">
      <span class="lstb martop">|</span>
      <span class="martop">评论内容</span>
      <van-button class="fr" size="small" color="#1989fa" plain @click="pinglun">写评论</van-button>
      <div class="plnrmain">
        <div
          class="van-skeleton"
          v-for="litm in list"
          :key="litm.shijian"
          style="padding:0.2rem 0;"
        >
          <div
            class="van-skeleton__avatar van-skeleton__avatar--round"
            style="width: 32px; height: 32px;margin-top:.2rem"
          >
            <van-image round :src="litm.src" />
          </div>
          <div class="van-skeleton__content">
            <h3>
              {{litm.name}}
              <span class="fr">{{litm.shijian}}</span>
            </h3>
            <div style="margin-top:.2rem;">
              <van-rate v-model="litm.xing" readonly />
            </div>
            <div style="margin-top:.2rem;">{{litm.neirong}}</div>
          </div>
        </div>
        <van-button
          type="primary"
          size="large"
          plain
          style="color:#1989fa;border:1px solid #1989fa"
        >查看全部评论</van-button>
      </div>
    </div>
    <div class="fgx"></div>
    <div class="xgwz">
      <span class="lstb martop">|</span>
      <span class="martop">相关文章</span>
      <van-row type="flex" justify="space-between">
        <van-col span="11" v-for="litm in xgzt" :key="litm.src">
          <router-link :to="litm.href" style="width:100%;height:100%">
            <img :src="litm.src" />
            <span>{{litm.name}}</span>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <!-- 弹出 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '40%' }">
      <div style="padding:.2rem;">
        <p style="padding-bottom:.2rem;color:#aaa">评论:</p>
        <textarea
          placeholder="在这里输入内容..."
          style="font-size:.3rem;width: 100%;height:3rem"
          v-model="plnrs"
        ></textarea>
        <van-rate v-model="value" style="font-size:.3rem" />
        <van-button
          type="primary"
          size="small"
          style="position: absolute;right:.3rem;bottom:.7rem;background-color:#1989fa;border:0px;"
          @click="pltj"
        >提交</van-button>
      </div>
    </van-popup>
    <img class="hddb" @click="dingbu" v-show="hddb" src="static/img/mescroll-totop.png" alt />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "eat",
  data() {
    return {
      shcan: "like-o",
      hddb: false,
      show: false,
      value: 0,
      plnrs: "",
      list: [
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-1",
          xing: 5,
          neirong: "sdgfdhh"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-2",
          xing: 4,
          neirong: "qwrtretyiu"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-3",
          xing: 3,
          neirong: "zcvxcb"
        }
      ],
      xgzt: [
        {
          src: "static/img/lb3.jpg",
          name: "什么是近视？看书也会导致近视吗？",
          href: "/smsjs"
        },
        {
          src: "static/img/sj1.jpg",
          name: "中暑了你会喝藿香正气水吗？",
          href: "/zshxzq"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    sj() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    //评论确定
    pltj() {
      if (this.plnrs == "") {
        Toast.fail("评论内容不能为空");
      } else if (this.value == "") {
        Toast.fail("请评分");
      } else {
        this.show = false;
        this.list.push({
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: this.sj(),
          xing: this.value,
          neirong: this.plnrs
        });
        Toast.success("评论成功");
        this.value = "";
        this.plnrs = "";
      }
    },
    //写评论
    pinglun() {
      this.show = true;
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
    //收藏
    shoucang() {
      if (this.shcan == "like-o") {
        this.shcan = "like";
        Toast.success("收藏成功");
      } else {
        this.shcan = "like-o";
        Toast.fail("取消收藏");
      }
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.smsjs {
  .zhuti {
    padding: 0.1rem 0.2rem;
    .jiacu {
      text-indent: 25px;
      font-weight: 700;
    }
  }
  .main {
    img {
      display: block;
      height: 3.5rem;
    }
  }
  .xgwz {
    font-size: 0.3rem;
    padding: 0.2rem;
    margin-top: 0.2rem;
    .van-row--flex {
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
      }
      margin-top: 0.2rem;
    }
  }
  .header {
    font-size: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    .van-icon {
      font-size: 0.4rem;
      line-height: 1rem;
      padding-left: 0.2rem;
    }
  }
  .plnr {
    padding: 0.2rem;
    font-size: 0.3rem;
    .martop {
      display: inline-block;
      margin-top: 0.2rem;
    }
    .van-button--small {
      margin-top: 0.1rem;
    }
    .plnrmain {
      padding: 0.2rem;
    }
  }
  .fgx {
    margin-top: 5px;
    background-color: #f6f7fa;
    height: 10px;
  }
  .tkan {
    padding: 0 0.4rem;
    .van-button--normal {
      width: 100%;
    }
  }
  .shijian {
    padding: 0.1rem 0.4rem;
    color: #aaa;
    overflow: hidden;
  }
  ul {
    li {
      p {
        padding: 0.2rem 0.1rem;
      }
      .zs {
        font-size: 0.4rem;
        font-weight: 600;
      }
    }
  }
  .van-cell:not(:last-child)::after {
    border-bottom: 1px solid #fff;
  }
  .van-cell {
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #ccc;
  }
  .van-cell__value--alone {
    text-align: center;
    font-weight: 700;
  }
  padding-bottom: 1rem;
}
</style>