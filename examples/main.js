/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 17:12:28
 * @LastEditors: linda
 * @LastEditTime: 2022-03-02 23:00:18
 */
import Vue from 'vue'
import App from './App.vue'


import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index.js'
import Card from '../components/lib/card/index.js'

// 注册组件的流程是Demo.install →  Vue.component,所以如果直接使用Vue.use注册组件的话，需要写逻辑
Vue.use(Demo)
Vue.use(Card)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
