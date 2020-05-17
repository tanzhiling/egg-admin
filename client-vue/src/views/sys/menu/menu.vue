<template>
  <transition name="fade-transform" mode="out-in">
    <Index v-if="view==='index'" @on-view="handleView" />
    <Info v-else :view="view" @on-view="handleView" />
  </transition>
</template>
<script>
import Index from "./index"
import Info from "./info"
export default {
  components: {
    Index,
    Info
  },
  data() {
    return {
      view: "index",
      params: {}
    }
  },
  methods: {
    handleView(view, params) {
      this.view = view
      this.params = params
    }
  }
}
</script>