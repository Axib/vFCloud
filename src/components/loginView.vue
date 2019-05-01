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

<script src="../controller/loginViewController.js"></script>

<style src="../css/login.css"></style>
