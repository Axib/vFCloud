<template>
  <div id="app">
    <loading v-if='isLoading'/>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import loading from '../src/components/loading'

export default {
  name: 'App',
  computed: mapState({
    isLoading: state => state.isLoading
  }),
  components: {
    loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
