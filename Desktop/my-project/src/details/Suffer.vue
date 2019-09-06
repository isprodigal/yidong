<template>
  <div class="smsjs">
    <van-nav-bar title="  拉肚子怎么办 哪些食物吃不得" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg> -->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sj3.jpg" alt />
    </div>
    <div class="zhuti">
      <p>健康的身体还是大家都比较重视了，究竟该怎么才能保证身体的健康，如何才能避免拉肚子呢，相信大家也是非常的了解的，还有拉肚子的时候哪些东西能吃，哪些东西不能吃，吃了会有哪些危害，接下来就由小编为大家一一解答吧。</p>
      <p class="jiacu">拉肚子时能吃鸡蛋吗</p>
      <p
        style="text-indent: 25px;"
      >拉肚子的原因主要分为内在因素、感染性因素和非感染性因素。内在因素是由于消化系统和免疫系统紊乱，导致胃肠道功能紊乱而发生腹泻。感染因素是指胃肠道感染了某些病毒、细菌、真菌等。非感染性因素有饮食不当、气候因素、过敏因素等。</p>
      <p
        style="text-indent: 25px;"
      >鸡蛋含有大量高蛋白物质，在拉肚子期间，体内的消化液分泌减少，无法正常地消化脂肪、蛋白质等物质，对营养物质的吸收能力也大大下降。所以拉肚子时吃鸡蛋，会加重肠胃负担，即使食用，鸡蛋内的营养也难以被人体吸收，所以拉肚子期间尽量不要食用蛋白。</p>
      <p class="jiacu">拉肚子吃什么食物好</p>
      <p style="text-indent:25px">1、多喝水  许多人认为腹泻了要少喝水，其实不然，因为腹泻把身体许多水份排出体外，导致人体缺少，此时应该多喝水，补充体内流失的水分，保证身体机能正常运行。</p>
      <p style="text-indent:25px">
          2、糙米汤  如果出现腹泻怎么办，在家的赶紧喝些米汤。米汤对于腹泻来说是非常有益的，它能够有效治疗普通腹泻症状。
      </p>
      <p style="text-indent:25px">
          3、面食  腹泻需要吃一些比较容易消化的食物，面食是不错的选择。面条营养丰富，而且比较容易消化吸收，所以吃面条是腹泻的人一个很好的选择。但是，对于腹泻的人来说，吃的面条不要过于油腻，过于油腻的话会加重肠胃负担。
      </p>
      <p style="text-indent:25px">
          4、加盐的白粥  腹泻的时候，则可以吃一些加盐的白粥，不过要记得不能放肉。因为如果是肠胃炎引起腹泻的话，则饮食需要保持清淡，而且加盐的白粥不仅可以补充体力，而且还能减轻肠胃的负担。
      </p>
      <p style="text-indent:25px">
        5、胡萝卜汤  胡萝卜是不错的止泻食物，腹泻的朋友喝点胡萝卜汤吧，胡萝卜所含营养成分可以助大便成形，对症状有很好的缓解作用。
      </p>
      <p
        style="text-indent:25px;"
      >6、香蕉  正常情况下导致的腹泻可以适当吃香蕉，而疾病导致的腹泻，那么建议不吃香蕉了。因为香蕉性寒，味甘性寒，可清热润肠，脾虚泄泻者不宜吃香蕉。</p>
      <!-- <p
        style="text-indent:25px"
      >我们日常要做到：1. 蔬菜：每天摄入300g-500g，深色蔬菜要占一半以上。2. 水果：保证每天摄入200-350g，果汁不能代替鲜果。3.如果伴有便秘等不适，应适当的膳食纤维补充剂。正常人每天通过完全平衡的饮食，每天能够摄入到的膳食纤维量大约在15克，而即使每天对天然食物再完美的搭配，也很难满足膳食纤维推荐摄入量，因此建议如果有便秘者，可以额外补充膳食纤维。</p>
    <p class="jiacu">四、吃够了蔬菜水果之后，还要补充复合维生素吗？</p>
    <p style="text-indent:25px">对于健康人（无消化道吸收问题、非孕期女性）来说，做到每天吃4~5种新鲜蔬菜，以十字花科、深色、彩色的蔬菜为主，总量 500g ；水果每天 200g~350g ，就基本足够了，则不需要再额外补充复合维生素矿物质了哦。</p> --> 
    </div>
    <div class="shijian">
      <span class="fl">
        <van-icon name="browsing-history-o" />3251
      </span>
      <span class="fr">
        <van-icon name="todo-list-o" />2019-5-11 11:23
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
  name: "smsjs",
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
          shijian: "2019-6-10",
          xing: 5,
          neirong: "123"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-6-21",
          xing: 4,
          neirong: "zcxc"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-6-22",
          xing: 3,
          neirong: "321"
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