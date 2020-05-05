<template>
  <VCard icon="edit-outline" :title="title">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-col span="12">
        <el-form-item label="登录账号" prop="username">
          <el-input v-model="form.username" :disabled="form.username" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="头像" prop="avatar">
          <el-input v-model="form.avatar" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="form.mobile" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
            <el-radio label="0">保密</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="用户类型" prop="userType">
          <el-select v-model="form.userType" style="width:300px">
            <el-option label="一级会员" value="1" />
            <el-option label="普通用户" value="0" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="管理员类型" prop="mgrType">
          <el-radio-group v-model="form.mgrType">
            <el-radio label="2">二级管理员</el-radio>
            <el-radio label="1">系统管理员</el-radio>
            <el-radio label="0">非管理员</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="0">启用</el-radio>
            <el-radio label="2">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col span="24">
        <el-form-item label="个性签名" prop="sign">
          <el-input
            v-model="form.sign"
            style="width:500px"
            :autosize="{ minRows: 3, maxRows: 6}"
            type="textarea"
          />
        </el-form-item>
      </el-col>
      <el-col span="24">
        <el-form-item label="备注" prop="remarks">
          <el-input
            v-model="form.remarks"
            style="width:500px"
            :autosize="{ minRows: 3, maxRows: 6}"
            type="textarea"
          />
        </el-form-item>
      </el-col>
      <el-form-item label=" ">
        <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
        <el-button @click="$router.back()">取消</el-button>
      </el-form-item>
    </el-form>
  </VCard>
</template>
<script>
import { ApiUserAdd, ApiGetUserDetail, ApiUserUpdate } from "@/api/sys/user"
export default {
  data() {
    return {
      form: {
        username: '',
        nickname: "",
        avatar: "",
        email: "",
        mobile: "",
        phone: "",
        sex: "",
        userType: "",
        mgrType: "",
        status: "",
        remarks: "",
        id: ""
      },
      title: "新增用户",
      rules: {
        username: [
          { required: true, message: '登录账号为必填项', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '昵称为必填项', trigger: 'blur' },
        ],
        userType: [
          { required: true, message: '用户类型为必填项', trigger: 'change' },
        ],
        mgrType: [
          { required: true, message: '管理员类型为必填项', trigger: 'change' },
        ],
      }
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      this.title = "编辑用户"
      this.getUserDetial(id)
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.form.id) {
            this.userUpdate()
          } else {
            this.userUpdate()
          }
        }
      });
    },
    userAdd() {
      ApiUserAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    userUpdate() {
      ApiUserUpdate(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getUserDetial(id) {
      ApiGetUserDetail({ id }).then(res => {
        if (res.success) {
          const { username, nickname, password, email, mobile, sex, avatar, phone, sign, userType, mgrType, status, remarks, id } = res.data
          this.form = { username, nickname, password, email, mobile, sex, avatar, phone, sign, userType, mgrType, status, remarks, id }
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>