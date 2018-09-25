// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import '../src/assets/css/iconfont/iconfont.css'

import MuseUI from 'muse-ui'

import 'muse-ui/dist/muse-ui.css'
// import '../src/assets/css/theme-light.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题

import { Collapse, CollapseItem ,DatePicker,Tabs,TabPane,Message} from 'element-ui'

import 'element-ui/lib/theme-chalk/collapse.css';
import 'element-ui/lib/theme-chalk/collapse-item.css';
import 'element-ui/lib/theme-chalk/date-picker.css';
import 'element-ui/lib/theme-chalk/tabs.css';
import 'element-ui/lib/theme-chalk/tab-pane.css';
import 'element-ui/lib/theme-chalk/message.css';

Vue.prototype.$message  = Message;

Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(DatePicker)
Vue.use(Tabs)
Vue.use(TabPane)
import axios from 'axios'

Vue.prototype.$http = axios;
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require stylesimport 'swiper/dist/css/swiper.css'
 Vue.use(VueAwesomeSwiper, /* { default global options } */)

axios.defaults.withCredentials = true; //让ajax携带cookie
Vue.prototype.$http = axios;
Vue.use(VueAxios, axios)
Vue.use(MuseUI)
Vue.config.productionTip = false
// Vue.use(ElementUI);
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem('pass')=='pass') {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    render: h => h(App)
})