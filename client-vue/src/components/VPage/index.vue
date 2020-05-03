<template>
  <el-pagination
    background
    :current-page="current"
    :page-sizes="pageSizeOpts"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handlePageSize"
    @current-change="handlePage"
  />
</template>
<script>
export default {
  name: "VPage",
  props: {
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    pageSizeOpts: {
      type: Array,
      default: () => [10, 20, 50, 100]
    }
  },
  methods: {
    handlePage(current) {
      this.$emit("on-page", current)
    },
    handlePageSize(size) {
      this.$emit("on-page-size", size)
    }
  }
}
</script>