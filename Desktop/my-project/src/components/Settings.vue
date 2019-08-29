<template>
  <div class="Settings">
    <van-nav-bar title="个人信息设置" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell>
        <template slot="title">
          <span class="custom-title">头像</span>
          <van-image
            style="float:right"
            round
            width="1rem"
            height="1rem"
            src="static/img/user.jpg"
          />
        </template>
      </van-cell>
      <van-cell title="姓名" is-link :value="username" @click="name" />
      <van-cell title="性别" is-link :value="xinbie" @click="xinbiexiugai" />
      <van-cell title="修改密码" is-link @click="xiugaimima" />
      <van-cell title="退出登陆" @click="tuichudenglu" />
    </van-cell-group>
    <!-- 姓名修改弹出层 -->
    <van-popup v-model="show" round position="top" :style="{ height: '30%' }">
      <div class="tanchu" style="padding:.3rem .2rem;">
        <div style="text-align:center">{{tctitle}}</div>
        <van-cell-group>
          <van-field v-model="xiugainame" label="姓名:" placeholder="请输入姓名" />
          <div style="text-align: center;">
            <van-button type="info" style="border-radius:10px" @click="queding">确定</van-button>
            <van-button type="danger" style="border-radius:10px" @click="quxiao">取消</van-button>
          </div>
        </van-cell-group>
      </div>
    </van-popup>
    <!-- 性别选择器 -->
    <van-action-sheet
      v-model="xBshow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      style="margin-bottom:.9rem"
      close-on-click-action
    />
    <!-- 修改密码弹出层 -->
    <van-popup v-model="mimashow" round position="top" :style="{ height: '40%' }">
      <div style="padding:.3rem .2rem;">
        <div style="text-align:center">修改密码</div>
        <van-cell-group>
          <van-field v-model="yuanmima" label="旧密码:" placeholder="请输入旧密码" />
          <van-field v-model="xinmima" label="新密码:" placeholder="请输入新密码" />
          <div style="text-align: center;">
            <van-button type="info" style="border-radius:10px" @click="mimaqueding">确定</van-button>
            <van-button type="danger" style="border-radius:10px" @click="mimaquxiao">取消</van-button>
          </div>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  name: "Settings",
  data() {
    return {
      show: false,
      mimashow: false,
      username: "戏子",
      xiugainame: "",
      yuanmima: "",
      xinmima: "",
      xinbie: "男",
      tctitle: "修改姓名",
      xBshow: false,
      actions: [{ name: "男" }, { name: "女" }, { name: "保密" }]
    };
  },
  methods: {
    //退出登陆
    tuichudenglu() {
      Dialog.confirm({
        title: "退出登陆",
        message: "确定退出登陆？"
      })
        .then(() => {
          localStorage.removeItem("loginInfo");
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    },
    //修改密码取消
    mimaquxiao() {
      this.yuanmima = "";
      this.xinmima = "";
      this.mimashow = false;
    },
    //修改密码确定
    mimaqueding() {
      if (this.yuanmima == "") {
        Toast.fail("请输入旧密码");
      } else if (this.xinmima == "") {
        Toast.fail("请输入新密码");
      } else if (this.yuanmima == this.xinmima) {
        Toast.fail("新旧密码一样");
      } else {
        this.yuanmima = "";
        this.xinmima = "";
        this.mimashow = false;
        Toast.success("修改成功");
      }
    },
    //修改密码
    xiugaimima() {
      this.mimashow = true;
    },
    //性别确定
    onSelect(item) {
      this.xinbie = item.name;
    },
    //性别
    xinbiexiugai() {
      this.xBshow = true;
    },
    //姓名确定
    queding() {
      if (this.xiugainame == "") {
        Toast.fail("不能为空");
      } else {
        this.username = this.xiugainame;
        this.show = false;
        Toast.success("修改成功");
      }
    },
    //姓名取消
    quxiao() {
      this.xiugainame = "";
      this.show = false;
    },
    //姓名
    name() {
      this.show = true;
    },
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.Settings {
  .van-cell__right-icon {
    top: 0.3rem;
  }
  .van-cell {
    height: 1.5rem;
    line-height: 1rem;
    font-weight: 700;
    font-size: 0.4rem;
  }
  background-color: #f4f4f5;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 0.3rem;
}
</style>