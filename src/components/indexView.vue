<template>
  <div ref="advertisement" id="advertisement" @click='jumpLogin' aria-disabled="true">
    {{msg + '...'}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'indexView',
  data () {
    return {
      msg: '欢迎进入'
    }
  },
  methods: {
    jumpLogin () {
      console.log('进入下一页')
      this.$router.push({name: 'loginView', params: {userName: 'admin'}})
    },
    init () {
      setTimeout(function () {
        if (document.getElementById('advertisement')) {
          document.getElementById('advertisement').click()
        }
      }, 3000)
    }
  },
  created () {
    setTimeout(function () {
      if (document.getElementById('advertisement')) {
        document.getElementById('advertisement').click()
      }
    }, 4000)
  }
}
</script>

<style scoped>
  .inputDiv {
    margin-bottom: 15px;
  }
</style>
