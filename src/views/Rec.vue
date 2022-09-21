<template>
  <div>
    <div class="page">
      <div class="page-one">
        <div></div>
        <div></div>
      </div>
      <div class="page-one">
        <div></div>
        <div></div>
      </div>
      <div class="page-one">
        <div></div>
        <div></div>
      </div>
      <div class="page-one">
        <div></div>
        <div></div>
      </div>
      <div class="page-one">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      items:[
        {name:'推荐',id:1},
        {name:'口碑',id:2},
        {name:'动态',id:3},
        {name:'排行',id:4},
        {name:'视频',id:5}
      ],
    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.page{
  width: 355px;
  margin:0 auto;
}
.page .page-one{
  width: 355px;
  height: 100px;
//background-color: green;
  margin-left: 3px;
  margin-bottom: 2px;
  display: flex;
  align-items: flex-start;
}
.page .page-one>div:first-child{
  height: 100px;
  width: 230px;
  background-color: red;
}
.page .page-one>div:nth-child(2){
  width: 125px;
  height: 100px;
  background-color: yellow;
}

</style>