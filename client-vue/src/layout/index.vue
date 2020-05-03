<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="layout">
    <SiderMenu />
    <div class="layout-container">
      <HeaderView />
      <TagsView />
      <div class="padding-10">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SiderMenu from "./components/SiderMenu"
import HeaderView from "./components/HeaderView"
import TagsView from "./components/TagsView"
export default {
  name: 'Layout',
  components: {
    SiderMenu,
    HeaderView,
    TagsView
  }
}
</script>