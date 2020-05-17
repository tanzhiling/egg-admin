<style lang="scss" scoped>
@import "./HeaderView.scss";
</style>
<template>
  <div class="layout-header">
    <div class="left"></div>
    <div class="right">
      <div class="lock right-item">
        <Icon type="lock" size="24" class="cursor" />
      </div>
      <div class="full right-item">
        <Icon type="full-screen" size="24" class="cursor" />
      </div>
      <div class="notice right-item">
        <Icon type="message-solid" size="24" class="cursor" />
      </div>
      <div class="user cursor right-item">
        <el-dropdown @command="handleDropDown">
          <div class="el-dropdown-link">
            <el-avatar icon="el-icon-user-solid" class="margin-right-5" />
            {{ userInfo.nickname }}
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo: function () {
      return this.$store.getters.userInfo
    },
  },
  methods: {
    handleDropDown(name) {
      if (name === "logout") {
        this.$store.dispatch("user/logout")
      }
    }
  }
}
</script>