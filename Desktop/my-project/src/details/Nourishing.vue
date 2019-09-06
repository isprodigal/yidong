<template>
  <div class="smsjs">
    <van-nav-bar title=" 养肝护肾，多吃这个菜，价格便宜，一年四季常有，爽口开胃还下饭" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg> -->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sj2.jpg" alt />
    </div>
    <div class="zhuti">
      <p>西葫芦是一种常见的淡绿色蔬菜植物，很强的耐光特性，长时间的日照条件有利于西葫芦的茎叶生长，短时间的日照条件西葫芦的结瓜期会比较早。</p>
      <p class="jiacu">西葫芦营养价值及食疗价值</p>
      <p
        style="text-indent: 25px;"
      >西葫芦中含有丰富的维生素，对面色暗黄的人群来说有很好的改善功效，能改善皮肤的色素沉积，还可以补充肌肤的养分，可以让脸色暗沉的人群皮肤恢复活力。</p>
      <p
        style="text-indent: 25px;"
      >西葫芦中含有较多的维生素C、葡萄糖等营养物质，尤其是钙的含量非常高。</p>
      <p style="text-indent: 25px;">
          中医认为西葫芦有除烦止渴、润肺止咳、清热利尿、消肿散结的功效，有利于辅助治疗水肿，肾炎者可以多吃西葫芦，不但可以提高免疫力，还可以补充水分。对烦渴、水肿腹胀、疮毒以及肾炎、肝硬化腹水等症具有辅助治疗的作用。
      </p>
      <p class="jiacu">西葫芦的饮食禁忌</p>
      <p style="text-indent:25px">需要注意，因为西葫芦属性偏寒，有利于身体排便，所以对于脾胃虚寒的人来说，是不宜多食用的。芦笋里面含有非常丰富微量元素，叶酸维生素A、维生素B等，但如果和西葫芦搭配在一起吃，就容易让脾胃虚寒的症状变得更加严重。西葫芦不能和西瓜搭配在一起吃，如果西葫芦和西瓜搭配在一起吃就容易导致腹泻。</p>
      <!-- <p class="jiacu">三、那么，每天要吃多少蔬果才能满足我们身体所需？</p>
      <p style="text-indent:25px">
        每顿多吃一点蔬菜就能满足每日膳食纤维的推荐摄入量了？并不是。
      </p>
      <p
        style="text-indent:25px;"
      >中国人的膳食纤维的推荐量为每天25~30克，即使在每天都能多吃蔬菜的情况下，也只能摄入15克左右，所以这个量还是不能达到推荐量的要求，那么我们可以把膳食纤维作为一个常规补充剂。</p>
      <p
        style="text-indent:25px"
      >我们日常要做到：1. 蔬菜：每天摄入300g-500g，深色蔬菜要占一半以上。2. 水果：保证每天摄入200-350g，果汁不能代替鲜果。3.如果伴有便秘等不适，应适当的膳食纤维补充剂。正常人每天通过完全平衡的饮食，每天能够摄入到的膳食纤维量大约在15克，而即使每天对天然食物再完美的搭配，也很难满足膳食纤维推荐摄入量，因此建议如果有便秘者，可以额外补充膳食纤维。</p>
    <p class="jiacu">四、吃够了蔬菜水果之后，还要补充复合维生素吗？</p>
    <p style="text-indent:25px">对于健康人（无消化道吸收问题、非孕期女性）来说，做到每天吃4~5种新鲜蔬菜，以十字花科、深色、彩色的蔬菜为主，总量 500g ；水果每天 200g~350g ，就基本足够了，则不需要再额外补充复合维生素矿物质了哦。</p> -->
    </div>
    <div class="shijian">
      <span class="fl">
        <van-icon name="browsing-history-o" />72
      </span>
      <span class="fr">
        <van-icon name="todo-list-o" />2019-7-03 12:00
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
          shijian: "2019-7-04",
          xing: 5,
          neirong: "poiu"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-05",
          xing: 4,
          neirong: "lkjhg"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-06",
          xing: 3,
          neirong: "vnmb"
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