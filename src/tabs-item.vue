<template>
    <div :class="classes" @click="xxx" class="tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GullumTabsItem',
        inject: ['eventBus'],
        data(){
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes(){
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name,this)
            }
        }
    }
</script>
<style scoped lang="scss">
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        &.active{
            color: $blue;
            font-weight: bold;
        }
    }
</style>