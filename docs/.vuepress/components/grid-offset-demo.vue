<template>
    <div>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col offset="8" span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col offset="6" span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col offset="6" span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col offset="4" span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col offset="8" span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col offset="2" span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col offset="2" span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col offset="2" span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col offset="2" span="2">
                <div class="demoCol">2</div>
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
    .demoRow {
        height: 100px;
        flex-wrap: nowrap;
    }

    .col {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ddd;
    }
</style>