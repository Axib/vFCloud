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
            <img :class="[item.open ? 'status open':'status']" v-if="menu_open && item.children && item.children.length > 0" src="//przpvntfi.bkt.clouddn.com/image/menu/menu_open.png">
          </div>
          <div class="children" v-if="item.open">
            <div :class="menu_child_index == child.id ? 'child choose' : 'child'" v-for="(child) in item.children" v-on:click="expansionChildMenu(child)" :key="child.id">
              <img :class="[menu_open ? 'icon':'icon close']" :src="menu_child_index == child.id ? child.selectUrl : child.normalUrl">
              <span :class="[menu_open ? '':'close']">{{child.name}}</span>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div  :class="[menu_open ? 'tabbed round compress' : 'tabbed round']" v-if="labelList && labelList.length > 0">
      <ul>
        <li :class='menu_index == label.id || menu_child_index == label.id ? "active" : ""' v-for="(label) in labelList" :key="label.key" v-on:click="chooseLabel(label)">{{label.name}}</li>
      </ul>
    </div>
    <div :class="[menu_open ? 'components-wrapper compress' : 'components-wrapper']" v-if="labelList && labelList.length > 0">
      <component :is="label.key" name="" v-for="(label) in labelList" :key="label.key" v-show="menu_index == label.id || menu_child_index == label.id"></component>
    </div>
  </div>
</template>

<script src="../controller/homeViewController.js"></script>

<style src="../css/home.css"></style>
