<template>
    <div :class="rowClass" :style="rowStyle" class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GollumRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter / 2 + 'px',
                    marginRight: -gutter / 2 + 'px'
                }
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: nowrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
</style>