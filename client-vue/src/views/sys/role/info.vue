<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" :model="form" label-width="100px">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="form.roleName" style="width:300px" />
      </el-form-item>
      <el-form-item label="所属租户" prop="tenantId">
        <el-select v-model="form.tenantId" style="width:300px">
          <el-option
            v-for="item in tenantDict"
            :key="item.tenantId"
            :value="item.tenantId"
            :label="item.tenantName"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="角色别名" prop="roleAlias">
        <el-input v-model="form.roleAlias" style="width:300px" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.sort" style="width:300px" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="1">启用</el-radio>
          <el-radio label="0">停用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="!auth.readonly" label=" ">
        <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </VCard>
</template>
<script>
import { ApiRoleAdd, ApiRoleUpdate, ApiGetRoleDetail } from "@/api/sys/role"
import { ApiGetTenantDict } from '@/api/sys/tenant'
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
        deptName: ""
      },
      form: {
        id: "",
        tenantId: "",
        roleName: "",
        sort: "",
        roleAlias: "",
        status: ""
      },
      rules: {
        roleName: [
          { required: true, message: '角色名称为必填项', trigger: 'blur' },
        ],
        tenantId: [
          { required: true, message: '所属租户为必填项', trigger: 'blur' },
        ],
        sort: [
          { required: true, message: '排序为必填项', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '状态为必填项', trigger: 'blur' },
        ],
      },
      loading: false,
      tenantDict:[]
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
    this.getTenantDict()
    if (this.id) {
      this.getDetail(this.id)
    }
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
      ApiRoleAdd(this.form).then(res => {
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
      ApiRoleUpdate(this.form).then(res => {
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
      ApiGetRoleDetail({ id }).then(res => {
        if (res.success) {
          const { tenantId, roleName, sort, roleAlias, status } = res.data
          this.form = { tenantId, roleName, sort, roleAlias, id, status }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getTenantDict() {
      ApiGetTenantDict().then(res => {
        if (res.success) {
          this.tenantDict = res.data
        }
      })
    },
  }
}
</script>