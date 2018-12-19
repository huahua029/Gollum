<template>
    <div :class="classes" :data-name="name" @click="onClick"
    class="tabs-item"
    >
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
                    active: this.active,
                  disabled: this.disabled
                }
            }
        },
        created() {
          if(this.eventBus){
            this.eventBus.$on('update:selected', (name) => {
              this.active = name === this.name;
            })
          }
        },
        methods: {
            onClick() {
              if (this.disabled){return}
                this.eventBus && this.eventBus.$emit('update:selected', this.name,this)
            }
        }
    }
</script>
<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
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
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>