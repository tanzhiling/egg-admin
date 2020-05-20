<template>
  <div class="descriptions-item" :style="{width:100/column+'%'}">
    <span class="descriptions-item-label">{{ label }}</span>
    <span class="descriptions-item-content">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "DescriptionsItem",
  props: {
    label: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      column: 1,
    };
  },
  mounted() {
    this.column = this.$parent.column
  }
};
</script>
