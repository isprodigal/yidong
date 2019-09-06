<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="mainTop">
      <img src="../../static/img/logo.png" alt />
    </div>
    <van-cell-group>
      <van-field v-model="username" left-icon="contact" placeholder="请输入用户名" />
      <van-field
        v-model="password"
        left-icon="bag-o"
        :right-icon="rightIcon"
        :type="type"
        placeholder="请输入密码"
        @click-right-icon="chakan"
      />
    </van-cell-group>
    <van-button type="info" size="large" @click="denglu">登陆</van-button>
    <router-link to="/register" class="myzh fr lstb">还没有账号?点击注册一个</router-link>
  </div>
</template>
<script>
import { Notify } from "vant";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      rightIcon: "eye-o"
    };
  },
  methods: {
    //小眼睛
    chakan() {
      this.type == "text" ? (this.type = "password") : (this.type = "text");
      this.rightIcon == "closed-eye"
        ? (this.rightIcon = "eye-o")
        : (this.rightIcon = "closed-eye");
    },
    //登陆
    denglu() {
      if (this.username == "") {
        Notify({ type: "success", message: "请输入账号" });
      } else if (this.password == "") {
        Notify({ type: "warning", message: "请输入密码" });
      } else if (this.username == "123" && this.password == "123") {
        let loginInfo = { username: this.username, password: this.password };
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        this.$router.push("/user");
      } else {
        Notify({ type: "primary", message: "账号密码错误" });
      }
    },
    //注册
    onClickRight(){
      this.$router.push("/register");
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  .van-nav-bar__right{
  right: 16px;
}
  .van-nav-bar .van-icon,.van-nav-bar__text{
    color: #fff;
  }
  .van-cell {
    border: 1px solid #1989fa;
    border-radius: 10px;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0.5rem;
  }
  .mainTop {
    margin-top: 1rem;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  .myzh {
    margin-top: 1.5rem;
    font-size: 0.3rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .van-button--large {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    border-radius: 10px;
  }
  .van-cell-group {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .header {
    font-size: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    background-color: #1989fa;
    color: #fff;
    .van-icon {
      font-size: 0.4rem;
      line-height: 1rem;
      padding-left: 0.2rem;
      color: #fff;
    }
    .zhuce {
      padding-right: 0.2rem;
      font-size: 0.3rem;
      line-height: 1rem;
      color: #fff;
    }
  }
}
</style>