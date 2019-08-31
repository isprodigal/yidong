<template>
  <div class="zshxzq">
    <van-nav-bar title="中暑了你会喝藿香正气水吗？" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon :name="shcan" slot="right" @click="shoucang" style="margin-right:.2rem;"/>
      <svg class="icon" aria-hidden="true" slot="right" style="color:#fff;">
        <use xlink:href="#icon-fenxiang" />
      </svg>
    </van-nav-bar>
    <ul>
      <li>
        <p>听说前一段林俊杰开演唱会出现中暑的症状，有人献上“良方”：赶紧喝点藿香正气水！</p>
      </li>
      <li>
        <p>听上去好像没什么问题，因为在我们的固有思想中，似乎藿香正气水就是用来针对中暑的。很多人在暑期出游之时，也都会常备一些藿香正气水来预防中暑。</p>
      </li>
      <li>
        <img src="static/img/xqsj1.jpg" alt />
      </li>
      <li>
        <p>这样做究竟对吗？藿香正气水真的可以消除中暑吗？</p>
      </li>
      <li>
        <p>答案是否定的！</p>
      </li>
      <li>
        <p class="zs">中暑</p>
      </li>
      <li>
        <p>
          我们平时所说的中暑在现代医学中被称作
          <b>热射病</b>，是指人们长时间暴露在暑热和高温环境下，人体
          <b>体温调节功能失调，散热出现障碍，热量过度积蓄</b>
          从而引发神经器官受损而出现头晕、发力、高热、心烦等症状。这种中暑常常出现在
          <b>长时间工作在太阳暴晒却没有充分降温措施</b>
          的人群之中。
        </p>
      </li>
      <li>
        <img src="static/img/xqsj2.jpg" alt />
      </li>
      <li>
        <p>
          而在传统中医的认识当中，暑邪为六种外来邪气之一，凡夏至之后，立秋以前，致病具有炎热、升散、兼湿特性的外邪，都称为暑邪。中医认为暑邪是一种阳邪，既然是阳邪，那中暑也一定是一种阳热性的疾病，最主要的特点就是
          <b>耗气伤津扰神</b>，主要表现为高热、心烦闷、头晕、口渴等。
        </p>
      </li>
      <li>
        <p class="zs">藿香正气水</p>
      </li>
      <li>
        <p>
          我们再看藿香正气水，藿香正气水来源于宋代的《太平惠民和剂局方》中的藿香正气散剂型改变，主要由大腹皮、白芷、紫苏、茯苓、半夏曲、白术、陈皮、厚朴、苦桔梗、藿香、甘草组成。主要的药物组成大多为
          <b>温热类</b>的药物，而作为主要辅料的酒精也是一种辛温之品。这些药物组成
          <b>不仅不利于热量的散发，反而会给人体增加更多的热量</b>
        </p>
      </li>
      <li>
        <p>如此看来，藿香正气水的的确确是不适用于中暑了，那为什么我们一直会有一种它可以用来缓解中暑的思维呢？</p>
      </li>
      <li>
        <p>
          这是因为，我们在了解藿香正气水的功用时忽略了一个字——“
          <b>湿”</b>。藿香正气水可以治暑不假，但是这个暑一定是夹湿的，也就是
          <b>暑湿</b>，夏天最常见的暑湿感冒，就是可以考虑使用藿香正气水的。
        </p>
      </li>
      <li>
        <img src="static/img/xqsj3.jpg" alt />
      </li>
      <li>
        <p>
          如果在潮湿闷热之际，人们
          <b>感受湿邪较重</b>，出现头昏、腹胀、腹泻，舌苔厚腻，那么是可以考虑选用藿香正气水的。而当气温过于炎热，人们总是会
          <b>贪食一些寒凉食物</b>，如果饮凉过多出现了胸闷、恶心、大便稀烂等这类暑湿感冒的表现，也是可以将藿香正气水纳入考虑范围的。
        </p>
      </li>
      <li>
        <p class="zs">中暑怎么办？</p>
        <p>那么一旦真的发生中暑，我们怎么做才是最正确的呢？</p>
      </li>
      <li>
        <img src="static/img/xqsj4.jpg" alt />
      </li>
      <li>
        <p>
          1.
          <b>撤离高温环境</b>，发现中暑的人，我们首先应该将他转移到阴凉通风的环境，让患者平躺。
        </p>
      </li>
      <li>
        <p>
          2.
          <b>帮助散热</b>，可以通过解开衣领，扇风加快空气流动，冷水淋湿的毛巾擦拭额头、颈脖、腋窝等身体处。
        </p>
      </li>
      <li>
        <p>
          3.
          <b>补充液体</b>，及时补充一些淡盐水也是很有必要的，但是不可以一次饮用过多。
        </p>
      </li>
      <li>
        <p>
          如果中暑的人出现意识不清，一定要
          <b>及时送医就诊</b>，避免发生更严重的损害。
        </p>
      </li>
    </ul>
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
  name: "zshxzq",
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
          src: "static/img/sj1.jpg",
          name: "中暑了你会喝藿香正气水吗？",
          href: "/zshxzq"
        },
        {
          src: "static/img/sj2.jpg",
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
.zshxzq {
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