/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-03 22:56:18
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 17:16:21
 */
import Demo from './demo'
import Card from './card'

const components =[Demo, Card]

const install = function (Vue) {
  // 防止重复下载
  if(install.installed) return;
  components.forEach(item =>{
    Vue.component(item.name, item)
  })
  
}

export {install, Demo, Card}

