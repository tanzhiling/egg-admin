<template>
  <transition name="fade-transform" mode="out-in">
    <Index v-if="view==='index'" @on-view="handleView" />
    <Button v-if="view==='button'" :menu-id="id" @on-view="handleView" />
  </transition>
</template>
<script>
import Index from "./index"
import Button from "./button"
export default {
  components: {
    Index,
    Button
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