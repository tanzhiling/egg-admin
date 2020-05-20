<template>
  <VCard icon="back" :title="auth.title" @on-back="handleCancel">
    <el-form ref="form" :rules="rules" label-width="100px" :model="form">
      <Descriptions title="基本信息">
        <el-row type="flex" style="flex-wrap:wrap;">
          <el-col :span="12">
            <el-form-item label="所属部门" prop="deptId">
              <el-select v-model="form.deptId" style="width:300px">
                <el-option
                  class="select-tree"
                  :value="dept.deptId"
                  :label="dept.deptName"
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
            <el-form-item label="所属角色" prop="roleId">
              <el-select v-model="form.roleId" style="width:300px">
                <el-option
                  v-for="item in roleDict"
                  :key="item.roleId"
                  :value="item.roleId"
                  :label="item.roleName"
                />
              </el-select>
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
              <el-select v-model="form.postId" style="width:300px">
                <el-option
                  v-for="item in postDict"
                  :key="item.postId"
                  :value="item.postId"
                  :label="item.postName"
                />
              </el-select>
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
import { ApiUserAdd, ApiGetUserDetail, ApiUserUpdate } from "@/api/sys/user"
import { ApiGetDeptTree } from "@/api/sys/dept"
import { ApiGetRoleDict } from "@/api/sys/role"
import { ApiGetPostDict } from "@/api/sys/post"
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
      dept: {
        deptId: "",
        deptName: ""
      },
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
      rules: {
        username: [
          { required: true, message: '登录账号为必填项', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '昵称为必填项', trigger: 'blur' },
        ],
      },
      tree: [],
      defaultProps: {
        children: 'children',
        label: 'deptName'
      },
      loading: false,
      roleDict: [],
      postDict: []
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
    this.getTree('0').then(res => {
      if (res.success) {
        this.tree = res.data
      }
    })
    this.getRoleDict()
    this.getPostDict()
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
      this.dept = { deptId: data.id, deptName: data.deptName }
      this.form.deptId = data.id
    },
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
          const { username, nickname, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status, dept } = res.data
          this.form = { id, username, nickname, realName, avatar, email, phone, birthday, sex, roleId, deptId, postId, status }
          if (dept) {
            this.dept = dept
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getRoleDict() {
      ApiGetRoleDict().then(res => {
        if (res.success) {
          this.roleDict = res.data
        }
      })
    },
    getPostDict() {
      ApiGetPostDict().then(res => {
        if (res.success) {
          this.postDict = res.data
        }
      })
    },
    async getTree(id) {
      return await ApiGetDeptTree({ id })
    }
  }
}
</script>