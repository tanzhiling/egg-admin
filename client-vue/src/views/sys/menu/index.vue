<template>
  <VCard icon="s-promotion" mode="table" title="菜单管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleVisible(true,'新增')">新增</el-button>
    </template>
    <VForm slot="form" :data="vForm.data" :model="vForm.model" @on-ok="handleSearch" />
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
      <el-table-column label="操作" align="center" width="300">
        <template slot-scope="{row}">
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleVisible(true,'编辑',row.id)"
          >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small" @click="handleDelete(row.id)">删除</el-button>
          <el-button
            type="text"
            icon="el-icon-plus"
            size="small"
            @click="handleVisible(true,'新增',row.id)"
          >新增子项</el-button>
          <el-button
            type="text"
            icon="el-icon-setting"
            size="small"
            @click="handleView('button',row.id)"
          >权限按钮</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框新增/编辑 -->
    <el-dialog :title="title" :visible.sync="visible" @close="handleClose">
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="name">
              <el-input v-model="form.name" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="编码" prop="code">
              <el-input v-model="form.code" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="路由地址" prop="path">
              <el-input v-model="form.path" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上级菜单" prop="parentId">
              <el-select v-model="form.parentId" clearable style="width:100%">
                <el-option
                  class="select-tree"
                  :value="parent.id"
                  :label="parent.name"
                  style="height:200px;overflow:auto;background:#fff"
                >
                  <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick" />
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单图标" prop="source">
              <el-input v-model="form.source" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序" prop="sort">
              <el-input v-model="form.sort" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="remarks">
              <el-input
                v-model="form.remarks"
                :autosize="{ minRows: 3, maxRows: 6}"
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label=" ">
          <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
          <el-button @click="handleVisible(false)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </VCard>
</template>
<script>
import { ApiGetMenuList, ApiMenuDelete, ApiMenuAdd, ApiMenuUpdate, ApiGetMenuTree, ApiGetMenuDetail } from "@/api/sys/menu"
export default {
  data() {
    return {
      height: 0,
      vForm: {
        model: {
          name: "",
        },
        data: [
          {
            component: "Input",
            label: "菜单名称",
            field: "name"
          },
        ],
      },
      data: [],
      parent: {
        id: "",
        name: ""
      },
      form: {
        name: "",
        code: "",
        path: "",
        parentId: "",
        source: "",
        remarks: "",
        sort: ""
      },
      rules: {
        name: [
          { required: true, message: '菜单名称为必填项', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '编码为必填项', trigger: 'blur' },
        ],
        sort: [
          { required: true, message: '排序为必填项', trigger: 'blur' },
        ],
      },
      title: "",
      tree: [],
      visible: false,
      loading: false,
      defaultProps: {
        children: 'children',
        label: 'name'
      },
    }
  },
  mounted() {
    this.getList({ parentId: '0' })
  },
  methods: {
    handleView(view, id) {
      this.$emit("on-view", view, id)
    },
    handleLoad(tree, treeNode, resolve) {
      ApiGetMenuList({ parentId: tree.id }).then(res => {
        if (res.success) {
          resolve(res.data)
        }
      })
    },
    handleClose() {
      this.$refs.form.resetFields()
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
            this.getList({ parentId: '0' })
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
    },
    handleVisible(visible, title, id) {
      if (visible === true) {
        this.getTree()
      }
      if (id) {
        this.getDetail(id)
      }
      if (title) {
        this.title = title
      }
      this.visible = visible
    },
    handleNodeClick(data) {
      this.parent = data
      this.form.parentId = data.id
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.title === "新增") {
            this.add(this.form)
          } else {
            this.update(this.form)
          }
        }
      });
    },
    add() {
      ApiMenuAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.handleVisible(false)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update() {
      ApiMenuUpdate(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.handleVisible(false)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getDetail(id) {
      ApiGetMenuDetail({ id }).then(res => {
        if (res.success) {
          const { id, code, parent, parentId, name, alias, path, source, sort, remark, } = res.data
          if (this.view === 'add') {
            this.parent = { id, name }
            this.form.parentId = id
          } else {
            this.form = { id, parentId, code, name, alias, path, source, sort, remark }
            this.parent = parent
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getTree() {
      ApiGetMenuTree().then(res => {
        if (res.success) {
          this.tree = res.data
        }
      })
    }
  }
}
</script>