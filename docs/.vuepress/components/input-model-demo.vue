<template>
    <div>
        <g-input v-model="message"></g-input>
        <div>
            value：　{{message}}
        </div>
    </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    },
    data() {
      return {
        message:'message'
      }
    }
  }
</script>