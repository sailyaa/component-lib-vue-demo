/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 17:26:49
 * @LastEditors: linda
 * @LastEditTime: 2022-03-02 17:39:10
 */
import Demo from './src/main.vue'

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo