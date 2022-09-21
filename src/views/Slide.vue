<template>
  <div class="lateral-sliding">
    <div class="lateral-sliding-item" v-for="(item,index) in items" :key="index">
      <div class="each-img">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: 4
    }
  }
}
</script>

<style scoped>
.lateral-sliding {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.lateral-sliding-item {
  display: flex;
  margin-right: 8px;
  background-color: yellow;
}
.each-img {
  width: 150px;
  height: 88px;
}

</style>