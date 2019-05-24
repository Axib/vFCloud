<template>
  <div class="home-wrapper">
    <div class="header-wrapper">
      <div class="menu">
        <img :class="[menu_open ? 'open':'close']" src="../img/menu.png" v-on:click="displayControl()">
        <span v-on:click="displayControl()">{{menu_index >=0 ? menu_list[menu_index].name : '首页'}}</span>
      </div>
    </div>
    <div :class="[menu_open ? 'menu-wrapper open':'menu-wrapper close']">
      <table>
        <div :class="[menu_index == index ? 'td-d choose' : 'td-d']" v-for="(item, index) in menu_list" v-on:click="expansionMenu(index)" :key="item.name">{{item.name}}</div>
      </table>
    </div>
  </div>
</template>

<script src="../controller/homeViewController.js"></script>

<style src="../css/home.css"></style>
