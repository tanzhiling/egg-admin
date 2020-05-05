export default (Layout) => {
  return {
    path: "/sys",
    component: Layout,
    children: [
      {
        path: "user",
        meta: {
          title: "用户管理",
        },
        name: "sysUser",
        component: () => import("@/views/sys/user/index.vue"),
      },
      {
        path: "user/add",
        meta: {
          title: "新增用户",
        },
        name: "sysUserAdd",
        component: () => import("@/views/sys/user/addEdit.vue"),
      },
      {
        path: "user/edit",
        meta: {
          title: "编辑用户",
        },
        name: "sysUserEdit",
        component: () => import("@/views/sys/user/addEdit.vue"),
      },
      {
        path: "dict",
        meta: {
          title: "字典管理",
        },
        name: "sysDict",
        component: () => import("@/views/sys/dict/index.vue"),
      },
      {
        path: "dict/dataList",
        meta: {
          title: "字典数据",
        },
        name: "sysDictDataList",
        component: () => import("@/views/sys/dict/dataList.vue"),
      },
      {
        path: "office",
        meta: {
          title: "机构管理",
        },
        name: "sysOffice",
        component: () => import("@/views/sys/office/index.vue"),
      },
      {
        path: "office/add",
        meta: {
          title: "新增机构",
        },
        name: "sysOfficeAdd",
        component: () => import("@/views/sys/office/addEdit.vue"),
      },
      {
        path: "office/edit",
        meta: {
          title: "编辑机构",
        },
        name: "sysOfficeEdit",
        component: () => import("@/views/sys/office/addEdit.vue"),
      },
    ],
  };
};
