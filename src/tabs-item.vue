<template>
    <div class="tabs-itme">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GullumTabsItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style>
    .tabs-item{

    }
</style>