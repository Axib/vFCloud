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
      <div class="input-div">
        <span>連鎖編碼：</span>
        <input v-model="chainId" onblur="" @keyup="keyup($event)" id="chainId">
      </div>
      <div class="input-div">
        <span>&nbsp;用&nbsp;戶&nbsp;名：</span>
        <input v-model="userName" @keyup="keyup($event)" id="userName">
      </div>
      <div class="input-div">
        <span>用戶密碼：</span>
        <input type="password" v-model="password" @keyup="keyup($event)" id="password">
      </div>
      <div>
        <button class="login-btn" v-on:click="login()">登錄</button>
        <button class="login-btn" v-on:click="register()">註冊</button>
      </div>
      <div class="forget-div">
        <span class="forget-span" v-on:click="register()">忘記密碼?</span>
      </div>
    </div>
  </div>
</template>

<script src="../controller/loginViewController.js"></script>

<style src="../css/login.css"></style>
<style src="swiper/dist/css/swiper.css"></style>
