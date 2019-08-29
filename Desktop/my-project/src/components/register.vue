<template>
  <div class="register">
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
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
      <van-field v-model="phone" left-icon="phone-o" placeholder="请输入手机号码">
        <van-button slot="button" size="small" type="info" @click="hqyzm">{{yanzhenma}}</van-button>
      </van-field>
      <van-field v-model="sjyzm" left-icon="envelop-o" placeholder="请输入手机验证码" />
    </van-cell-group>

    <van-button type="info" size="large" @click="zhucei">注册</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      rightIcon: "eye-o",
      phone: "",
      sjyzm: "",
      yanzhenma: "获取验证码",
      len: 60,
      a: true,
      time: ""
    };
  },
  methods: {
    //获取验证码
    hqyzm() {
      this.time = setInterval(() => {
        let { len } = this;
        len--;
        this.len = len;
        this.yanzhenma = this.len;
        if (this.yanzhenma === 0) {
          clearInterval(this.time);
          this.len = 60;
          this.yanzhenma = "获取验证码";
        }
      }, 1000);
    },
    //小眼睛
    chakan() {
      this.type == "text" ? (this.type = "password") : (this.type = "text");
      this.rightIcon == "closed-eye"
        ? (this.rightIcon = "eye-o")
        : (this.rightIcon = "closed-eye");
    },
    //注册
    zhucei() {
      if (this.username == "") {
        Toast.fail("用户名不能为空");
      } else if (this.password == "") {
        Toast.fail("密码不能为空");
      } else if (this.phone == "") {
        Toast.fail("手机号码不能为空");
      } else if (this.sjyzm == "") {
        Toast.fail("验证码不能为空");
      } else {
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "注册成功, 3秒后跳转到登陆页面"
        });

        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `注册成功, ${second}秒后跳转到登陆页面`;
          } else {
            clearInterval(timer);
            Toast.clear();
            this.$router.push('/login')
          }
        }, 1000);
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
.register {
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
}
</style>