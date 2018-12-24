<template>
    <div @click="onClick" class="popover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
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
          }else {
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
        transform: translateY(-100%);
        margin-top: -10px;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before{
            content: '';
            dispaly:block;
            border: 10px solid transparent;
            border-top-color: #000;
            position: absolute;
            top: 100%;
            left: 10px;
        }
        &::after{
            content: '';
            dispaly:block;
            border: 10px solid transparent;
            border-top-color: white;
            position: absolute;
            top: calc(100% - 1px);
            left: 10px;
        }
    }
</style>