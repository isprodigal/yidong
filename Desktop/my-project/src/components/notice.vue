<template>
  <div class="notice">
    <van-nav-bar title="消息通知" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-collapse v-model="activeName" accordion v-for="item in list" :key="item.name">
      <!-- <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>-->
      <template>
        <van-collapse-item :title="item.title" :name="item.name">{{item.content}}</van-collapse-item>
      </template>
    </van-collapse>
  </div>
</template>
<script>
export default {
  name: "notice",
  data() {
    return {
      activeName: "0",
      list: [
        {
          title: "高温来袭，准备好了吗？",
          name: "1",
          content:
            "芒种已过，仲夏时节正式开始，高温天气频发，湿度大多闷热。6月份，无论是南方还是北方，都有出现35℃以上高温天气的可能，黄淮地区、西北地区东部可能出现40℃以上的高温天。"
        },
         {
          title: "高温来袭，准备好了吗？",
          name: "2",
          content:
            "芒种已过，仲夏时节正式开始，高温天气频发，湿度大多闷热。6月份，无论是南方还是北方，都有出现35℃以上高温天气的可能，黄淮地区、西北地区东部可能出现40℃以上的高温天。"
        },
        {
          title: "高温来袭，准备好了吗？",
          name: "3",
          content:
            "芒种已过，仲夏时节正式开始，高温天气频发，湿度大多闷热。6月份，无论是南方还是北方，都有出现35℃以上高温天气的可能，黄淮地区、西北地区东部可能出现40℃以上的高温天。"
        },
        {
          title: "高温来袭，准备好了吗？",
          name: "4",
          content:
            "芒种已过，仲夏时节正式开始，高温天气频发，湿度大多闷热。6月份，无论是南方还是北方，都有出现35℃以上高温天气的可能，黄淮地区、西北地区东部可能出现40℃以上的高温天。"
        }
      ]
    };
  },
  methods: {
    //返回
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
</style>