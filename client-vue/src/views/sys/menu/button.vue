<template>
  <VCard icon="back" title="权限按钮" @on-back="handleCancel">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleVisible(true,'新增')">新增</el-button>
    </template>
    <el-table ref="table" :data="data" row-key="id" border>
      <el-table-column prop="btnName" label="按钮名称" />
      <el-table-column prop="btnCode" label="编码" />
      <el-table-column prop="status" label="状态" width="100" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.status==='1'" type="success" effect="dark">启用</el-tag>
          <el-tag v-else type="danger" effect="dark">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300">
        <template slot-scope="{row}">
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleVisible(true,'编辑',row)"
          >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="visible" @close="handleClose">
      <el-form ref="form" style="width:90%" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="按钮名称" prop="btnName">
          <el-input v-model="form.btnName" />
        </el-form-item>
        <el-form-item label="编码" prop="btnCode">
          <el-input v-model="form.btnCode" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="1">启用</el-radio>
            <el-radio label="0">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
          <el-button @click="handleVisible(false)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </VCard>
</template>
<script>
import { ApiMenuAddBtn, ApiMenuUpdateBtn, ApiMenuDeleteBtn, ApiGetMenuListBtn } from "@/api/sys/menu"
export default {
  props: {
    menuId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data: [],
      title: "",
      visible: false,
      loading: false,
      form: {
        btnName: "",
        btnCode: "",
        status: ""
      },
      rules: {
        btnName: [
          { required: true, message: '按钮名称为必填项', trigger: 'blur' }
        ],
        btnCode: [
          { required: true, message: '编码为必填项', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '状态为必填项', trigger: 'change' }
        ],
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          let payload = Object.assign({}, this.form, {
            menuId: this.menuId
          })
          if (this.title === "新增") {
            this.add(payload)
          } else {
            this.update(payload)
          }
        }
      });
    },
    handleVisible(visible, title, row) {
      if (row) {
        this.form = row
      }
      if (title) {
        this.title = title
      }
      this.visible = visible
    },
    handleClose() {
      this.$refs.form.resetFields()
    },
    handleCancel() {
      this.$emit("on-view", 'index')
    },
    handleDelete(id) {
      this.$confirm('确定将选择数据删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ApiMenuDeleteBtn({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
            this.getList()
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    add(payload) {
      ApiMenuAddBtn(payload).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.visible = false
          this.getList()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update(payload) {
      ApiMenuUpdateBtn(payload).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.visible = false
          this.getList()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getList() {
      ApiGetMenuListBtn({ menuId: this.menuId }).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>