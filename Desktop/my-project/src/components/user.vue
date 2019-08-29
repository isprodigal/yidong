<template>
  <div class="user">
    <van-nav-bar title="个人信息" style="border:0px"/>
    <div class="main" @click="grsz">
      <van-image round width="1rem" height="1rem" src="static/img/user.jpg" />
      <div class="dianhua">
        <p>戏子</p>
        <p>id：153495</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-cell title="消息通知" icon="chat-o" is-link to="/notice" />
    <van-cell title="我的关注" icon="like-o" is-link to="/follow" />
    <van-cell title="意见反馈 " icon="replay" is-link to="/feedback" />
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {};
  },
  methods: {
    //个人信息设置
    grsz() {
      this.$router.push("/Settings");
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  .van-hairline--bottom::after{
    border: 0px;
  }
    background-color: #f5f5f5;
    height: 100%;
    width: 100%;
    position:fixed;
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