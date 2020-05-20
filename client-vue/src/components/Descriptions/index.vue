<style lang="scss">
@import "./index.scss";
</style>
<template>
  <div class="descriptions">
    <div class="descriptions-header">
      <div class="descriptions-header-title">{{ title }}</div>
      <div class="descriptions-header-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="descriptions-view">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Descriptions",
  props: {
    title: {
      type: String,
      default: ""
    },
    bordered: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 3
    },
  },
};
</script>