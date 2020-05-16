<template>
  <VCard icon="s-promotion" mode="table" title="机构管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleView('add')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data.list" border>
      <el-table-column prop="deptName" label="机构名称" />
      <el-table-column prop="tenant.tenantName" label="所属租户" />
      <el-table-column prop="fullName" label="机构全称" />
      <el-table-column prop="deptCategory" label="机构类型" />
      <el-table-column prop="sort" label="排序" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column label="操作" align="center" width="220">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" size="small">查看</el-button>
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
import { ApiGetDeptList, ApiDeptDelete } from "@/api/sys/dept"
export default {
  data() {
    return {
      height: 0,
      form: {
        model: {
          deptName: "",
        },
        data: [
          {
            component: "Input",
            label: "机构名称",
            field: "deptName"
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
      this.$emit("on-view", { id })
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
        ApiDeptDelete({ id }).then(res => {
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
      ApiGetDeptList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>