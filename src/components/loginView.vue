<template>
  <div>
    <div class="course-banner-box" v-on:click="register()">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
    </div>
    <div :class="{'login-wrapper load': loadLogin, 'login-wrapper': !loadLogin}">
      <div class="inputDiv" id="loginDiv" @click="goBack">
        <span>用戶名：</span>
        <input>
      </div>
      <div class="inputDiv">
        <span>密&nbsp;&nbsp;&nbsp;&nbsp;碼：</span>
        <input>
      </div>
      <div>
        <button class="loginBtn" v-on:click="login()">登录</button>
        <button class="loginBtn" v-on:click="register()">注册</button>
      </div>
      <div class="forgetDiv">
        <span class="forgetSpan" v-on:click="register()">忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script src="../controller/loginViewController.js"></script>

<style src="../css/login.css"></style>
<style src="swiper/dist/css/swiper.css"></style>
