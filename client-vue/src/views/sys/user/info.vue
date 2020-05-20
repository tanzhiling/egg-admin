<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" label-width="100px" :model="form">
      <Descriptions title="基本信息">
        <el-row type="flex" style="flex-wrap:wrap;">
          <el-col :span="12">
            <el-form-item label="所属部门" prop="deptId">
              <el-input v-model="form.deptId" :disabled="form.id?true:false" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属角色" prop="roleId">
              <el-input v-model="form.roleId" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登录账号" prop="username">
              <el-input v-model="form.username" :disabled="form.id?true:false" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户昵称" prop="nickname">
              <el-input v-model="form.nickname" style="width:300px" />
            </el-form-item>
          </el-col>
        </el-row>
      </Descriptions>
      <el-divider />
      <Descriptions title="详细信息">
        <el-row type="flex" style="flex-wrap:wrap;">
          <el-col :span="12">
            <el-form-item label="所在岗位" prop="postId">
              <el-input v-model="form.postId" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户姓名" prop="realName">
              <el-input v-model="form.realName" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="form.phone" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电子邮箱" prop="email">
              <el-input v-model="form.email" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="form.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
                <el-radio label="0">保密</el-radio>
              </el-radio-group>
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
          <el-col :span="24">
            <el-form-item label="用户生日" prop="birthday">
              <el-date-picker v-model="form.birthday" placeholder="选择日期" style="width:300px" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="头像">
              <UploadImg
                action="/blade-base/upload/avatar"
                :default-img="form.avatar"
                :disabled="auth.readonly"
                @on-change="handleImgChange"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </Descriptions>
      <el-form-item v-if="!auth.readonly" label=" ">
        <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </VCard>
</template>
<script>
import { ApiUserAdd, ApiGetUserDetail, ApiUserUpdate, ApiGetDeptTree } from "@/api/sys/user"
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
        id: "",
        username: '',
        nickname: "",
        realName: "",
        avatar: "",
        email: "",
        phone: "",
        birthday: "",
        sex: "",
        roleId: "",
        deptId: "",
        postId: "",
        status: ""
      },
      tree: [],
      rules: {
        username: [
          { required: true, message: '登录账号为必填项', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '昵称为必填项', trigger: 'blur' },
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
      this.getDetail(this.id)
    }
  },
  methods: {
    handleCancel() {
      this.$emit("on-view", 'index')
    },
    handleImgChange(data) {
      this.form.avatar = data
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
    add() {
      ApiUserAdd(this.form).then(res => {
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
      ApiUserUpdate(this.form).then(res => {
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
      ApiGetUserDetail({ id }).then(res => {
        if (res.success) {
          const { username, nickname, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status } = res.data
          this.form = { id, username, nickname, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getTree(id) {
      ApiGetDeptTree({ id }).then(res => {
        if (res.success) {
          console.log(res.data)
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>