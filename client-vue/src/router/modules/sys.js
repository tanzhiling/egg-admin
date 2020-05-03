export default (Layout) => {
  return {
    path: '/sys',
    component: Layout,
    children: [
      {
        path: 'user',
        meta: {
          title: '用户管理',
        },
        name: 'sysUser',
        component: () => import('@/views/sys/user/index.vue'),
      },
      {
        path: 'dict',
        meta: {
          title: '字典管理',
        },
        name: 'sysDict',
        component: () => import('@/views/sys/dict/index.vue'),
      },
      {
        path: 'dict/dataList',
        meta: {
          title: '字典数据',
        },
        name: 'sysDictDataList',
        component: () => import('@/views/sys/dict/dataList.vue'),
      },
    ],
  }
}
