<template>
  <div class="user">
    <van-nav-bar title="个人信息" style="border:0px" />
    <div class="main" @click="grsz">
      <van-image round width="1rem" height="1rem" src="static/img/user.jpg" />
      <div class="dianhua">
        <p>戏子</p>
        <p>id：153495</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="list">
      <van-cell title="消息通知" icon="static/img/xiaoxi.png" is-link to="/notice"/>
      <van-cell title="我的关注" icon="static/img/guanzhu.png" is-link to="/follow" />
      <van-cell title="浏览历史 " icon="static/img/lishi.png" is-link to="/History" />
      <van-cell title="意见反馈 " icon="static/img/fank.png" is-link to="/feedback" />
      <van-cell title="清除缓存 " icon="static/img/huancun.png" is-link @click="qchc" />
      <van-cell title="注销 " icon="static/img/zhuxiao.png" is-link @click="zhuxiao" />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  name: "user",
  data() {
    return {};
  },
  methods: {
    zhuxiao() {
      Dialog.confirm({
        title: "注销",
        message: "确定注销登陆？"
      })
        .then(() => {
          // on confirm
          localStorage.removeItem("loginInfo");
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    },
    qchc() {
      Toast.loading({
        mask: true,
        message: "清除中..."
      });
      setTimeout(function() {
        Toast.success("清除完毕，已清除50.25m");
      }, 3000);
    },
    //个人信息设置
    grsz() {
      this.$router.push("/Settings");
    }
  }
};
</script>

<style lang="less" scoped>
.user {
   height: 100%;
  width: 100%;
  position: fixed;
  .van-cell__left-icon {
    // color: #1989fa;
  }
  .list {
    background-color: #fff;
    padding: 0.2rem 0.2rem;
    .van-cell__left-icon{
      font-size: .5rem;
    }
    .van-cell {
      border: 1px solid #eee;
      border-radius: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .van-cell:last-child {
      margin-bottom: 0;
    }
  }
  .van-hairline--bottom::after {
    border: 0px;
  }
  .main {
    background-color: #1989fa;
    padding: 0.1rem 0.3rem;
    .dianhua {
      display: inline-block;
      color: #fff;
      height: 1rem;
      line-height: 0.6rem;
      width: 80%;
      position: relative;
      .van-icon {
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 0.5rem;
        transform: translateY(-50%);
      }
    }
  }
}
</style>