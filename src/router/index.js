import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const files = require.context('./modules/', true, /\.js$/)
let routes = [
  { path: '/', redirect: '/demo' },
  { path: '*', redirect: '/noPermission', hidden: true }
]
files.keys().forEach(key => {
  routes = routes.concat(files(key).default) // 读取出文件中的default模块
})
export default new Router({
  routes: routes
})
