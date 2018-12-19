import Vue from "vue";
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

const expect = chai.expect;

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受selected',(done)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="finance">
        <g-tabs-head>
            <g-tabs-item name="woman">美女</g-tabs-item>
            <g-tabs-item name="finance">财经</g-tabs-item>
            <g-tabs-item name="sports">体育</g-tabs-item>
        </g-tabs-head>

        <g-tabs-body>
            <g-tabs-pane name="woman">美女相关咨询</g-tabs-pane>
            <g-tabs-pane name="finance">财经相关咨询</g-tabs-pane>
            <g-tabs-pane name="sports">体育相关咨询</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      let x= vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    },1000)
  })
  it('可以接受direction prop',()=>{})
})