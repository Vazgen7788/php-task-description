import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import SlotRequests from './components/SlotRequests'
import SlotReport from './components/SlotReport'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)


const routes = [
  { path: '/', component: SlotRequests },
  { path: '/slot-report', component: SlotReport },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
