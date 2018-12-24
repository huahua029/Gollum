<template>
    <div @click="onClick" class="popover">
        <div :class="{[`position-${position}`]:true}" class="content-wrapper" ref="contentWrapper"
             v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: "GollumPopover",
    data() {
      return {visible: false}
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target ||
            this.$refs.contentWrapper.contains(e.target))) {
          return
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))) {
          return
        }
        this.close()
      },
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let {width, height, top, left} = triggerWrapper.getBoundingClientRect()

        if (this.position === 'top') {
          contentWrapper.style.top = top + window.scrollY + 'px'
          contentWrapper.style.left = left + window.scrollX + 'px'
        } else if (this.position === 'bottom') {
          contentWrapper.style.top = top + height + window.scrollY + 'px'
          contentWrapper.style.left = left + window.scrollX + 'px'
        } else if (this.position === 'left') {
          let {height: height2} = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + window.scrollY +
            (height - height2) / 2 + 'px'
          contentWrapper.style.left = left + window.scrollX + 'px'
        }else if(this.position === 'right'){
          let {height: height2} = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + window.scrollY +
            (height - height2) / 2 + 'px'
          contentWrapper.style.left = left + window.scrollX + width+ 'px'
        }
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    },
    mounted() {
      console.log('mounted')
    }
  }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            dispaly: block;
            border: 10px solid transparent;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: #000;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: #000;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                left: 100%;
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: #000;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: #000;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>