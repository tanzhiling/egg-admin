<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="菜单名称" prop="name">
            <el-input v-model="form.name" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="编码" prop="code">
            <el-input v-model="form.code" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="路由地址" prop="path">
            <el-input v-model="form.path" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级菜单" prop="parentId">
            <el-select v-model="form.parentId" style="width:300px" clearable>
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
            <el-input v-model="form.source" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序" prop="sort">
            <el-input v-model="form.sort" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="remarks">
            <el-input
              v-model="form.remarks"
              style="width:500px"
              :autosize="{ minRows: 3, maxRows: 6}"
              type="textarea"
            />
          </el-form-item>
        </el-col>
        <el-form-item v-if="!auth.readonly" label=" ">
          <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
          <el-button @click="handleCancel">取消</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </VCard>
</template>
<script>
import { ApiMenuAdd, ApiMenuUpdate, ApiGetMenuTree, ApiGetMenuDetail } from "@/api/sys/menu"
export default {
  props: {
    view: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
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
      tree: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      loading: false,
    }
  },
  computed: {
    auth: function () {
      let title = "查看", readonly = true
      if (this.view === "add") {
        title = "新增"
        readonly = false
      } else if (this.view === "edit") {
        title = "编辑"
        readonly = false
      }
      return { title, readonly }
    },
  },
  mounted() {
    if (this.id) {
      this.getDetail(this.id)
    }
    this.getTree()
  },
  methods: {
    handleNodeClick(data) {
      this.parent = data
      this.form.parentId = data.id
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.view === 'edit') {
            this.update()
          } else if (this.view === 'add') {
            this.add()
          }
        }
      });
    },
    handleCancel() {
      this.$emit("on-view", 'index')
    },
    add() {
      ApiMenuAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.handleCancel()
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
          this.handleCancel()
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