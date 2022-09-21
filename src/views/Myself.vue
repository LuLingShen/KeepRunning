<template>
    <div>
        <p>手机号登录/注册</p>
        <mt-field label="用户名" type="text" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码" type="text" placeholder="请输入密码"></mt-field>
        <mt-field label="重复密码" type="text" placeholder="请重复输入密码"></mt-field>
        <mt-button type="primary" size="large">快速注册</mt-button>
        <!-- <input class="put" type="radio">我已阅读并同意协议《用户协议》《隐私政策》 -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>

<style>
.mint-cell {
    margin-top: 20px;
    border: 1px solid black;
    padding: 0 5px;
}
.mint-button--large{
    margin-top: 15px;
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