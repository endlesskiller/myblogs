import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import router from './routers'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/style.css'
import fHeader from './components/f-header'
import fFooter from './components/f-footer'
import i18n from './i18n/i18n'
import store from './store'
import filter from './filter'
// import echarts from 'echarts' //引入echarts
//引入基本模板
let echarts = require('echarts/lib/echarts')
 
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

// import less from 'less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component("f-header",fHeader)
Vue.component("f-footer",fFooter)

// 引入全局的方法
Vue.prototype.$filter = filter;
Vue.prototype.$echarts = echarts //引入组件


new Vue({
	router,
	i18n,
	store,
	render: h => h(App),
}).$mount('#app')