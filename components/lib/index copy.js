/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-03 22:56:18
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 16:37:44
 */
import Demo from './demo'
import Card from './card'

const components = {
  Demo,
  Card
}

const install = function (Vue) {

  if(install.installed) return;
  Object.keys(components).forEach(key=>{
    Vue.component(components[key].name, components[key])
  })
  
}

const API = { install, Demo, Card }

export default API;

