<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GullumToast'
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,0.74);
    .toast { font-size: $font-size;line-height: 1.8;height: $toast-height;
        color: white;position: fixed;top: 0;left: 50%;
        transform: translateX(-50%);display: flex;align-items: center;
        border-radius: 4px;background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        padding: 16px;
    }
</style>