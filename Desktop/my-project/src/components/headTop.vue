<template>
  <div>
    <van-nav-bar :title="value" left-text="返回" right-text="按钮" left-arrow />
  </div>
</template>
<script>
export default {
  name: "headTop",
  data() {
    return {
      value: "健康生活"
    };
  },
};
</script>
<style lang="less" scoped>
</style>