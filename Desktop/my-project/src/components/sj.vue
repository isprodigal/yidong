<template>
  <div class="sj">
    <van-nav-bar :title="list.ypName" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <img :src="list.imgSrc" alt />
      <ul style="margin-bottom:1rem">
        <li> <span>药品名称 : </span>{{list.ypName}}</li>
        <li><span>性状 ：</span>{{list.xz}}</li>
        <li><span>用法用量 ：</span>{{list.yf}}</li>
        <li><span>成份 ：</span>{{list.cf}}</li>
        <li><span>治疗疾病 ：</span>{{list.zljb}}</li>
        <li><span>适应症 ：</span>{{list.syz}}</li>
        <li><span>药物相互作用 ：</span>{{list.zljb}}</li>
        <li><span>注意事项 ：</span>{{list.zysx}}</li>
        <li><p style="font-size:0.25rem;color:#aaa;text-align:center">本页面信息仅供参考，请以产品实际附带说明书为准。</p></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "sj",
  data() {
    return {
      list: {
        imgSrc: "static/img/yp1.jpg",
        ypName: "玉屏风颗粒",
        xz:'本品为棕褐色颗粒。味甜、微苦。',
        yf:'开水冲服，一次5克，一日3次。',
        cf:'黄芪、防风、白术(炒).辅料为甘露醇、糊精、甜菊素、枸 橼酸。',
        zljb:'过敏性鼻炎,感冒,慢性荨麻疹,流行性感冒,小儿感冒,慢性阻塞性肺病',
        syz:'益气，固表，止汗。用于表虚不固，自汗恶风，面色白光白，或体虚易感风邪者。',
        ywxhzy:'如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。',
        zysx:'1.忌油腻食物。2.本品宜饭前服用。3.按照用法用量服用，小儿、孕妇、高血压、糖尿病患者应在医师指导下服用。4.服药二周或服药期间症状无明显改善，或症状加重者，应立即停药并去医院就诊。5.对本品过敏者禁用，过敏体质者慎用。6.本品性状发生改变时禁止使用。7.儿童必须在成人监护下使用。8.请将本品放在儿童不能接触的地方。9.如正在使用其他药品，使用本品前请咨询医师或药师。',

      }
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
.sj {
  font-size: 0.3rem;
  .main {
    ul {
      li {
        padding: 0.2rem;
        span{
            color: red;
        }
      }
    }
  }
}
</style>