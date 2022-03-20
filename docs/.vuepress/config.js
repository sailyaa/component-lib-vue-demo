/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-05 17:36:27
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 18:56:19
 */
// .vuepress/config.js
module.exports = {
  base: '/component-lib-vue-demo/',
  themeConfig: {
    sidebar: {
      '/': [
        {
          title: '快速开始',
          path: '/'
        },
        {
          title: '卡片组件',
          path: '/componentDocs/card'
        }
      ],
    }
  }
}