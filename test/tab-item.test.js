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

describe('Tabs-item', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('接受name属性',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接受disabled属性',()=>{
    const callback = sinon.fake()
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    expect(vm.$el.classList.contains('disabled')).to.be.true
  })
})