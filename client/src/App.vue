<script setup>
  import { ref,computed } from 'vue'
  import Home from './components/Home.vue';
  import Login from './components/login.vue';

  const routes = {
  '/login': Login,
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || { template: '<h1>Not Found</h1>' }
})
</script>

<template>
  <Home msg="Home"/>
  <a href="#/login">About</a> |
  <a href="#/login">Login</a> |
  <component :is="currentView" />
</template>