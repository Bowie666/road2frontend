import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载 element 的组件库
import ElementUI from 'element-ui'
// 加载 element 的组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式
import './styles/index.less'

// import 之间不能有别的代码
// 全局注册 element 组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  // el: '#app' // 等价于 $mount('#app')
}).$mount('#app')
