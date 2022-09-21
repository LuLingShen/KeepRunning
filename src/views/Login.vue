<template>
    <!-- 登陆页面 -->
    <div id="body">
        <mt-header title="登录" style="background:transparent">
            <mt-button icon="back" slot="left"></mt-button>
            <router-link to="/register" slot="right">新用户</router-link>
        </mt-header>
        <p>手机号登录/注册</p>
        <mt-field label="用户名" type="text" placeholder="请输入用户名" v-model="name" @blur.native.capture="checkName"
            :state="nameState" style="background:transparent;color: white;"></mt-field>
        <mt-field label="密码" type="password" placeholder="请输入密码" v-model="pwd" @blur.native.capture="checkPwd"
            style="background:transparent;color: white;"></mt-field>
        <mt-button type="primary" size="large" @click="checkForm">马上登录</mt-button>
        <!-- <input class="put" type="radio">我已阅读并同意协议《用户协议》《隐私政策》 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            nameState: '',
            pwd: '',
            pwdState: '',
        }
    },
    methods: {
          checkForm(){
        if(this.checkName()&&this.checkPwd()){
          console.log('登录成功');
          this.$router.push('/index')
          //发送http请求，执行注册任务
        //   let params = `username=${this.uname}&password=${this.upwd}`
        //   this.axios.post('/login',params).then(res=>{
        //   console.log('登录结束',res);
        //   if(res.data.code==200){
        //     //登录成功
        //     //访问Vuex的updateUserInfo方法，修改登录用户信息
        //     this.$store.commit('updateUserInfo',this.uname)
        //     this.$router.push('/')
        //   }else{
        //     //登录失败
        //     this.$messagebox({
        //       title:'提示',
        //       message:'账号或密码输入错误'
        //     })
        //   }
        // })
        // }else{
        //   console.log('登录失败，请重新登录');
        }
      },

        checkPwd() {
            let exp = /^\d{6}$/;
            if (exp.test(this.pwd)) {
                this.pwdState = 'success'
                return true
            } else {
                this.pwdState = 'error'
                return false
            }
        },

        checkName() {
            let exp = /^\w{3,10}$/;
            if (exp.test(this.name)) {
                this.nameState = 'success'
                return true
            } else {
                this.nameState = 'error'
                return false
            }
        }
    },


}

</script>


<style lang="scss" scoped>
:deep{
.mint-button--large {
    background-color: orange;
}
.mint-field-core {
    background-color: transparent;
}
.mint-cell {
    margin-top: 20px;
    padding: 0 5px;
    width: 90vw;
    border-radius: 10px;
    margin-left: 5vw;
    border: 1px solid white;
    /* background-color: transparent; */
    height: 3vh;
}
.mint-button--large {
    margin-top: 5vw;
    width: 90vw;
    margin-left: 5vw;
    border-radius: 10px;
}
}

#body {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/5.png);
    background-size: cover;
    position: absolute;
    z-index: -1;
}


p {
    font-weight: 700;
    margin-left: -160px;
    margin-top: 170px;
}

</style>