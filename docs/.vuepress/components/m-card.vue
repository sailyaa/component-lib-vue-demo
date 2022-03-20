<!--
 * @Descripttion: 
 * @version: v1.0
 * @Author: linda
 * @Date: 2022-03-02 22:47:04
 * @LastEditors: linda
 * @LastEditTime: 2022-03-05 17:58:01
-->
<template>
  <div class="m-card"
       :style="width? {width: width + 'px'}: {}">
    <div class="m-card-img"
         :style="imgHeight? {height: imgHeight + 'px'}:{}">
      <img :src="imgSrc"
           alt="img">
    </div>
    <div v-if="summary"
         class="m-card-summary">
      {{summary}}
    </div>
    <div class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-card',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
@import "./card.scss"
</style>