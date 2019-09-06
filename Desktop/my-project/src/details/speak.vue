<template>
  <div class="smsjs">
    <van-nav-bar title=" 3岁多小孩不说话怎么办?" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;" />
      <!-- <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg> -->
    </van-nav-bar>
    <div class="main">
      <img src="static/img/sj5.jpg" alt />
    </div>
    <div class="zhuti">
      <p>3岁多小孩不说话怎么办?在日常的生活中任何事情都是离不开交流，交流是能增进人与人之间的情感的，加深对双方的了解。要交流必须是要说话的，如果不会说话的话是会收到异样的眼光的，如果孩子到3岁还不会说话应该直接到医院检查，家长还可以通过以下方法进行引导。</p>
      <p class="jiacu">1、密切观察</p>
      <p
        style="text-indent: 25px;"
      >他虽不会说出别人能懂的话，但他说的那些话虽然你们听不懂，但他说的时候却是代表了固定的含义的。如果是这样，那么他可能属于语迟这一类，你们再把代表某个含义的正确发音教他。这样慢慢他就会说话了。</p>
    <p class="jiacu">2、如果他发的音老是不固定，很乱，那么可能不属于语迟这一类。</p>
      <p
        style="text-indent: 25px;"
      >如果认为他发音虽多，但指的东西很乱，或根本谈不上指什么，那么，必须带他去做一做智力测验一次可能不准确，要做两三次，如果智商在正常范围，那就没问题，再等一等，教一教，看发展。</p>
      <p class="jiacu">小孩不说话的原因是：</p>
      <p style="text-indent: 25px;">
          1、听力问题，听不清别人讲话，或根本听不见声音，都会影响说话。缺乏语言环境。家里人人都很忙，没有时间教他说话，而且家里人很少互相交谈，以致他生活在一个语言贫乏的环境中，也就不会说话了。
      </p>
      <p style="text-indent:25px">2、语言落后的原因，发育性问题例如自闭症和结构性问题例如舌系带过紧、唇腭畸形或口舌肌肉不协调都可能导致语言发展迟缓、言语脱节，再就是脑发育异常。建议带孩子去正规医院，评估孩子的语言发育情况，及时进行语言康复治疗。</p>
        <p style="text-indent:25px">有的宝宝说话教迟，可能与身体上的一些器官发育有关，家人也不用太过着急，因为宝宝现在还正处于一个发育阶段，但是在这之前要给宝宝仔细检查清楚。</p>
    </div>
    <div class="shijian">
      <span class="fl">
        <van-icon name="browsing-history-o" />5648
      </span>
      <span class="fr">
        <van-icon name="todo-list-o" />2019-2-13 12:24
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
          shijian: "2019-2-13",
          xing: 5,
          neirong: "reweytr"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-2-14",
          xing: 4,
          neirong: "sdgfjhgkh"
        },
        {
          src: "static/img/user.jpg",
          name: "戏子",
          shijian: "2019-2-15",
          xing: 3,
          neirong: "jkguhijd"
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