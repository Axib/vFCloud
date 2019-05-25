<template>
  <div>
    <div class="login-bg" :style="conheight"></div>
    <div class="course-banner-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
    </div>
    <div :class="{'login-wrapper load': loadLogin, 'login-wrapper': !loadLogin}">
      <div class="input-div" id="login-div">
        <span>用戶名：</span>
        <input>
      </div>
      <div class="input-div">
        <span>密&nbsp;&nbsp;&nbsp;&nbsp;碼：</span>
        <input>
      </div>
      <div>
        <button class="login-btn" v-on:click="login()">登录</button>
        <button class="login-btn" v-on:click="register()">注册</button>
      </div>
      <div class="forget-div">
        <span class="forget-span" v-on:click="register()">忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script src="../controller/loginViewController.js"></script>

<style src="../css/login.css"></style>
<style src="swiper/dist/css/swiper.css"></style>
