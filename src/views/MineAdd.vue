<template>
  <div class="body">
    <mt-header
      title="我的信息"
      style="background: #363636; font-size: 1.1em; height: 13vw"
    >
      <router-link
        to="/mineaddress"
        slot="left"
        class="iconfont icon-fanhuijiantou"
      >
      </router-link>
    </mt-header>
    <mt-field
      label="收货人"
      placeholder="请填写收货人姓名"
      v-model="username"
    ></mt-field>
    <mt-field
      label="手机号码"
      placeholder="请输入你的手机号码"
      type="phone"
      v-model="phone"
    ></mt-field>
    <mt-field
      label="所在地址"
      placeholder="省市区县、乡镇等"
      type="area"
      v-model="area"
    >
      <van-cell
        is-link
        @click="showPopup"
        v-model="carmodel"
        style="background: #393a32"
      ></van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-area
          :area-list="areaList"
          :columns-num="3"
          ref="myArea"
          title=""
          @change="onChange"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
    </mt-field>
    <div class="xaddress">
      <div>详细地址</div>
      <div>
        <textarea
          name="test"
          id=""
          cols="43"
          rows="6"
          placeholder="街道、楼牌号等"
          v-model="introduction"
        ></textarea>
      </div>
    </div>
    <div class="xfooter">
      <router-link to="/mineadd">保存</router-link>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      areaList,
      show: false,
      carmodel: "",
      username: "",
      phone: "",
      area: "",
      introduction: "",
    };
  },
  //   watch: {
  //     $route() {
  //       this.showPopup();
  //     },
  //   },

  methods: {
    // 弹出层显示
    showPopup() {
      // this.$router.push("/minearea")
      this.show = true;
    },
    //value=0改变省，1改变市，2改变区
    onChange(picker, index, value) {
      let val = picker.getValues();
      console.log(val); //查看打印
      let areaName = "";
      for (var i = 0; i < scriptval.length; i++) {
        areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
      }
      this.carmodel = areaName;
    },
    //确定选择城市
    onConfirm(val) {
      console.log(val[0].name + "," + val[1].name);
      this.show = false; //关闭弹框
    },
    //取消选中城市
    onCancel() {
      this.show = false;
      this.$refs.myArea.reset(); // 重置城市列表
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: #363636;
  height: 100vh;

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
  .xaddress {
    background: #393a32;
    color: #fff;
    div:first-child {
      font-size: 1em;
      padding: 4vw 2vw;
    }
    div:nth-child(2) {
      padding-bottom: 3vw;
      textarea {
        margin-left: 2.5vw;
        background: #4d4e46;
        border: 0;
        border-radius: 5px;
      }
    }
  }
}
:deep {
  .mint-cell {
    background: #393a32;
    color: #fff;
  }
  .mint-field-core {
    background: #393a32;
  }
  .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid #808179;
  }
  .van-cell::after {
    border: none;
  }
}
</style>