import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '刘备'
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})