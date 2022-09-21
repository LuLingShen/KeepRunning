<template>
  <div class="body">
    <mt-header
      title="设置"
      style="background: #363636; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
    </mt-header>
    <mt-cell title="账号与安全" is-link></mt-cell>
    <mt-cell title="关于我们" is-link></mt-cell>
    <mt-cell title="用户协议" is-link></mt-cell>
    <mt-cell title="隐私政策" is-link></mt-cell>
    <mt-cell title="建议和反馈" is-link class="xadvice"></mt-cell>
    <div class="xlogo">
      <span>版本 1.0.0</span>
      <span>Copyright &copy; 2021</span>
      <span>夜跑有限公司</span>
    </div>
    <div class="xfooter">
      <router-link to="/login">退出登录</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body {
  background-color: #363636;
  height: 100vh;
  .xlogo {
    margin-top: 10vw;
    text-align: center;
    color: #868686;
    font-size: 0.8em;
    span {
      margin-bottom: 1.5vw;
      display: block;
    }
  }
  .xfooter {
    background: #f8be1a;
    height: 10vw;
    text-align: center;
    line-height: 10vw;
    width: 95vw;
    margin-left: 2.5vw;
    border-radius: 7px;
    position: fixed;
    bottom: 2vw;
    a {
      font-size: 0.9em;
      color: #fff;
    }
  }
}
:deep {
  .mint-cell {
    background-color: #363636;
    color: #fff;
  }
  .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid #5b5b5b;
  }
  .mint-cell:last-child {
    background-image: none;
  }
  .xadvice .mint-cell-wrapper {
    border-bottom: 0px;
  }
}
</style>