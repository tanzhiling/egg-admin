<template>
  <VCard icon="edit-outline" :title="title">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-col :span="12">
        <el-form-item label="登录账号" prop="username">
          <el-input v-model="form.username" :disabled="form.id?true:false" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="头像" prop="avatar">
          <el-input v-model="form.avatar" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
            <el-radio label="0">保密</el-radio>
          </el-radio-group>
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
// import { ApiGetOfficeTree } from "@/api/sys/office"
export default {
  data() {
    return {
      form: {
        username: '',
        nickname: "",
        avatar: "",
        email: "",
        phone: "",
        sex: "",
      },
      title: "新增用户",
      tree: [],
      rules: {
        username: [
          { required: true, message: '登录账号为必填项', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '昵称为必填项', trigger: 'blur' },
        ],
      },
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      this.title = "编辑用户"
      this.getUserDetial(id)
    }
    this.getTree()
  },
  methods: {
    handleNodeClick(data) {
      this.last = data
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.form.id) {
            this.add()
          } else {
            this.update()
          }
        }
      });
    },
    add() {
      ApiUserAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update() {
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
          const { username, nickname, password, email, mobile, sex, avatar, phone, sign, userType, remarks, id } = res.data
          this.form = { username, nickname, password, email, mobile, sex, avatar, phone, sign, userType, remarks, id }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getTree() {
      // ApiGetOfficeTree().then(res => {
      //   if (res.success) {
      //     this.tree = res.data
      //   }
      // })
    },
  }
}
</script>