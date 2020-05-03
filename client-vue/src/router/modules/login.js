export default () => {
  return [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'AuthLogin ',
      },
      component: () => import('@/views/login/index.vue'),
    },
  ]
}
