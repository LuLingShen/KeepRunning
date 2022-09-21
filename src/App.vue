<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      tabSelected: "index",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>