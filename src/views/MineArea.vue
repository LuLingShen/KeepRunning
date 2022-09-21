<template>
  <div class="body">
    <!-- <van-cell is-link @click="showPopup" v-model="carmodel"
      >选择需要显示的城市</van-cell
    >
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area
        :area-list="areaList"
        :columns-num="2"
        ref="myArea"
        title="标题"
        @change="onChange"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup> -->
    <van-area
      title="选择城市"
      :area-list="areaList"
      :columns-num="2"
      style="background: ; height: 100vh"
      @change="onChange"
      @confirm="onConfirm"
      @cancel="$router.back()"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      areaList,
    };
  },
  // data() {
  //   return {
  //     areaList,
  //     show: false,
  //     carmodel: "",
  //   };
  // },
  // watch: {
  //   $route() {
  //     this.showPopup();
  //   },
  // },
  // mounted() {
  //   this.showPopup();
  // },
  // methods: {
  //   // // 弹出层显示
  //   // showPopup() {
  //   //   // this.$router.push("/minearea")
  //   //   this.show = true;
  //   // },
  //   //value=0改变省，1改变市，2改变区
  //   onChange(picker, index, value) {
  //     let val = picker.getValues();
  //     console.log(val); //查看打印
  //     let areaName = "";
  //     for (var i = 0; i < scriptval.length; i++) {
  //       areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
  //     }
  //     this.carmodel = areaName;
  //   },
  //   //确定选择城市
  //   onConfirm(val) {
  //     console.log(val[0].name + "," + val[1].name);
  //     this.show = false; //关闭弹框
  //   },
  //   //取消选中城市
  //   onCancel() {
  //     this.show = false;
  //     this.$refs.myArea.reset(); // 重置城市列表

  //   },
  // },
};
</script>

<style lang="scss" scoped>
:deep {
  .van-picker__columns {
    height: 100vh !important;
  }
  .van-picker__frame {
    top: 20%;
  }
  .van-picker__frame {
    border-top: 1px solid #363636;
    border-bottom: 1px solid #363636;
    // background: #eee;
  }
  .van-picker__toolbar {
    background: #363636;
    color: #fff;
  }
  .van-picker__confirm {
    color: #576bd5;
  }
}
</style>