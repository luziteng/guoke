import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//安装引入qs解决axios,post发送数据的配置问题

import axios from 'axios';
import qs from 'qs';
Vue.prototype.$qs = qs;

//引入mint-ui轮播图模块
import 'mint-ui/lib/style.css';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入mint-ui无限滚动
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
//引入下拉刷新
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

//一级路由
import Home from "./container/Home.vue";
import Content from "./container/Content.vue";
import Login from "./container/Login.vue";
import Video from "./container/Video.vue";
import Ask from "./container/Ask.vue";
import Details from "./container/Details.vue";
//二级路由
import ContentChannel from "./container/ContentChannel.vue"

const routes = [
//一级路由写法
    { path: '/home',name: "home",component: Home}, 
    { path: '/login',name:'login', component: Login },
    { path: '/video',name:'video', component: Video },
    { path: '/ask',  name:'ask',component: Ask },

//二级路由
    { path: '/details',name:'details', component: Details },
    { path: '/content',name:'content' ,component: Content,
        children:[
            {
                path:'hot',
                name:'hot',
                component:ContentChannel
            },
            {
                path:'frontier',
                name:'frontier',
                component:ContentChannel
            },
            {
                path:'viewpoint',
                name:'viewpoint',
                component:ContentChannel
            },
            {
                path:'visual',
                name:'visual',
                component:ContentChannel
            },
            {
                path:'fact',
                name:'fact',
                component:ContentChannel
            },
            {
                path:'lifestyle',
                name:'lifestyle',
                component:ContentChannel
            },
            {
                path:'15yan',
                name:'15yan',
                component:ContentChannel
            },
            {
                path:'biology',
                name:'biology',
                component:ContentChannel
            },
            {
                path:'sci-fiction',
                name:'sci-fiction',
                component:ContentChannel
            },
            {
                path:'communication',
                name:'communication',
                component:ContentChannel
            },
            {
                path:'math',
                name:'math',
                component:ContentChannel
            },
            {
                path:'forensic',
                name:'forensic',
                component:ContentChannel
            },
            {
                path:'DIY',
                name:'DIY',
                component:ContentChannel
            },
            {
                path:'environment',
                name:'environment',
                component:ContentChannel
            },
              {
                path:'chemistry',
                name:'chemistry',
                component:ContentChannel
            },
            {
                path:'education',
                name:'education',
                component:ContentChannel
            },
            {
                path:'agronomy',
                name:'agronomy',
                component:ContentChannel
            },
            {
                path:'electronics',
                name:'electronics',
                component:ContentChannel
            },
            {
                path:'earth',
                name:'earth',
                component:ContentChannel
            },
            {
                path:'psychology',
                name:'psychology',
                component:ContentChannel
            },
            {
                path:'food',
                name:'food',
                component:ContentChannel
            },
            {
                path:'internet',
                name:'internet',
                component:ContentChannel
            },
            {
                path:'atmosphere',
                name:'atmosphere',
                component:ContentChannel
            },
            {
                path:'society',
                name:'society',
                component:ContentChannel
            },
            {
                path:'physics',
                name:'physics',
                component:ContentChannel
            },
             {
                path:'engineering',
                name:'engineering',
                component:ContentChannel
            },
             {
                path:'sex',
                name:'sex',
                component:ContentChannel
            },
             {
                path:'astronomy',
                name:'astronomy',
                component:ContentChannel
            },
            {
                path:'aerospace',
                name:'aerospace',
                component:ContentChannel
            },
             {
                path:'medicine',
                name:'medicine',
                component:ContentChannel
            },
        ] 
    },
    { path:'',redirect:'/home'},//碰到#/重定位到#/home
]

//实例一个Vuex仓库，store为定义仓库名
const store = new Vuex.Store({
//状态
  state: {
   title:localStorage.getItem("setTitle")||"精选",
  },
//修改状态
  mutations: {//也可以在vuex文档中的Mutation页面里拿到以上代码
    editTitle(state, data) {//改变title的值
      state.title = data
    },
  },
   actions: {//在vuex文档中的Action页面中引入，一般配合事件@XX 触发
    setTitle(context, data) {
      context.commit('editTitle', data);//发送改变后的title值回仓库
    },
  },
  //在vuex文档中的Getter页面里拿到以下代码
 getters: {//组件从store中介手上那数据，配合 computed拿数据
    getTitle: state => {//拿到数据类型title
      return state.title
    },
  }
})

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')