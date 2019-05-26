<template>
  <div class="home-wrapper" :style="conheight">
    <div class="header-wrapper">
      <div class="menu">
        <img :class="[menu_open ? 'open':'close']" src="../img/menu.png" v-on:click="displayControl()">
        <!--<span v-on:click="displayControl()">{{menu_index >=0 ? menu_list[menu_index].name : '首页'}}</span>-->
      </div>
      <div class="exit">
        <img :class="[menu_open ? 'open':'close']" src="../img/exit.png" v-on:click="exitOut()" title="退出登录">
        <span>欢迎您，Admin</span>
      </div>
    </div>
    <div :class="[menu_open ? 'menu-wrapper open' : 'menu-wrapper close']">
      <vue-scroll :ops="ops">
        <div :class="[item.open ? 'td-d  open' : 'td-d']" v-for="(item, index) in menu_list" :key="item.id">
          <div :class="menu_index == item.id ? 'parent choose' : 'parent'" v-on:click="expansionMenu(index)">
            <img :class="[menu_open ? 'icon':'icon close']" :src="menu_index == item.id ? item.selectUrl : item.normalUrl">
            <span :class="[menu_open ? '':'close']">{{item.name}}</span>
          </div>
          <div class="children" v-if="!item.close">
            <div :class="menu_child_index == child.id ? 'child choose' : 'child'" v-for="(child, cIndex) in item.children" v-on:click="expansionChildMenu(cIndex)" :key="child.id">
              <img :class="[menu_open ? 'icon':'icon close']" :src="menu_child_index == child.id ? child.selectUrl : child.normalUrl">
              <span :class="[menu_open ? '':'close']">{{child.name}}</span>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script src="../controller/homeViewController.js"></script>

<style src="../css/home.css"></style>
