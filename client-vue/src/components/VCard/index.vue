
<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="card" :class="'card-'+mode">
    <div class="card-header" :class="'card-header-'+mode">
      <div class="card-header-title">
        <template v-if="icon">
          <Icon
            v-if="icon==='back'"
            type="arrow-left"
            size="20"
            class="margin-right-10 cursor"
            @click="handleBack"
          />
          <Icon v-else :type="icon" size="20" class="margin-right-10 cursor" />
        </template>
        <span>{{ title }}</span>
        <slot name="title"></slot>
      </div>
      <div class="card-header-extra">
        <el-button
          v-if="$slots.form"
          type="primary"
          icon="md-search"
          @click="handleExpand"
        >{{ !expand?'查询':'隐藏' }}</el-button>
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="card-content">
      <div v-show="expand" ref="customForm" class="card-content-form">
        <slot name="form"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    // 模式 table模式 detail模式
    mode: {
      type: String,
      default: "detail"
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: Boolean,
      default: true,
    },
    page: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      expand: true, // 展开搜索
    }
  },
  computed: {
    clientHeight: function () {
      return this.mode === "table" ? document.body.clientHeight : 0
    },
    layoutHeaderHeight: function () {
      return this.mode === "table" ? 60 : 0
    },
    tagsViewHeight: function () {
      return this.mode === "table" ? 50 : 0
    },
  },
  mounted() {
    if (this.mode === "table") {
      this.initTableHeight()
    }
  },
  methods: {
    // 初始化Table高度
    initTableHeight() {
      let customForm = this.$refs.customForm ? this.$refs.customForm.offsetHeight : 0;
      let page = this.page ? 42 : 0;
      let padding = 101;
      let height = this.clientHeight - this.layoutHeaderHeight - this.tagsViewHeight - customForm - page - padding
      this.$emit("on-table-height-change", height)
    },
    // 展开
    handleExpand() {
      this.expand = !this.expand
      if (this.mode === "table") {
        this.$nextTick(() => {
          this.initTableHeight()
        })
      }

    },
    handleBack() {
      this.$emit("on-back")
    },
  }
}
</script>