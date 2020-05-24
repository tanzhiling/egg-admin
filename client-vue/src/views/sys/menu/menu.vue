<template>
  <transition name="fade-transform" mode="out-in">
    <Index v-if="view==='index'" @on-view="handleView" />
  </transition>
</template>
<script>
import Index from "./index"
export default {
  components: {
    Index,
  },
  data() {
    return {
      view: "index",
      id: ""
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