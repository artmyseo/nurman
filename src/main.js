import Vue from 'vue'
import Pet from './Pet.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Pet),
}).$mount('#app')
