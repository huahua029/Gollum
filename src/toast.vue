<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>

        <div class="line" ref="line"></div>
        <span @click="onClickClose()" class="close" v-if="closeButton">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GullumToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }

        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.74);
    .toast { font-size: $font-size;line-height: 1.8;min-height: $toast-min-height;
        color: white;position: fixed;top: 0;left: 50%;
        transform: translateX(-50%);display: flex;align-items: center;
        border-radius: 4px;background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        padding: 0 16px;

        .message {
            padding: 4px 0;
        }

        .close {
            padding-left: 10px;
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>