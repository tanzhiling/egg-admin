<template>
  <VCard icon="s-promotion" title="岗位管理">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleRouter('sysUserAdd')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data" border>
      <el-table-column prop="postCode" label="岗位编号" />
      <el-table-column prop="postName" label="岗位名称" />
      <el-table-column prop="tenantId" label="所属租户" />
      <el-table-column prop="sort" label="排序" />
      <el-table-column label="操作" align="center" width="220">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" size="small">查看</el-button>
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleRouter('sysUserEdit',row.id)"
          >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </VCard>
</template>
<script>
import { ApiGetPostList, ApiPostDelete } from "@/api/sys/post"
export default {
  data() {
    return {
      form: {
        model: {
          postName: "",
        },
        data: [
          {
            component: "Input",
            label: "岗位名称",
            field: "postName"
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
    handleRouter(name, id) {
      this.$router.push({ name, query: { id } })
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
        ApiPostDelete({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    getList(payload) {
      ApiGetPostList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>