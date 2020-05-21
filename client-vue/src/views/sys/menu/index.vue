<template>
  <VCard icon="s-promotion" mode="table" title="菜单管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleView('add')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table
      ref="table"
      :data="data"
      row-key="id"
      border
      lazy
      :load="handleLoad"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="name" label="菜单名称" />
      <el-table-column prop="path" label="路由地址" />
      <el-table-column prop="source" label="图标">
        <template slot-scope="{row}">
          <i :class="row.source"></i>
        </template>
      </el-table-column>
      <el-table-column prop="code" label="编码" />
      <el-table-column prop="alias" label="菜单别名" />
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
  </VCard>
</template>
<script>
import { ApiGetMenuList, ApiMenuDelete } from "@/api/sys/menu"
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
      data: []
    }
  },
  mounted() {
    this.getList({ parentId: '0' })
  },
  methods: {
    handleLoad(tree, treeNode, resolve) {
      ApiGetMenuList({ parentId: tree.id }).then(res => {
        if (res.success) {
          resolve(res.data)
        }
      })
    },
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
        ApiMenuDelete({ id }).then(res => {
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
      ApiGetMenuList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>