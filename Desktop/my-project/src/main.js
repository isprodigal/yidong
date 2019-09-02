// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './rem'
import '@/assets/css/commont.css'
import { Tabbar, TabbarItem,Row, Col,Search,Icon,Swipe, SwipeItem,List,Cell,CellGroup,Image,Button,Field,
  NavBar,Notify,Divider,Tab,Tabs,Uploader,Collapse,CollapseItem,Popup,ActionSheet,TreeSelect,Sidebar,SidebarItem,
  Grid,GridItem,Skeleton,Rate,NoticeBar  
} from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Row).use(Col).use(Search).use(Icon).use(Swipe).use(SwipeItem).use(List)
.use(Cell).use(CellGroup).use(Image).use(Button).use(Field).use(NavBar).use(Notify).use(Divider)
.use(Tab).use(Tabs).use(Uploader).use(Collapse).use(CollapseItem).use(Popup).use(ActionSheet).use(TreeSelect)
.use(Sidebar).use(SidebarItem).use(Grid).use(GridItem).use(Skeleton).use(Rate).use(NoticeBar);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
