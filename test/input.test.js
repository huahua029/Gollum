const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function(){
            vm.$destroy()
        })
        it('接收value', () => {
             vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })
        it('接收disabled', () => {
             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收error.', () => {
             vm = new Constructor({
                propsData: {
                    error: '错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            expect(errorMessage.innerText).to.eq('错了')
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function(){
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件',()=>{
            ['change','input','focus','blur'].forEach(eventName=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                var event = new Event(eventName);
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            })
        })
    })
})