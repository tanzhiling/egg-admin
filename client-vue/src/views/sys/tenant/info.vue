<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="租户编码" prop="tenantId">
            <el-input v-model="form.tenantId" style="width:300px" :disabled="auth.disabled" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="租户名称" prop="tenantName">
            <el-input v-model="form.tenantName" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="域名地址" prop="domain">
            <el-input v-model="form.domain" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="系统背景" prop="backgroundUrl">
            <el-input v-model="form.backgroundUrl" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="linkman">
            <el-input v-model="form.linkman" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话" prop="contactNumber">
            <el-input v-model="form.contactNumber" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="地址" prop="address">
            <el-input
              v-model="form.address"
              style="width:900px"
              :autosize="{ minRows: 3, maxRows: 6}"
              type="textarea"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账号额度" prop="accountNumber">
            <el-input v-model="form.accountNumber" style="width:300px" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到期时间" prop="expireTime">
            <el-date-picker
              v-model="form.expireTime"
              type="datetime"
              placeholder="选择日期"
              style="width:300px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="状态" prop="status">
            <el-radio-group v-model="form.status">
              <el-radio label="1">启用</el-radio>
              <el-radio label="0">停用</el-radio>
            </el-radio-group>
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
import { ApiTenantAdd, ApiTenantUpdate, ApiGetTenantDetail } from "@/api/sys/tenant"
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
      form: {
        tenantId: "",
        tenantName: "",
        domain: "",
        backgroundUrl: "",
        linkman: "",
        contactNumber: "",
        address: "",
        accountNumber: "",
        expireTime: "",
        status: ""
      },
      rules: {
        tenantId: [
          { required: true, message: '租户编码为必填项', trigger: 'blur' },
        ],
        tenantName: [
          { required: true, message: '租户名称为必填项', trigger: 'blur' },
        ],
        linkman: [
          { required: true, message: '联系人为必填项', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '状态为必填项', trigger: 'blur' },
        ],
        expireTime: [
          { required: true, message: '到期时间为必填项', trigger: 'blur' },
        ],
      },
      loading: false,
    }
  },
  computed: {
    auth: function () {
      let title = "查看", readonly = true, disabled = true
      if (this.view === "add") {
        title = "新增"
        readonly = false
        disabled = false
      } else if (this.view === "edit") {
        title = "编辑"
        readonly = false
      }
      return { title, readonly, disabled }
    },
  },
  mounted() {
    if (this.id) {
      this.getDetail({ id: this.id })
    }
  },
  methods: {
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
      ApiTenantAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.$emit("on-view", 'index')
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update() {
      ApiTenantUpdate(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.$emit("on-view", 'index')
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getDetail(payload) {
      ApiGetTenantDetail(payload).then(res => {
        if (res.success) {
          const { id, tenantId, tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, status } = res.data
          this.form = { id, tenantId, tenantName, domain, backgroundUrl, linkman, contactNumber, address, accountNumber, expireTime, status }
        }
      })
    }
  }
}
</script>