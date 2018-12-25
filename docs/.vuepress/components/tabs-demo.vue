<template>
    <g-tabs selected="1">
        <g-tabs-head>
            <g-tabs-item name="1">示例１</g-tabs-item>
            <g-tabs-item name="2">示例２</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum cumque dignissimos facilis, ipsum provident quidem ratione rerum tenetur vitae! A, esse labore laboriosam libero quod velit voluptas! A, tempora.</g-tabs-pane>
            <g-tabs-pane name="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cumque dolore earum eius exercitationem facere libero officiis sint voluptate. Accusamus aperiam ducimus enim error incidunt reiciendis sed. Doloremque, omnis?</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
</template>

<script>
  import Tabs from '../../../src/tabs'
  import TabsHead from '../../../src/tabs-head'
  import TabsBody from '../../../src/tabs-body'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'


  export default {
    components: {
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-body': TabsBody,
      'g-tabs-pane': TabsPane
    }
  }
</script>