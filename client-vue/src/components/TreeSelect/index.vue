<style lang="scss">
.select-tree {
  font-weight: normal !important;
  padding: 0;
}
</style>
<template>
  <el-select v-model="last.officeName">
    <el-option
      class="select-tree"
      :value="last.officeCode"
      :label="last.officeName"
      style="height:200px;overflow:auto;background:#fff"
    >
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    </el-option>
  </el-select>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    defaultProps: {
      type: Object,
      default: () => { }
    },
    lable: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>