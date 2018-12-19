<template>
    <div :class="classes" class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GullumTabsPane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: String | Number,
            required: true
        },
        computed: {
            classes() {
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
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane {
        padding: 1em;
        &.active {
        }
    }
</style>