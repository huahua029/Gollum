<template>
    <div>
        <g-input value="默认"></g-input>
        <g-input disabled value="中文"></g-input>
        <g-input readonly value="中文"></g-input>
    </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    }
  }
</script>