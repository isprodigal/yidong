<template>
  <div class="smsjs">
    <van-nav-bar title=" 什么是近视？看书也会导致近视吗？" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg>
    </van-nav-bar>
    <div class="main">
      <img src="static/img/lb3.jpg" alt />
    </div>
    <div class="zhuti">
      <p class="jiacu">1.近视是什么？</p>
      <p
        style="text-indent: 25px;"
      >眼球就是一个照相机，照相机镜头成像在底片之前就是近视，因而近视常可以归结到两个结构因素上，一是照相机镜头折光性太强，叫做曲率性近视，二是照相机镜头与底片之间的距离太远，叫做轴性近视。镜头的部分在三岁之后的变化是很小的，所以学龄近视的出现多归咎于眼轴增长。除此之外，当然也存在一些特殊类型的近视，如病理性近视、各种眼病引起的形觉剥夺性近视、血糖波动引起的突发性近视等。</p>
      <p class="jiacu">2.造成现在近视高发的原因是什么？</p>
      <p
        style="text-indent:25px"
      >从宏观的来讲，存在几大因素，一是应试教育的体制（大量长时的近距离用眼），二是宅文化（不论大人小孩都喜欢窝在家里，娱乐活动也都在室内），三是缺乏正规的视光健康服务的提供者，没有途径获得正确的防控理念，以为在保护视力，其实是做无用功。从具体的个人来讲，跟基因、围产期情况、用眼环境习惯都有关系。</p>
      <p class="jiacu">3.具体有哪些误区呢？</p>
      <p style="text-indent:25px">
        误区太多了，首先是近视的判断上，以为视力小于1.0就是近视，视力小于1.0的原因很多，可以是远视，也可以是散光，
        也可能正在发育过程中，有的需要干预，也有很多并不需要，譬如5岁小朋友200度远视，视力0.6，
        这是发育过程中的状态，只要观察即可，而戴镜或者训练只会让远视迅速消失，而以后更容易近视。
        对于少儿，正确的近视判断，应该是调节麻痹的状态下验光，即我没常说的散瞳验光，才能明确是否
        近视，即我们常说的散瞳验光，才能明确是否近视，是否需要干预。而验光操作也有讲究，
        要有标准的验光环境、综合验光仪，也要有标准的验光流程。
      </p>
      <p
        style="text-indent:25px;"
      >第二，在配戴眼镜的方式上，常有家长拒绝戴镜，认为戴了就摘不下来了，或者要求配浅一点，其实这是一种掩耳盗铃，不戴，近视就没有了吗？仍然有，甚至会涨得更快。另一类家长认为应该看黑板戴，平时不戴，这也是误区，只有内隐斜、调节过强的小朋友适合这样的戴镜方式，而多数近视眼都是外隐斜，并不适合这样戴镜。同样，双光镜、渐进多焦镜也只适用于内隐斜、调节过强的小朋友，而多数近视儿童也是不适合的。</p>
      <p
        style="text-indent:25px"
      >第三，在用眼的习惯上，以为不看电视、不打游戏就能防控近视，其实看书、写字、弹钢琴、画画，又何尝不是造成近视的用眼因素呢？所有长时的近距离用眼都会造成近视的发生发展，看电视30分钟，弹钢琴一个小时，后者是有过之而无不及。复旦曾经做过一项临床观察，发现学钢琴和画画的小朋友近视发病率更高。不能因为自己对孩子的控制欲就只强调不能看电视、玩电脑，也应该强调有限度的看书、写字、弹琴、画画才是。把时间留出来到户外去，户外活动越多，才能真正的减少近视发展。</p>
    </div>
    <div class="shijian">
      <span class="fl">
        <van-icon name="browsing-history-o" />72
      </span>
      <span class="fr">
        <van-icon name="todo-list-o" />2019-7-16 16:21
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
          shijian: "2019-7-20",
          xing: 5,
          neirong: "恐怖如斯"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-21",
          xing: 4,
          neirong: "恐怖如斯"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-7-22",
          xing: 3,
          neirong: "恐怖如斯"
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