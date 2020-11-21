<template>
  <div id="App">
    <configpin></configpin>
  </div>
</template>

<script>
import configpet from './components/configpin.vue'

export default {
  name: 'App',
  components: {
    configpin
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
