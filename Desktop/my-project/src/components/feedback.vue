<template>
  <div class="feedback">
    <van-nav-bar title="意见反馈" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div style="text-align:center;font-size:.3rem;color:#aaa;margin:.2rem 0;">意见内容</div>
    <div class="yijian">
      <textarea placeholder="在这里输入内容..." class="neirong" v-model="neirong"></textarea>
    </div>
    <div class="shangchuan">
      <van-uploader v-model="fileList" multiple />
    </div>
    <van-button type="info" size="large" round @click="tijiao">提交</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "feedback",
  data() {
    return {
      neirong: "",
      fileList: [
        { url: "static/img/user.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: '../../static/img/sctp.png', isImage: true }
      ]
    };
  },
  methods: {
    //提交
    tijiao() {
      if (this.neirong == "") {
          Toast("请输入意见内容");
      } else {
        Toast.success("提交成功");
        this.neirong = "";
        this.fileList = [];
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
.feedback {
  font-size: 0.4rem;
  .shangchuan {
    margin: 0.4rem;
  }
  .yijian {
    padding: 0 0.4rem;
    height: 4rem;
    textarea {
      background-color: #fff;
      font-size: 0.35rem;
      width: 100%;
      height: 100%;
    }
  }
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
</style>