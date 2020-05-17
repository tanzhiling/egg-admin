<style lang="scss">
@import "./TagsView.scss";
</style>
<template>
  <div class="layout-tags">
    <el-tabs :value="activityTab" class="tabs" @tab-click="handleTab" @tab-remove="handleRemove">
      <el-tab-pane
        v-for="item in tagsList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="activityTab===item.name"
      />
    </el-tabs>
    <ul
      v-show="visible"
      :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}"
      class="contextmenu"
      @mouseleave="handleLeave"
    >
      <li @click="handleColse('other')">关闭其他</li>
      <li @click="handleColse('all')">关闭所有</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      closeItem: null,
    }
  },
  computed: {
    tagsList: function () {
      return this.$store.state.app.tagsList
    },
    activityTab: function () {
      return this.$store.state.app.activityTab
    },
  },
  watch: {
    $route(to) {
      this.$store.commit("app/setTags", {
        title: to.meta && to.meta.title ? to.meta.title : "",
        query: to.query,
        path: to.path,
        name: to.name,
      })
    }
  },
  mounted() {
    this.$store.commit("app/setActivityTab", this.$route)
    this.$store.commit('app/getTagsList')
  },
  methods: {
    handleRemove(name) {
      this.$store.commit("app/removeTags", name)
      this.$router.back()
    },
    handleTab({ name }) {
      let route = this.tagsList.find(item => item.name === name)
      this.$router.replace({ name: route.name, query: route.query })
    },
    // 关闭操作
    handleColse(type) {
      if (type === 'other') {
        this.$store.commit("app/closeTagsList", this.closeItem)
      } else {
        this.$store.commit("app/closeTagsList")
      }
    },
    handleLeave() {
      this.visible = false
    },
    contextMenu(e, item) {
      e.stopPropagation()
      e.preventDefault();
      this.visible = true
      this.closeItem = item
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
  }
}
</script>