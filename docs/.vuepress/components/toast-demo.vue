<template>
    <div>
        <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/toast'
  import Button from '../../../src/button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)

  export default {
    components: {
      'g-button': Button,
      'g-toast': Toast
    }
  }
</script>