<template>
    <div class="body">
        <QTuziDingbu/>
        <!-- 天气 -->
        <q-tianqi/>
        <!-- 计量千米 -->
        <QKm/>
        <!--  -->
        <!-- 左边兔子 -->
        <q-tuzi-zuo/>
        <!-- 底部 -->
        <home-view/>
    </div>
</template>

<script>
import QTuziDingbu from '@/components/Q-Tuzi-dingbu.vue';
import QTianqi from '@/components/Q-Tianqi.vue';
import QKm from '@/components/Q-km.vue';
import QTuziZuo from '@/components/Q-tuzi-zuo.vue';
import HomeView from './HomeView.vue';

export default {
  components: { QTuziDingbu, QTianqi, QKm, QTuziZuo, HomeView },

}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}

.body {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/5.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
}


</style>