
<template>
  <div class="move">
    <p>{{msg}}页面</p>
  </div>
</template>
<script>
export default {
  name: "move",
  data() {
    return {
      msg: {}
    };
  },
  //   created() {
  //     // eslint-disable-next-line no-console
  //     console.log(this.$route.params.id);
  //     // eslint-disable-next-line no-undef
  //     this.msg = this.getId(this.$route.params.id);
  //   },
    mounted() {
      // eslint-disable-next-line no-undef
      this.msg = this.getId(this.$route.params.id);
      // eslint-disable-next-line no-console
      console.log(this.$route.params.id);
    },
  beforeRouteUpdate(to, from, next) {
    // eslint-disable-next-line no-console
    console.log(this, "beforeRouteUpdate"); //当前组件实例
    // eslint-disable-next-line no-console
    console.log(to, "组件独享守卫beforeRouteUpdate第一个参数");
    // eslint-disable-next-line no-console
    console.log(from, "组件独享守beforeRouteUpdate卫第二个参数");
    // eslint-disable-next-line no-console
    console.log(next, "组件独享守beforeRouteUpdate卫第三个参数");
    this.msg = this.getId(to.params.id);
    next();
  },
  methods: {
    getId(id) {
      switch (id) {
        case "1":
          return { id: 1, name: "电影1的详情" };
        case "2":
          return { id: 2, name: "电影2的详情" };
        case "3":
          return { id: 3, name: "电影3的详情" };
      }
    }
  }
  //   mounted() {
  //     getId(1);
  //   }
};
</script>
<style lang="less" scoped>
</style>