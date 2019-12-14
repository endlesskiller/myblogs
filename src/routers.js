import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import archive from './pages/archive'
import apply from './pages/apply'
import login from './pages/login'
import test from './pages/test'
import Router from 'vue-router';
import Vue from 'vue';
import Cookies from 'js-cookie'
Vue.use(Router)

var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: home,
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/archive',
            name: 'archive',
            component: archive
        },
        {
            path: '/tag/:name',
            name: 'tag',
            component: archive
        },
        {
            path: '/article',
            name: 'article',
            component: article
        },
        {
            path: '/apply',
            name: 'apply',
            component: apply
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

// 路由前的拦截
router.beforeEach(function (to, from, next) {
    // if (
    //   to.name != 'replaceLogin' &&to.name != 'Detail'&&
    //   !Vue.prototype.$factory.getcookiesInClient('token')
    // ) {
    //   let token = localStorage.getItem('userToken') || false
    //   Vue.prototype
    //     .$fetch(`/authBaseUrl/api/userInfo?token=${token}`)
    //     .then(data => {
    //       // console.log(data);
    //       if (data && data.code != 200) {
    //         router.push({
    //           name: 'replaceLogin',
    //           query: { ...to.query, routerName: to.name }
    //         })
    //       }else{
    //         let userInfo = JSON.stringify(data.data);
    //         localStorage.setItem('userInfo',userInfo)
    //       }
    //     })
    // }
    let isLogin = Cookies.get("tk_psw");
    console.log(isLogin)
    if (isLogin){next()} else {
        if(to.name==='login'){
            next()
        } else {
           next('login') 
        }
    }
})

export default router;
