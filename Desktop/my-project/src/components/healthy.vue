<template>
  <div class="healthy">
    <van-nav-bar title="药品分类" />
    <div>
      <van-tabs v-model="active" animated>
        <van-tab v-for="index in dhlist" :title="index.name" :key="index.name">
          <van-grid square>
            <van-grid-item
              v-for="value in index.ypsl"
              :key="value.name"
              :to="value.href"
              style="margin:.1rem 0rem;height: 2.7rem;flex-basis:33.333%;border:0.02rem solid #eaeaea;box-sizing: border-box;"
            >
              <img :src="value.src" alt />
              <p style="margin-top:.1rem;text-align:center;width:100%">{{value.name}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "healthy",
  data() {
    return {
      activeKey: 0,
      active: "",
      dhlist: [
        {
          name: "家庭常备",
          ypsl: [
            {
              // name: "感冒颗粒",
              // icons: "#icon-yao2",
              // tzym: "/classification"
              name: "玉屏风颗粒",
              src: "static/img/yp1.jpg",
              href: "/sj?0"
            },
            {
              // name: "感冒胶囊",
              // icons: "#icon-yao1",
              // tzym: "/classification"
              name: "999感冒灵颗粒",
              src: "static/img/yp2.jpg",
              href: "/sj?1"
            },
            {
              // name: "瓶装药物",
              // icons: "#icon-yao",
              // tzym: "/classification"
              name: "复方感冒灵片",
              src: "static/img/yp3.jpg",
              href: "/sj?2"
            },
            {
              // name: "口服含片",
              // icons: " #icon-yaopian",
              // tzym: "/classification"
              name: "美林",
              src: "static/img/yp4.jpg",
              href: "/sj?3"
            },
            {
              // name: "针管药物",
              // icons: "#icon-yiyao-zhenji",
              // tzym: "/classification"
              name: "保济丸",
              src: "static/img/yp5.jpg",
              href: "/sj?4"
            },
            {
              name: "清火栀麦片",
              src: "static/img/yp6.jpg",
              href: "/sj?5"
            },
            {
              name: "连花清瘟胶囊",
              src: "static/img/yp27.jpg",
              href: "/sj?26"
            },
            {
              name: "汉桃叶片",
              src: "static/img/yp28.jpg",
              href: "/sj?27"
            },
            {
              name: "通络开痹片",
              src: "static/img/yp29.jpg",
              href: "/sj?28"
            },
            {
              name: "清眩丸",
              src: "static/img/yp30.jpg",
              href: "/sj?29"
            },
            {
              name: "重感灵片",
              src: "static/img/yp31.jpg",
              href: "/sj?30"
            },
            {
              name: "流感丸",
              src: "static/img/yp32.jpg",
              href: "/sj?31"
            }
          ]
        },
        {
          name: "耳鼻喉用药",
          ypsl: [
            {
              // name: "感冒颗粒",
              // icons: "#icon-yao2",
              // tzym: "/classification"
              name: "清咽滴丸",
              src: "static/img/yp7.jpg",
              href: "/sj?6"
            },
            {
              // name: "感冒胶囊",
              // icons: "#icon-yao1",
              // tzym: "/classification"
              name: "鼻舒适片",
              src: "static/img/yp8.jpg",
              href: "/sj?7"
            },
            {
              // name: "瓶装药物",
              // icons: "#icon-yao",
              // tzym: "/classification"
              name: "痰热清注射液",
              src: "static/img/yp9.jpg",
              href: "/sj?8"
            },
            {
              // name: "口服含片",
              // icons: " #icon-yaopian",
              // tzym: "/classification"
              name: "穿心莲片",
              src: "static/img/yp10.jpg",
              href: "/sj?9"
            },
            {
              name: "复方芩兰口服液",
              src: "static/img/yp33.jpg",
              href: "/sj?32"
            },
            {
              name: "清开灵分散片",
              src: "static/img/yp34.jpg",
              href: "/sj?33"
            },
            {
              name: "双黄连粉针剂",
              src: "static/img/yp35.jpg",
              href: "/sj?34"
            },
            {
              name: "银翘解毒片",
              src: "static/img/yp36.jpg",
              href: "/sj?35"
            },
            {
              name: "夏桑菊颗粒",
              src: "static/img/yp37.jpg",
              href: "/sj?36"
            },
            {
              name: "抗感颗粒",
              src: "static/img/yp38.jpg",
              href: "/sj?37"
            },
            {
              name: "双黄连胶囊",
              src: "static/img/yp39.jpg",
              href: "/sj?38"
            },
            {
              name: "羚羊感冒胶囊",
              src: "static/img/yp40.jpg",
              href: "/sj?39"
            }
          ]
        },
        {
          name: "肠胃用药",
          ypsl: [
            {
              name: "藿香正气口服液",
              src: "static/img/yp11.jpg",
              href: "/sj?10"
            },
            {
              name: "武力拔寒散",
              src: "static/img/yp12.jpg",
              href: "/sj?11"
            },
            {
              name: "通天口服液",
              src: "static/img/yp13.jpg",
              href: "/sj?12"
            },
            {
              name: "新清宁片",
              src: "static/img/yp14.jpg",
              href: "/sj?13"
            },
            {
              name: "小儿金丹片",
              src: "static/img/yp41.jpg",
              href: "/sj?40"
            },
            {
              name: "午时茶颗粒",
              src: "static/img/yp42.jpg",
              href: "/sj?41"
            },
            {
              name: "小儿热速清颗粒",
              src: "static/img/yp43.jpg",
              href: "/sj?42"
            },
            {
              name: "逍遥颗粒",
              src: "static/img/yp44.jpg",
              href: "/sj?43"
            },
            {
              name: "调胃消滞丸",
              src: "static/img/yp45.jpg",
              href: "/sj?44"
            },
            {
              name: "上清片",
              src: "static/img/yp46.jpg",
              href: "/sj?45"
            },
            {
              name: "麝香痔疮栓",
              src: "static/img/yp47.jpg",
              href: "/sj?46"
            },
            {
              name: "人参健脾丸",
              src: "static/img/yp48.jpg",
              href: "/sj?47"
            }
          ]
        },
        {
          name: "皮肤用药",
          ypsl: [
            {
              name: "清凉油",
              src: "static/img/yp15.jpg",
              href: "/sj?14"
            },
            {
              name: "白花油",
              src: "static/img/yp16.jpg",
              href: "/sj?15"
            },
            {
              name: "风油精",
              src: "static/img/yp17.jpg",
              href: "/sj?16"
            },
            {
              name: "足光散",
              src: "static/img/yp18.jpg",
              href: "/sj?17"
            },
            {
              name: "华佗膏",
              src: "static/img/yp19.jpg",
              href: "/sj?18"
            },
            {
              name: "虎标万金油",
              src: "static/img/yp20.jpg",
              href: "/sj?19"
            },
            {
              name: "青鹏软膏",
              src: "static/img/yp21.jpg",
              href: "/sj?20"
            },
            {
              name: "新肤螨灵软膏",
              src: "static/img/yp22.jpg",
              href: "/sj?21"
            },
            {
              name: "郁金银屑片",
              src: "static/img/yp23.jpg",
              href: "/sj?22"
            },
            {
              name: "荆肤止痒颗粒",
              src: "static/img/yp24.jpg",
              href: "/sj?23"
            },
            {
              name: "老鹳草软膏",
              src: "static/img/yp25.jpg",
              href: "/sj?24"
            },
            {
              name: "复方硫黄乳膏",
              src: "static/img/yp26.jpg",
              href: "/sj?25"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
/deep/ .van-tabs__wrap--scrollable .van-tab {
  flex-basis: 25% !important;
}
.healthy {
  padding-bottom: 1rem;
  img {
    width: 2rem;
    height: 1.5rem;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #000;
    text-align: center;
  }
}
</style>