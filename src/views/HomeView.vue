<template>
  <div class="home">
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- 底部导航 -->
  
    <keep-alive>
    <mt-tabbar
      fixed
      v-model="selected"
      style="background: #363636; color: #eee"
    >
      <mt-tab-item id="index">
        首页
        <span class="iconfont icon-jiangbei" slot="icon"></span>
      </mt-tab-item>
      <mt-tab-item id="pic" >
        夜跑
        <span class="iconfont icon-fanshe" slot="icon"></span>
      </mt-tab-item>
      <mt-tab-item id="run" >
        <span class="iconfont icon-tuzi" slot="icon"></span>
      </mt-tab-item>
      <mt-tab-item id="shop" >
        商城
        <span class="iconfont icon-shouye" slot="icon"></span>
      </mt-tab-item>
      <mt-tab-item id="me" >
        我的
        <span class="iconfont icon-31wode" slot="icon"></span>
      </mt-tab-item>
    </mt-tabbar>
    </keep-alive>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tabSelected:,
      selected: "this.$route.path.split("/").pop()",
      // selected: "index",
    };
  },
  // activated() {
  //   // 将tabSelected改为路由地址末尾字符串     index   me
  //   this.selected = this.$route.path.split("/").pop();
  // },
  watch: {
    selected(newval, oldval) {
      console.log(newval);
      if (newval == this.$route.path.split("/").pop()) {
        return; //避免出现路由重复跳转的问题
      }
      if (newval == "index") {
        this.$router.push("/index");
      } else if (newval == "pic") {
        this.$router.push("/pic");
      } else if (newval == "me") {
        this.$router.push("/me");
      } else if (newval == "run") {
        this.$router.push("/myqupao");
      } else if (newval == "shop") {
        this.$router.push("/shop");
      }
    },
  },
};
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #363636;
  color: #eee;
}
.mint-tabbar > .mint-tab-item.is-selected > .mint-tab-item-icon > .iconfont {
  color: #f6c133;
}

/* 图标 */
.iconfont {
  font-size: 24px;
}
.icon-tuzi {
  font-size: 40px;
}
a {
  color: #eee;
}
</style>
