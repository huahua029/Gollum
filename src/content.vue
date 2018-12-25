<template>
    <div class="layout-content">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GullumContent'
    }
</script>
<style lang="scss" scoped>
    .layout-content{
        flex-grow: 1;
    }
</style>