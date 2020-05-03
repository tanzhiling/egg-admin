<template>
  <VCard icon="user" mode="table" title="用户管理" @on-table-height-change="handleTableHeight">
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data" border>
      <el-table-column prop="username" label="登录账号" />
      <el-table-column prop="nickname" label="用户昵称" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="email" label="电子邮箱" />
      <el-table-column prop="userType" label="用户类型" />
      <el-table-column prop="updateDate" label="更新时间" width="200" />
      <el-table-column prop="status" label="状态" />
    </el-table>
    <VPage class="margin-top-10" :total="total" :current="current" :size="size" />
  </VCard>
</template>
<script>
import { ApiGetUserList } from "@/api/sys/user"
export default {
  data() {
    return {
      height: 0,
      form: {
        model: {
          moduleName: "",
          status: ""
        },
        data: [
          {
            component: "Input",
            label: "模块名称",
            field: "moduleName"
          },
          {
            component: "Select",
            field: "status",
            label: "状态",
            options: [{
              label: "启用",
              value: 1,
            }, {
              label: "停用",
              value: 0,
            }]
          },
        ],
      },
      data: [],
      size: 10,
      current: 1,
      total: 0
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    handleTableHeight(height) {
      this.$nextTick(() => {
        this.height = height
      })
    },
    handleSearch(data) {
      console.log(data)
    },
    getUserList() {
      ApiGetUserList().then(res => {
        if (res.success) {
          this.data = res.data
          this.size = res.size
          this.total = res.total
          this.current = res.current
        }
      })
    }
  }
}
</script>