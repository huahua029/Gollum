<template>
    <div>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>

        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
    </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'g-col': Col,
      'g-row': Row
    }
  }
</script>
<style scoped>
    .demoCol{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background: #eee;
        border: 1px solid #ddd;
    }
    .demoRow{
        flex-wrap: nowrap;
    }
</style>