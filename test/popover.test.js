const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.exist
  })
  it('可以设置position.', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
            <g-popover position="bottom" ref="a">
                <template slot="content">
                    <div>popover内容</div>
                </template>
            <button>点我</button>
    </g-popover>
        `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      console.log(vm.$el.outerHTML);
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        let {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })
  xit('可以设置trigger',(done)=>{
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
            <g-popover position="bottom" ref="a">
                <template slot="content">
                    <div>popover内容</div>
                </template>
            <button>点我</button>
    </g-popover>
        `
    const vm = new Vue({
      el: div
    })
    let event = new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(()=>{
      let {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper).to.exist
      done()
    })
  })

})