<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="机构名称" prop="deptName">
            <el-input v-model="form.deptName" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
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
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级机构" prop="parentId">
            <el-select v-model="form.parentId" style="width:300px">
              <el-option
                class="select-tree"
                :value="parent.id"
                :label="parent.deptName"
                style="height:200px;overflow:auto;background:#fff"
              >
                <el-tree
                  :data="tree"
                  lazy
                  :load="handleLoad"
                  :props="defaultProps"
                  @node-click="handleNodeClick"
                />
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="机构编码" prop="deptCode">
            <el-input v-model="form.deptCode" :disabled="form.id?true:false" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="机构全称" prop="fullName">
            <el-input v-model="form.fullName" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序号" prop="sort">
            <el-input v-model="form.sort" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="机构类型" prop="deptCategory">
            <Select v-model="form.deptCategory" dict-type="sys_office_type" />
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
import { ApiDeptAdd, ApiDeptUpdate, ApiGetDeptTree, ApiGetDeptDetail } from "@/api/sys/dept"
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
        deptCode: "",
        tenantId: "",
        deptName: "",
        parentId: "",
        fullName: "",
        deptCategory: "",
        status: "",
        remarks: "",
        sort: ""
      },
      tenantDict: [],
      rules: {
        deptCode: [
          { required: true, message: '机构代码为必填项', trigger: 'blur' },
        ],
        tenantId: [
          { required: true, message: '所属租户为必填项', trigger: 'blur' },
        ],
        deptName: [
          { required: true, message: '机构名称为必填项', trigger: 'blur' },
        ],
        fullName: [
          { required: true, message: '机构全称为必填项', trigger: 'blur' },
        ],
        sort: [
          { required: true, message: '排序为必填项', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '状态为必填项', trigger: 'blur' },
        ],
        deptCategory: [
          { required: true, message: '机构类型为必填项', trigger: 'change' },
        ],
      },
      tree: [],
      defaultProps: {
        children: 'children',
        label: 'deptName'
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
    this.getTenantDict()
    this.getTree('0').then(res => {
      if (res.success) {
        this.tree = res.data
      }
    })
    if (this.id) {
      this.getDetail(this.id)
    }
  },
  methods: {
    async handleLoad(node, resolve) {
      if (node.level === 0) {
        return resolve(this.tree)
      } else {
        const { data } = await this.getTree(node.data.id)
        return resolve(data)
      }
    },
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
      ApiDeptAdd(this.form).then(res => {
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
      ApiDeptUpdate(this.form).then(res => {
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
      ApiGetDeptDetail({ id }).then(res => {
        if (res.success) {
          const { deptName, parentId, tenantId, fullName, deptCategory, status, remarks, sort, parent } = res.data
          this.form = { deptCode: id, tenantId, deptName, parentId, fullName, deptCategory, status, remarks, sort, id }
          if (parent) {
            this.parent = parent
          }
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
    async getTree(id) {
      return await ApiGetDeptTree({ id })
    }
  }
}
</script>