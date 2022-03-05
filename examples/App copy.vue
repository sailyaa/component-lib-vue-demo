<!--
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 17:12:28
 * @LastEditors: linda
 * @LastEditTime: 2022-03-02 23:34:50
-->
<template>
  <div id="app">
    <Demo />
    <div class="m-card-container">
      <m-card imgSrc="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              summary="玩转组件库搭建全流程" />
      <m-card imgSrc="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              summary="玩转组件库搭建全流程">
        <template v-slot:footer>
          <div class="footer">
            <div class="level">中级 . 528人报名</div>
            <div class="price">￥299.00</div>
          </div>
        </template>
      </m-card>
      <m-card imgSrc="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              summary="玩转组件库搭建全流程"
              :width="370"
              :imgHeight="90">
        本课程旨在帮助你如何快速搭建一个组件库
        <template v-slot:footer>
          <div class="footer-spring">
            <div class="level">中级 . 528人报名</div>
            <div class="price">￥299.00</div>
          </div>
        </template>
      </m-card>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.m-card-container {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
