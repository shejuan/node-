export default [
  // 默认页面
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/pages/notFound')
  }
]
