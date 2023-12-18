<template>
  <div id="app">
    <NavBar/>
    <LoginMain/>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginMain from './components/LoginMain.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
