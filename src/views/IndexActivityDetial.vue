<template>
    <div id="body">
        <!--1. 顶部导航栏 -->
        <mt-header fixed title="活动详情" style="background:#393833">
            <div slot="left">
                <mt-button icon="back" slot="left"></mt-button>
            </div>
            <div slot="right" style="margin-left:5vw" >
                <van-cell style="background:#393833;width:21vw;height: 6vh;"  @click="showShare = true"><van-icon name="share-o" />分享</van-cell>
                <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />

            </div>
        </mt-header>
        <!-- 大图片 -->
        <div>
            <img src="../assets/20.webp" alt="" style="display: block; height:40vh;width:100vw">
        </div>

        <!-- logo图片 -->
        <div style="position:relative">
            <img src="../assets/18.png" alt=""
                style="display: inline-block; border-radius: 50%;width: 20vw;position: absolute;top:-5vh;left:2vw">
            <span style="display:inline-block;margin-left:25vw;margin-top:1.5vh;font-size: 15px;color: #F2F0F1;">趣跑团平台</span>
        </div>

        <!-- 蹦巴趣行节 -->
        <div style="margin-top:0vh;">
            <div style="display:flex">
                <p style="color:#F2F0F1">蹦巴趣行节</p>
                <span
                    style="display:block;margin-left: 2vw;margin-top: 1.8vh;text-align: center; font-size: 8px;width:5vh;height: 2.5vh; border:1px solid orange;color: orange;">寻宝</span>
            </div>

            <span style="display: inline-block; font-size:14px;margin-top: 0.5vh;color: #95907E;">"工会寻宝-蹦巴
                趣行节"是青羊区总工会和非遗博览园联合趣跑团打造的趣味活动，活动期间 散步，跑步就能获得数...</span>

        </div>

        <!-- 报名时间 -->
        <div style="margin-top:3vh;">
            <span style="display:block;color: #95907E;">报名时间: 2022/07/15 00:00-10/28 00:00</span>
            <span style="display:block;margin-top: 1vh;color: #95907E;">活动时间: 2022/07/15 00:00-10/28 00:00</span>
            <span style="display:block;margin-top: 1vh;color: #95907E;">活动已报名: 14/10000</span>
            <span style="display:block;margin-top: 1vh;color: #95907E;"> 当前活动可获取920个宝箱 >></span>

        </div>

        <!-- 赛道 -->
        <div style="margin-top:2vh">
            <!-- 点击活动赛道，开始跑步吧 -->
            <div style="display:flex">
                <div style="font-size:14px;color: #DAB041;">点击活动赛道，开始跑步吧!</div>
                <div style="font-size:14px;margin-left: 30vw;color: #B9B8B2;">查看更多 >></div>
            </div>

            <!-- 赛道地图 -->
            <div>
                <img src="/8.png" style="width:100%" alt="">
                 <img src="/8.png" style="width:100%" alt="">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
        };
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
    },

}
</script>

<style lang="scss" scoped>
// 顶部分享的字体颜色
.van-cell__value--alone{
    color: white;
}
#body{
    background-color: #363636;
}
</style>