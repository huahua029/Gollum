const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props',function () {
        it('接受autoClose',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            },1500)
        })
        it('接受closeButton',(done)=>{
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            },200)
        })
        it('接受enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<p id="hi">hi</p>']
            vm.$mount()
            let p = vm.$el.querySelector('#hi')
            expect(p).to.exist
        })
        it('接受position',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })
})