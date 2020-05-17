<style lang="scss" scoped>
@import "./SiderMenu.scss";
</style>
<template>
  <div class="layout-sider">
    <div class="title">
      <div v-if="collapsed" class="expand">A</div>
      <div v-else class="notexpand">Auth平台</div>
    </div>
    <el-menu
      class="layout-sider-menu"
      :background-color="theme.menuBg"
      :text-color="theme.menuText"
      router
    >
      <el-submenu v-for="item in menu" :key="item.id" :index="item.id">
        <template slot="title">
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.id"
          :route="{name:subItem.name}"
          :index="subItem.id"
        >{{ subItem.title }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import theme from '@/styles/theme.scss'
import menu from "./menu"
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu
    }
  },
  computed: {
    theme: function () {
      return theme
    }
  },
}
</script>