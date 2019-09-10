<template>
  <div class="smsjs">
    <van-nav-bar title=" 腹泻吃什么能快速止泻" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg>-->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sjList4.jpg" alt />
    </div>
    <div class="zhuti">
      <p class="jiacu">1.杨梅</p>
      <p
        style="text-indent: 25px;"
      >中医认为，杨梅味甘、酸，性温，具有生津止渴、和胃止呕、涩肠止泻的功效，可用于治疗多种疾病。取杨梅10枚，乌梅15克，水煎服，可治疗腹泻。</p>
      <!-- <p
        style="text-indent: 25px;"
      >膳食宝塔中，蔬菜水果是含膳食纤维最多的食物。中国人的推荐摄入量是25~30克/天。膳食纤维不足的时候，就容易出现便秘和肥胖的问题。这个病例，看似只是孩子蔬菜吃得比较少，但根本原因还是在家庭中：家长的不良饮食习惯影响到了孩子，孩子从小是模仿大人的行为、建立自身饮食习惯的。所以当孩子蔬菜吃的不够时，其实也表明家里的大人也很有可能存在同样的问题。</p>-->
      <p class="jiacu">2.面食</p>
      <p
        style="text-indent:25px"
      >腹泻需要吃一些比较容易消化的食物，面食是不错的选择。面条营养丰富，而且比较容易消化吸收，所以吃面条是腹泻的人一个很好的选择。但是，对于腹泻的人来说，吃的面条不要过于油腻，过于油腻的话会加重肠胃负担。</p>
      <!-- <p
        style="text-indent:25px"
      >新鲜的水果蔬菜中含有丰富的维生素，是膳食中各类维生素如胡萝卜素、维生素B族和维生素C，以及钙、镁、钾等矿物质的重要来源。如果每天摄入不足就容易发生维生素、矿物质、膳食纤维的缺乏，从而影响我们的身体。</p>
      <p
        style="text-indent:25px"
      >其次长期蔬菜水果摄入量不足，久而久之会影响我们的身体代谢和肠道健康。蔬菜水果中还含有各种膳食纤维，在体内促进粪便排出的同时还能减少胆固醇的吸收，维护身体健康并预防动脉粥样硬化。</p>
      <p style="text-indent:25px">最后从长远看，蔬菜水果的摄入不足也许会增加死亡率：有研究表明：蔬菜水果摄入不足，是导致世界各国居民死亡的十大高危因素之一。</p>
      <p
        style="text-indent:25px"
      >据中国疾病预防控制中心慢性传染性疾病预防中心关于《2013年中国25岁及以上人群水果摄入不足的归因死亡分析》的研究发现：我国因水果摄入不足造成期望寿命损失为1.73岁。</p>-->
      <p class="jiacu">3.苹果</p>
      <p
        style="text-indent:25px"
      >苹果可让轻度腹泻痊愈。取苹果1只，连皮带核切成小块，放在水中煮3～5分钟，待温后食用，每日2～3次，每次30克左右即可。需要注意的是，在食用煮熟的苹果时，不宜加蔗糖调味，因为蔗糖可能会加重腹泻。</p>
      <!-- <p
        style="text-indent:25px;"
      >中国人的膳食纤维的推荐量为每天25~30克，即使在每天都能多吃蔬菜的情况下，也只能摄入15克左右，所以这个量还是不能达到推荐量的要求，那么我们可以把膳食纤维作为一个常规补充剂。</p>
      <p
        style="text-indent:25px"
      >我们日常要做到：1. 蔬菜：每天摄入300g-500g，深色蔬菜要占一半以上。2. 水果：保证每天摄入200-350g，果汁不能代替鲜果。3.如果伴有便秘等不适，应适当的膳食纤维补充剂。正常人每天通过完全平衡的饮食，每天能够摄入到的膳食纤维量大约在15克，而即使每天对天然食物再完美的搭配，也很难满足膳食纤维推荐摄入量，因此建议如果有便秘者，可以额外补充膳食纤维。</p>-->
      <p class="jiacu">4.石榴</p>
      <p
        style="text-indent:25px"
      >石榴含有鞣质、糖类、苹果酸、柠檬酸、蛋白质、维生素C等，有软化血管、助消化、降血脂等多种功效，其中维生素C的含量比苹果高1-2倍。石榴的果实可分为甜、酸、苦三种，中医认为，味甘的石榴具有生津止渴之效，可用于治疗咽喉燥渴、润秋燥，而味酸的石榴对于治疗赤白痢腹痛、腹泻等有一定效果。</p>
      <p class="jiacu">5.醋茶</p>
      <p
        style="text-indent:25px"
      >沏一杯绿茶或花茶，将茶水倒入另一杯中，放入一大汤匙醋，将醋茶喝下，一杯茶可继续再冲泡两次，连喝三杯醋茶，腹泻可止。此方治腹泻不适用于细菌性腹泻。</p>
         <p class="jiacu">6.葡萄酒</p>
      <p
        style="text-indent:25px"
      >有调查发现，适量饮用葡萄酒可以治疗腹泻。在刚开始有腹泻症状的时候，喝一两杯葡萄酒就可以治愈。特别是在杀死致病性大肠杆菌方面，葡萄酒的威力异常明显。葡萄酒不仅能治疗腹泻，而且还有预防作用，这就是人们在吃海鲜时喜欢用葡萄酒佐餐的原因。</p>
         <p class="jiacu">7.香蕉</p>
      <p
        style="text-indent:25px"
      >香蕉营养价值颇高，含多种微量元素和维生素。其中维生素A能增强对疾病的抵抗力;相当多的钾和镁能防止腹泻所致的电解质平衡紊乱。香蕉中含大量果胶质，能吸收肠腔水分使大便成形，减少大便次数，此外，香蕉中还含有一种能预防胃肠溃疡的化学物质，它能刺激胃肠道黏膜细胞的生长繁殖、维持肠道正常蠕动而防止腹泻。
      </p>
       <p class="jiacu">8.白粥</p>
      <p
        style="text-indent:25px"
      >腹泻可以喝点加盐的白粥，建议不要放肉。肉粥会加剧肠胃负担，腹痛排便后，疼痛虽缓解，但此时肠胃因炎症而出现不同程度的水肿，如果吃肉菜，会加重病情，因此腹泻后两至三天内，饮食应以清淡为主，不妨喝点白粥，加少许盐。
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
  name: "diarrhea",
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