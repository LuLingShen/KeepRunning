<template>
  <div class="body" v-if="data">
    <div v-for="item in data" :key="item.id">
      <mt-header
        title="编辑个人信息"
        style="background: #363636; font-size: 1.1em; height: 13vw"
      >
        <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
        </router-link>
        <router-link
          to=""
          slot="right"
          style="color: #f2c21b"
          @click.native="updateMsg"
          >确定
        </router-link>
      </mt-header>
      <div class="xpic">
        <img src="../assets/xtx.png" alt="" />
        <span>修改头像</span>
      </div>
      <mt-field label="昵称" placeholder="请输入昵称" v-model="item.nname">
      </mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type="phone"
        v-model="item.nphone"
      ></mt-field>
      <mt-field
        label="身高（cm）"
        type="number"
        v-model="item.nheight"
      ></mt-field>
      <mt-field
        label="体重（Kg）"
        type="number"
        v-model="item.nweight"
      ></mt-field>
      <mt-field
        label="所在地"
        placeholder="请选择所在地"
        type="area"
        v-model="item.addr"
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
      <mt-field label="性别" v-model="item.gender ? '男' : '女'"></mt-field>
      <mt-field
        label="生日"
        placeholder="xxxx/xx/xx"
        
        v-model="item.nbirth"
      ></mt-field>
      <div class="xaddress">
        <div>个性签名</div>
        <div>
          <textarea
            name="test"
            id=""
            cols="43"
            rows="6"
            placeholder="请输入你的个性签名"
            v-model="item.nps"
          ></textarea>
        </div>
      </div>
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
      rvalue: null,
      data: null,
    };
  },
  //   watch: {
  //     $route() {
  //       this.showPopup();
  //     },
  //   },
  mounted() {
    this.showMessage();
  },
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
    showMessage() {
      // let params = `nname=${this.username}`;
      this.axios.post("/nuser").then((res) => {
        console.log("用户表", res);
        this.data = res.data.results;
        // console.log(this.item);
      });
    },
    
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: #4d4e46;
  // height: 100vh;

  .xpic {
    width: 100vw;
    height: 40vw;
    background-color: #eee;
    text-align: center;
    background-color: #3d3d3d;

    img {
      display: block;
      width: 30vw;
      border-radius: 50%;
      margin: 0 auto;
      padding-top: 3vw;
    }
    span {
      // background-color: red;
      color: #d9d9da;
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