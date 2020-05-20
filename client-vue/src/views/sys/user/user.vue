<template>
  <transition name="fade-transform" mode="out-in">
    <Index v-if="view==='index'" @on-view="handleView" />
    <Info v-else :id="id" :view="view" @on-view="handleView" />
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
      id: "",
    }
  },
  methods: {
    handleView(view, id) {
      this.view = view
      this.id = id
    }
  }
}
</script>