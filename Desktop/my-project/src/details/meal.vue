<template>
  <div class="smsjs">
    <van-nav-bar title=" 饭后这些事情千万不要做 伤身呐" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg> -->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sj4.jpg" alt />
    </div>
    <div class="zhuti">
      <p>很多朋友都不知道到底怎么健康保养身体，所以，在日常生活中，也是比较无奈的。其实，饭后散步、喝茶、洗澡等等，相信不少人都做过。但是大家知道吗，这些看似平常的举动，实际上对于健康的危害是非常大的。那么人们常在饭后犯了哪些错误呢，我们来详细了解一下吧。</p>
      <p class="jiacu">误区一：吸烟</p>
      <p
        style="text-indent: 25px;"
      >正所谓，饭后一支烟，快活似神仙。不少老烟枪都有饭后吸烟习惯，其实这对于健康的危害是很大的。要知道，饭后肠胃的蠕动会加快，消化道里的血液循环量也会增多。如果这个时候吸烟，则会让身体更容易吸收烟中的有害成分。可以确切的说，饭后吸烟的危害是平时吸烟的10倍之多。</p>
      <p class="jiacu">误区二：饮茶</p>
      <p
        style="text-indent: 25px;"
      >很多人有饭后饮茶的习惯，一杯茶水下去，确实可以解腻。但这并非是健康的生活方式。我们常喝的茶水中，含有大量的酸性物质，而这些物质能与食物中的铁和锌等结合成难以溶解的物质，导致吃入的营养素得不到吸收。所以，小编建议大家还是吃过饭后半小时再喝茶吧，不然补充的铁元素就白白浪费了。</p>
      <p class="jiacu">误区三：吃水果</p>
      <p style="text-indent:25px">有些家庭习惯饭后来点水果补充维生素，但是我们刚刚吃过的食物还停留在胃里没有消耗，这个时候就吃水果，会导致食物阻滞在胃部无法消化。长期以往，很容易出现消化功能紊乱的现象。如果你想要补充维生素，建议改为饭前吃水果吧，这样身体吸收维生素的效果会更好。</p>
     <p class="jiacu">误区四：散步</p>
      <p style="text-indent:25px">
         饭后立即散步，这是很多老年人都喜欢做的。他们认为散散步可以帮助消化，但是他们不知道的是，饭后立即散步反而会因为运动量的突然增加而影响胃部的正常消化。除此之外，还容易引发心肺功能减退，血管硬化等疾病的发生。如果老人家有饭后散步的习惯，那么稍安勿躁，等待三十分钟后再去散步为宜。
      </p>
      <p class="jiacu">
          误区五：洗澡
      </p>
      <p style="text-indent:25px">
         饭后洗澡，相信很多人都这样做过。要知道，饭后洗澡是会导致体表血流量增加的，而这时候的肠胃血流量会相应的减少，不利于肠胃食物的消化，还容易造成积食现象。所以建议大家在饭后1到2个小时后再去洗澡，这样才不会影响到正常的消化。
      </p>
      <!-- <p style="text-indent:25px">
          4、加盐的白粥  腹泻的时候，则可以吃一些加盐的白粥，不过要记得不能放肉。因为如果是肠胃炎引起腹泻的话，则饮食需要保持清淡，而且加盐的白粥不仅可以补充体力，而且还能减轻肠胃的负担。
      </p>
      <p style="text-indent:25px">
        5、胡萝卜汤  胡萝卜是不错的止泻食物，腹泻的朋友喝点胡萝卜汤吧，胡萝卜所含营养成分可以助大便成形，对症状有很好的缓解作用。
      </p>
      <p
        style="text-indent:25px;"
      >6、香蕉  正常情况下导致的腹泻可以适当吃香蕉，而疾病导致的腹泻，那么建议不吃香蕉了。因为香蕉性寒，味甘性寒，可清热润肠，脾虚泄泻者不宜吃香蕉。</p> -->
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
        <van-icon name="todo-list-o" />2019-6-10 09:52
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
          shijian: "2019-6-12",
          xing: 5,
          neirong: "fsgdhfg"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-6-13",
          xing: 4,
          neirong: "恐怖hgjdsdf如斯"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-6-14",
          xing: 3,
          neirong: "dfwertryt"
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