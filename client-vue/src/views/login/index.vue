<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="login-page">
    <div class="container">
      <div class="container-left">Auth平台</div>
      <div class="container-right">
        <div class="title">登录</div>
        <el-form ref="form" :model="model">
          <el-form-item>
            <el-input v-model="model.username" prefix-icon="el-icon-user" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="model.password"
              prefix-icon="el-icon-lock"
              type="password"
              show-password
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox>记住账号</el-checkbox>
            <el-checkbox style="float:right">自动登录</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" style="width:100%" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { ApiLogin } from '@/api/login'
import { setCookie } from '@/utils/cookie'
import { setStorage } from '@/utils/storage'
export default {
  data() {
    return {
      model: {
        username: "admin",
        password: "123456"
      },
      loading: false
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const { msg, data, success, token } = await ApiLogin(this.model)
          this.loading = false
          if (success) {
            if (token) setCookie("token", token)
            setStorage("userInfo", data)
            this.$message({
              message: msg,
              type: 'success',
              onClose: () => this.$router.push("/dashboard")
            });
          } else {
            this.$message.error(msg)
          }
        }
      });
    }
  }
}
</script>