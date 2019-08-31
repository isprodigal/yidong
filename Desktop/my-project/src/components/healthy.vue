<template>
  <div class="healthy">
    <van-nav-bar title="药品分类" />
    <div>
      <van-tabs v-model="active" animated>
        <van-tab v-for="index in dhlist" :title="index.name" :key="index.name">
          <van-grid>
            <van-grid-item
              v-for="value in index.ypsl"
              :key="value.name"
              :to="value.tzym"
              style="margin:.2rem;border:1px solid #eaeaea;flex-basis: 28%;"
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="value.icons" />
              </svg>
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
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "感冒发热",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "肠胃用药",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "皮肤用药",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "耳鼻喉",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "儿童用药",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "男性用药",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
            }
          ]
        },
        {
          name: "女性用药",
           ypsl: [
            {
              name: "感冒颗粒",
              icons: "#icon-yao2",
              tzym: "/classification"
            },
            {
              name: "感冒胶囊",
              icons: "#icon-yao1",
              tzym: "/classification"
            },
            {
              name: "瓶装药物",
              icons: "#icon-yao",
              tzym: "/classification"
            },
            {
              name: "口服含片",
              icons: " #icon-yaopian",
              tzym: "/classification"
            },
            {
              name: "针管药物",
              icons: "#icon-yiyao-zhenji",
              tzym: "/classification"
            },
            {
              name: "化疗药物",
              icons: "#icon-yaowufenxi",
              tzym: "/classification"
            },
            {
              name: "中药",
              icons: "#icon-zhongyaoyanmo",
              tzym: "/classification"
            },
            {
              name: "常用药箱",
              icons: "#icon-yaoxiang",
              tzym: "/classification"
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

</style>