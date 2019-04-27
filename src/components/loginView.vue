<template>
  <div>
    <div class="inputDiv" id="loginDiv" @click="goBack">
      <span>用戶名：</span>
      <input>
    </div>
    <div class="inputDiv">
      <span>密&nbsp;&nbsp;&nbsp;&nbsp;碼：</span>
      <input>
    </div>
    <div>
      <button class="loginBtn" v-on:click="login">登录</button>
      <button class="loginBtn">注册</button>
    </div>
    <div class="forgetDiv">
      <span class="forgetSpan">忘记密码?</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  methods: {
    goBack: function () {
      this.$router.push(-1)
    },
    login () {
      this.$http.get('http://127.0.0.1:8088/member/comp/001/get')
        .then(res => {
          console.log(res, 123)
        })
        .catch(res => {
          console.log(res, 321)
        })
    }
  },
  created () {
    this.$cookie.clear()
    this.$cookie.set('userName', 'admin')
    this.$cookie.set('access_token', '123')
  }
}

</script>

<style scoped>
  .inputDiv {
    margin-top: 10px;
  }
  .loginBtn {
    background-color: gray;
    color: white;
    font-size: 14px;
    margin-top: 10px;
    width: 100px;
  }
  .forgetDiv {
    width: 200px;
    margin: auto;
    padding-top: 10px;
  }
  .forgetSpan {
    font-size: 12px;
    float: right;
    cursor: pointer;
  }
</style>
