/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 22:46:52
 * @LastEditors: linda
 * @LastEditTime: 2022-03-02 22:48:10
 */
import Card from './src/main.vue'

Card.install = function(Vue) {
  Vue.component(Card.name, Card)
}

export default Card