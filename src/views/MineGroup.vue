<template>
  <div class="body">
    <mt-header title="加入跑团" style="background: #363636; height: 13vw">
      <div @click="$router.back()" slot="left" class="iconfont icon-fanhuijiantou">
      </div>
      <router-link to="/minearea" slot="right">
        <span>北京市</span>
        <span
          class="iconfont icon-shaixuan-xiajiantou"
          style="font-size: 25px; vertical-align: middle"
        ></span>
      </router-link>
    </mt-header>
    <van-search v-model="value" show-action placeholder="请输入关键词">
      <!-- @search="onSearch" -->
      <template #action>
        <div>搜索</div>
        <!-- @click="onSearch" -->
      </template>
    </van-search>
    <m-ine-groups></m-ine-groups>
  </div>
</template>

<script>
import MIneGroups from "@/components/MIneGroups.vue";
export default {
  components: { MIneGroups },
};
</script>

<style lang="scss" scoped>
.body {
  // height: 100%;
  background: #363636;
}

// 搜索框
:deep {
  .van-search {
    background: #4d4e46;
  }
  .van-search .van-cell,
  .van-search__content {
    background: #393a32;
  }
  .van-icon {
    color: #95968e;
  }
  .van-field__control {
    color: #95968e;
    text-align: center;
  }
  .van-search__action {
    color: #ecba1e;
  }
}
</style>
