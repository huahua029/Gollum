<template>
    <div>
        <g-button>按钮</g-button>
        <g-button icon="settings">设置按钮</g-button>
        <g-button disabled>禁止使用</g-button>
        <g-button loading>加载按钮</g-button>
    </div>
</template>

<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button
    }
  }
</script>