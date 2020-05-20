<template>
  <VCard icon="s-promotion" mode="table" title="用户管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleView('add')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data.list" border>
      <el-table-column prop="username" label="登录账号" />
      <el-table-column prop="nickname" label="用户昵称" />
      <el-table-column prop="role.roleName" label="所属角色" />
      <el-table-column prop="dept.deptName" label="所属部门" />
      <el-table-column prop="updateTime" label="更新时间" width="140" />
      <el-table-column prop="status" label="状态" width="100" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.status==='1'" type="success" effect="dark">启用</el-tag>
          <el-tag v-else type="danger" effect="dark">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="220">
        <template slot-scope="{row}">
          <el-button
            type="text"
            icon="el-icon-view"
            size="small"
            @click="handleView('info',row.id)"
          >查看</el-button>
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleView('edit',row.id)"
          >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <VPage class="margin-top-10" :total="data.total" :current="data.current" :size="data.size" />
  </VCard>
</template>
<script>
import { ApiGetUserList, ApiUserDelete } from "@/api/sys/user"
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
      data: {
        list: [],
        size: 10,
        current: 1,
        total: 0,
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleView(view, id) {
      this.$emit("on-view", view, id)
    },
    handleTableHeight(height) {
      this.$nextTick(() => {
        this.height = height
      })
    },
    handleSearch(payload) {
      this.getList(payload)
    },
    handleDelete(id) {
      this.$confirm('确定将选择数据删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ApiUserDelete({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    getList(payload) {
      ApiGetUserList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>