<template>
  <VCard icon="s-promotion" mode="table" title="租户管理">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleView('add')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :data="data" border>
      <el-table-column prop="tenantId" label="租户编码" />
      <el-table-column prop="tenantName" label="租户名称" />
      <el-table-column prop="linkman" label="联系人" />
      <el-table-column prop="contactNumber" label="联系电话" />
      <el-table-column prop="accountNumber" label="账号额度" />
      <el-table-column prop="expireTime" label="到期时间" />
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
  </VCard>
</template>
<script>
import { ApiGetTenantList, ApiTenantDelete } from "@/api/sys/tenant"
export default {
  data() {
    return {
      form: {
        model: {
          tenantName: "",
        },
        data: [
          {
            component: "Input",
            label: "租户名称",
            field: "tenantName"
          },
        ],
      },
      data: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleView(view, id) {
      this.$emit("on-view", view, id)
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
        ApiTenantDelete({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
            this.getList()
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    getList(payload) {
      ApiGetTenantList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>