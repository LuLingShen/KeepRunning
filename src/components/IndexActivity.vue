<template>
    <div class="index-activity">

            <mt-navbar v-model="selected">
                <mt-tab-item id="6">活动</mt-tab-item>
                <mt-tab-item id="7">发现</mt-tab-item>
                <mt-tab-item id="8">跑友</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->

            <!-- 活动 -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="6" v-show="true">
                    <mt-cell id="rongqi">
                        <div style="display:flex;">
                            <div
                                style=" width: 46vw;height: 35vh;margin: 2% 2% 2% 1%; background:#363B41;border-radius: 8px;"
                                @click="$router.push('/indexactivitydetial')"
                                >
                                <img src="跑步3.webp"
                                    style="display:block;width:100%;height:80%;border-top-right-radius: 8px; border-top-left-radius: 8px;"
                                    alt="">
                                <div>
                                    <span
                                        style="display:block;color:#CBCED6;font-size:13px;margin: 4% 0 0 4%;">蹦巴趣行节</span>
                                    <div style="display:flex;">
                                        <img src="../assets/18.png"
                                            style="display:block;width: 5vw;border-radius: 1px;border-radius: 50%;margin: 2% 4% 0 4%;"
                                            alt="">
                                        <span
                                            style="display:block;font-size: 13px;color: #9DA2A6;margin-top: 4%;">趣跑团平台</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                style=" width: 46vw;height: 35vh;margin: 2% 4% 2% 1%;background:#363B41;border-radius: 8px;">
                                <img src="/跑步4.webp"
                                    style="display:block;width:100%;height:80%;border-top-right-radius: 8px; border-top-left-radius: 8px;"
                                    alt="">
                                <div>
                                    <span
                                        style="display:block;color:#CBCED6;font-size:13px;margin: 4% 0 0 4%;">蹦巴趣行节</span>
                                    <div style="display:flex;">
                                        <img src="../assets/18.png"
                                            style="display:block;width: 5vw;border-radius: 1px;border-radius: 50%;margin: 2% 4% 0 4%;"
                                            alt="">
                                        <span
                                            style="display:block;font-size: 13px;color: #9DA2A6;margin-top: 4%;">趣跑团平台</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </mt-cell>
                </mt-tab-container-item>

                <!-- 发现 -->
                <mt-tab-container-item id="7">
                    <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell> -->
                    <mt-cell v-for="n in 1" style="width:100vw;height:45vh">
                    <img src="../assets/22.png" style="width:30vw;display:inline-block;margin-top:6vh;margin-right: 15vw;" alt="">
                    <p style="margin-top:20vw;margin-right:2vw">这个人很懒什么也没发现</p>
                    </mt-cell>
                </mt-tab-container-item>

                <!-- 跑友 -->
                     <mt-tab-container-item id="8">
                    <mt-cell id="rongqi">
                        <div style="display:flex;">
                            <div
                                style=" width: 46vw;height: 35vh;margin: 2% 2% 2% 1%; background:#363B41;border-radius: 8px;">
                                <img src="/跑步1.webp"
                                    style="display:block;width:100%;height:80%;border-top-right-radius: 8px; border-top-left-radius: 8px;"
                                    alt="">
                                <div>
                                    <span
                                        style="display:block;color:#CBCED6;font-size:13px;margin: 4% 0 0 4%;">蹦巴趣行节</span>
                                    <div style="display:flex;">
                                        <img src="../assets/18.png"
                                            style="display:block;width: 5vw;border-radius: 1px;border-radius: 50%;margin: 2% 4% 0 4%;"
                                            alt="">
                                        <span
                                            style="display:block;font-size: 13px;color: #9DA2A6;margin-top: 4%;">趣跑团平台</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                style=" width: 46vw;height: 35vh;margin: 2% 4% 2% 1%;background:#363B41;border-radius: 8px;">
                                <img src="/跑步2.webp"
                                    style="display:block;width:100%;height:80%;border-top-right-radius: 8px; border-top-left-radius: 8px;"
                                    alt="">
                                <div>
                                    <span
                                        style="display:block;color:#CBCED6;font-size:13px;margin: 4% 0 0 4%;">蹦巴趣行节</span>
                                    <div style="display:flex;">
                                        <img src="../assets/18.png"
                                            style="display:block;width: 5vw;border-radius: 1px;border-radius: 50%;margin: 2% 4% 0 4%;"
                                            alt="">
                                        <span
                                            style="display:block;font-size: 13px;color: #9DA2A6;margin-top: 4%;">趣跑团平台</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    
</template>

<script>
    export default {
        data() {
            return {
                selected: "1",
            }
        },
        
    }
</script>

<style lang="scss" scoped>
// 包裹图片的盒子的背景色
.mint-cell:last-child {
    background-color: #3A3934;
    margin: 0;
    padding: 0;
}
// 活动，发现，跑友的背景色
.mint-navbar{
    background-color: #3A3934;
}
// 活动，发现，跑友字体的颜色
.mint-tab-item-label{
    color: white !important;
}


</style>