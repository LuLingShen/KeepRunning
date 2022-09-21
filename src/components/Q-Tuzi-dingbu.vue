<template>
    <div>
          <div class="Q-dingbu" style="background-color:#363636 !important">
            <!-- 趣跑顶部栏 -->
            <mt-header class="Q-tou" fixed title="跑步"  >
                <div slot="right">
                    <router-link to="" class=" iconfont icon-shezhi" />
                </div>
            </mt-header>
          <mt-header></mt-header>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
:deep{
    .mint-header{
        background-color: #363636;
    }
}
.Q-dingbu{
    width: 100vw;
    height: 5vh;
}
// 头
.Q-tou {
    background-color: rgb(58,57,51);
    height: 5vh;
    font-size: 20px;
}

.iconfont {
    font-size: 25px;
    color: white;
}
</style>