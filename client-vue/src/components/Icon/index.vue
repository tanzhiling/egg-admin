<template>
  <i :class="'el-icon-'+type" :style="{color,'font-size':size+'px'}" @click="handleClick"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#606266"
    },
    size: {
      type: String,
      default: "16"
    },
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
}
</script>