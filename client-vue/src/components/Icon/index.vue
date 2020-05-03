<template>
  <i :class="'el-icon-'+type" :style="{color,'font-size':size+'px'}"></i>
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
    }
  }
}
</script>