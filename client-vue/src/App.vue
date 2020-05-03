<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@mixin size {
  width: 100%;
  height: 100%;
}
html,
body {
  @include size;
  margin: 0;
  padding: 0;
}
#app {
  @include size;
  background-color: #f4f4f4;
}
</style>

