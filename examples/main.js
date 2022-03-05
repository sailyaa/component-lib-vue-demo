/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 17:12:28
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 17:17:20
 */
import Vue from 'vue'
import App from './App.vue'


import 'component-lib-vue/dist/css/card.css'
import { Card }  from 'component-lib-vue'

Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
