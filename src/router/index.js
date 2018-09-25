import Vue from 'vue'
import Router from 'vue-router'


import main from '@/components/main/main'

import start from '@/components/main/start'

// import ant from '../components/ant/ant'
const ant=()=>import('../components/ant/ant')
import twocode from '../components/ant/twocode'

import scan from '../components/ant/receivables/scan'

import scancode from '../components/ant/receivables/scancode'

import account from '../components/account/account'


import detail from '../components/account/lookaccountdetail/detail'

import person from '../components/person/person'

import fastlogin from '../components/loginandregist/fastlogin'

import regist from '../components/loginandregist/regist'

import findpassword from '../components/loginandregist/findpassword'

import changepassword from '../components/loginandregist/changepassword'

import login from '../components/loginandregist/login';


import zixun from '../components/main/zixun'

import hot from '../components/main/hot'



Vue.use(Router)

export default new Router({
    
    routes: [{
        path: '/login',
        component: login
    },{
        path: '/start',
        component: start
    }, {
        name:'mainpage',
        path: '/',
        component: main,
        meta: {
            keepAlive: true // 需要被缓存
        }
        // meta:{requireAuth: true,}
    } , {
      
        path: '/ant',
        component: ant,
        meta:{
            requireAuth: true,keepAlive: true // 需要被缓存
        }
    }, {
        path: '/account',
        component: account,
        meta:{requireAuth: true,}
    }   , {
        path: '/scan',
        component: scan,
        meta:{requireAuth: true,}
    }, {
        path: '/scancode',
        component: scancode,
        meta:{requireAuth: true,}
    }, {
        path: '/person',
        component: person,
        meta:{requireAuth: true,}
    }, {
        path: '/fastlogin',
        component: fastlogin,
        // meta:{requireAuth: true,}
    }, {
        path: '/regist',
        component: regist,
        // meta:{requireAuth: true,}
    }, {
        path: '/changepassword',
        component: changepassword,
        // meta:{requireAuth: true,}
    }, {
        path: '/detail',
        component: detail,
        meta:{requireAuth: true,}
    },{
        path: '/twocode',
        component: twocode,
        meta:{requireAuth: true,}
    },{
        path:'/findpassword',
        component:findpassword,
        // meta:{requireAuth: true,}
    },{
        path:'/zixun',
        component:zixun,
        // meta:{requireAuth: true,}
    },{
        path:'/hot',
        component:hot,
        // meta:{requireAuth: true,}
    }
    ]
})