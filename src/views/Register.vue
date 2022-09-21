<template>
    <!-- 注册页面 -->
    <div id="body">
        <mt-header title="注册" style="background:transparent;">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
        <p>手机号登录/注册</p>
        <mt-field label="用户名" type="text" placeholder="请输入用户名" v-model="name" @blur.native.capture="checkName" :state="nameState" style="background:transparent;color: white;"></mt-field>
        <mt-field label="密码" type="password" placeholder="请输入密码" v-model="pwd" @blur.native.capture="checkPwd" :state="pedState"  style="background:transparent;color: white;"></mt-field>
        <mt-field label="重复密码" type="text" placeholder="请重复输入密码" v-model="pwd2" @blur.native.capture="checkPwd2" :state="pwd2State" style="background:transparent;color: white;"></mt-field>
        <mt-button type="primary" size="large" @click="checkForm">快速注册</mt-button>
        <!-- <input class="put" type="radio">我已阅读并同意协议《用户协议》《隐私政策》 -->
    </div>
</template>

<script>
export default {
data() {
    return {
        name: '',//双向绑定：用户名
        nameState:'',//用户名输入框的状态
        pwd:'',//
        pwdState:'',
        pwd2:'',
        pwd2State:'',
    }
},

methods: {
    checkForm() {
        //如果验证都通过，执行输出
        if(this.checkName() && this.checkPwd() && this.checkPwd2()){
            console.log('验证成功，执行登录')
        }
    },

checkPwd2(){
    let exp=/^\d{6}$/;
    if(exp.test(this.pwd2) && this.pwd===this.pwd2){
        this.pwd2State='success'
        return true
    }else{
        this.pwd2State='error'
        return false
    }

},


    checkPwd(){
     let exp=/^\d{6}$/;
     if(exp.test(this.pwd)){
        this.pwdState='success'
        return true
     }else{
        this.pwdState='error'
        return false
     }
    },

checkName(){
    let exp=/^\w{3,10}$/;
    if(exp.test(this.name)){
        this.nameState='success'
        return true
    }else{
        this.nameState='error'
        return false
    }
}

},
}

</script>


<style lang="scss" scoped>
#body {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/5.png);
    background-size: cover;
    position: absolute;
    z-index: -1;
    /* width: 100vw; */
    /* height: 100vw; */
}
/* 输入框颜色 */
:deep{
 .mint-field-core{
    background-color: transparent;
}
.mint-button--large{
    background-color: orange;
}
.mint-cell {
    margin-top: 20px;
    border: 1px solid white;
    padding: 0 5px;
    width: 90vw;
    border-radius: 20px;
    margin-left: 5vw;
        height: 3vh;
}
.mint-button--large {
    margin-top: 5vw;
    width: 90vw;
    margin-left: 5vw;
    border-radius: 20px;
}
}
   

p {
    font-weight: 700;
    margin-left: -160px;
    margin-top: 170px;
}

/* element.style{
    margin-top: 120px;
} */
</style>