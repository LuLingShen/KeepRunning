<template>
    <div id="body">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="创建跑团" left-arrow @click-left="onClickLeft" style="background:#363636;color:white;" />

        <!-- 上传头像 -->
        <van-uploader :after-read="afterRead" style="margin-left:37vw;margin-top:5vh;"></van-uploader>
        <span class="s1" style="display:block;position: absolute;">设置头像</span>

        <!-- 跑团名称 -->
        <div>
            <span style="display:inline-block;color: white;font-size: 14px;margin-left: 3vw;">跑团名称</span>
            <span style="display:inline-block;color: white;font-size: 14px; margin-left: 68vw;">{{ remnant }}/20字</span>
            <textarea v-model="userinput" placeholder="请输入跑团名称" maxlength="20" @input="descInput"
                style="background-color: #54534F; width:93vw;height:4vh;margin-left: 3vw;margin-top: 2vw;border-radius: 5px;"></textarea>
        </div>

        <!-- 跑团所在地区 -->
        <div>
            <span style="font-size: 14px;color: white; display:block;margin-left: 3vw;margin-top:2vh ;">跑团所在地区</span>
            <input v-model="city" is-link @click="showPopup" placeholder="省，市，区"
                style="width:93vw;height: 5vh;border-radius: 8px; margin-left:3vw;background-color: #54534F;color: white;">
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-area title="标题" :area-list="areaList" @confirm="queding" @cancel="quxiao">
                </van-area>
            </van-popup>
        </div>

        <!-- 详细地址 -->
        <div>
            <span style="font-size: 14px;color: white; display:block;margin-left: 3vw;margin-top: 2vh;">详细地址</span>
            <input type="text" v-model="detail" placeholder="请输入详细地址" style="width:93vw;height:5vh;border-radius:8px;background:#54534F; margin-left:3vw;">
        </div>

        <!-- 跑团标签 -->
        <div>
            <span
                style="font-size: 14px;color: white; display:block;margin-left: 3vw;margin-top: 2vh;">跑团标签(最多可选三个)</span>
            <van-checkbox-group v-model="result" :max="3"
                style="display:flex;flex-wrap: wrap;margin-left: 3vw;margin-top: 0.5vh;">
                <van-checkbox class="same" name="a">娱乐</van-checkbox>
                <van-checkbox class="same" name="b">天天跑</van-checkbox>
                <van-checkbox class="same" name="c">晨跑</van-checkbox>
                <van-checkbox class="same" name="d">夜跑</van-checkbox>
                <van-checkbox class="same" name="e">活跃度</van-checkbox>
                <van-checkbox class="same" name="f">女神多</van-checkbox>
                <van-checkbox class="same" name="g">欢乐多</van-checkbox>
                <van-checkbox class="same" name="h">慢摇团</van-checkbox>
                <van-checkbox class="same" name="i">帅哥团</van-checkbox>
                <van-checkbox class="same" name="j">大神多</van-checkbox>
                <van-checkbox class="same" name="k">逗逼多</van-checkbox>
            </van-checkbox-group>
        </div>

        <!-- 跑团成立时间 -->
        <div>
            <span style="display:block;margin-top: 2vh;margin-left: 3vw;color: white;font-size: 14px;">跑团成立时间</span>
            <input v-model="date" is-link @click="showPopup" placeholder="请选择历史跑团创建时间"
                style="width:93vw;height: 5vh;border-radius: 8px; margin-left:3vw;background-color: #54534F;color: white;">
            <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker v-model="currentDate" type="datetime" title="选择时间" :min-date="minDate"
                    :max-date="maxDate" @confirm="qd" @cancel="qx" />
            </van-popup>
        </div>

        <!-- 跑团介绍 -->
        <div>
            <span style="display:block;font-size:14px;margin-left: 3vw;color: white;margin-top: 3vh;">团队介绍</span>
            <div class="box" style="position:relative;">
                <textarea v-model="title" placeholder="简单介绍你的跑团叭~~~~"
                    style="width:93vw;height:10vh; margin-left:2.5vw;margin-top:1.5vh;background-color: #54534F;"></textarea>
                <span style="font-size:14px;color:white;position: absolute;top: -2.5vh;right:5vw">还可以输入{{
                        this.titleMaxLength - this.title.length
                }}</span>
            </div>
        </div>

        <!-- 创建跑团 -->
        <div>
            <button
                style="width:94vw;height:6vh;border-radius:9px;background-color: orange;color: white; margin-left:3vw;margin-top: 2vh;">创建跑团</button>

        </div>

    </div>
</template>



<script>
import { areaList } from '@vant/area-data';
export default {
    name: 'Box',
    data() {
        return {
            userinput: '',// 客户输入的内容
            result: [], //跑团标签
            title: '',  //跑团介绍
            titleMaxLength: 200,  //跑团介绍限制200字
            remnant: 20,
            show: false, //跑团所在地区弹出层数据绑定
            areaList,  //跑团所在地区省市区数据
            city: '',

            //跑团成立时间
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            date:'',
            moment:'',

            //详细地址
            detail:'',
        }
    },
    methods: {
        // 上传头像
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        //  顶部导航
        onClickLeft() {
            this.$router.push('/index')
        },
        // 跑团名称js代码
        descInput() {
            let txtVal = this.userinput.length;
            this.remnant = 20 - txtVal;
        },
        openPicker() {
            this.$refs.picker.open();
        },
        showPopup() {
            this.show = true;
        },
        queding(value) {
            this.city = value.map(item => item.name).join(' ')
            this.show = false
        },
        quxiao() {
            this.show = false
        },
        qd(value){
            // this.date=value,
            var moment = require('moment')
           this.date=moment(value).format('yyyy-MM-DD HH时')
            // console.log(value)

             this.show = false
        },
        qx(){
            this.show=false
        },
    },
    // 监听跑团名称
    watch: {
        userinput(curVal, oldVal) {
            if (curVal.length >= 20) {
                this.remnant = 0;
                this.userobjet = curVal.substring(0, 20);
            }
        },
        //文本框
        title() {
            if (this.title.length > this.titleMaxLength) {
                this.title = String(this.title).slice(0, this.titleMaxLength);
            }
        }
    },

}
</script>

<style lang="scss" scoped>
#body {
    background-color: #393833;
    // background-color: aquamarine;
}

// 设置头像字体
.s1 {
    font-size: 12px;
    background-color: #878787;
    width: 27vw;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: center;
    left: 37vw;
    top: 25vh;
}

// 复选框选项间距
.same {
    margin-right: 2vw;
    font-size: 14px;
    margin-top: 1.5vh;
}

:deep {

    // 顶部导航栏字体颜色
    .van-nav-bar__title {
        color: white;
    }

    // 顶部导航栏返回箭头颜色
    .van-icon:before {
        color: white;
    }

    // 相机样式
    .van-uploader__upload {
        width: 27vw;
        height: 15vh;
        background-color: #54534F;
        border-radius: 8px;
    }

    .van-checkbox__label {
        color: #767570;
    }

}
</style>