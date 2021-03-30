import Vue from 'vue'
import VueRouter from 'vue-router'

// 如果文件里面的文件就叫 index.vue 就可以省略不写
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
