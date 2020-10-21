<template>
  <div id="App">
    <configpet></configpet>
  </div>
</template>

<script>
import configpet from './components/configpet.vue'

export default {
  name: 'App',
  components: {
    configpet
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
