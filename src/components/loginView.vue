<template>
  <div>
    <div class="inputDiv" id="loginDiv" @click="goBack">
      <span>用戶名：</span>
      <input>
    </div>
    <div>
      <span>密&nbsp;&nbsp;&nbsp;&nbsp;碼：</span>
      <input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  methods: {
    goBack: function () {
      this.$router.push(-1)
    }
  },
  created () {
    console.log('loginView')
  }
}

</script>

<style scoped>

</style>
