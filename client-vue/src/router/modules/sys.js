export default (Layout) => {
  return {
    path: "/sys",
    component: Layout,
    children: [
      {
        path: "dept",
        meta: {
          title: "机构管理",
        },
        name: "sysDept",
        component: () => import("@/views/sys/dept/dept.vue"),
      },
      {
        path: "role",
        meta: {
          title: "角色管理",
        },
        name: "sysRole",
        component: () => import("@/views/sys/role/index.vue"),
      },
      {
        path: "post",
        meta: {
          title: "岗位管理",
        },
        name: "sysPost",
        component: () => import("@/views/sys/post/index.vue"),
      },
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
    ],
  };
};
