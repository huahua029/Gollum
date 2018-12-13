<template>
    <div :style="{marginLeft: -gutter/2+'px',marginRight:-gutter/2+'px'}" class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GollumRow',
        props: {
            gutter: {
                type: [Number,String]
            }
        },
        created() {
            console.log('row created')
        },
        mounted() {
            console.log('row mounted')
            console.log(this.$children)
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
    }
</style>