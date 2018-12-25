---
title: Popover
sidebarDepth: 2
---
# popover

## 点击

使用方法

<popover-demo></popover-demo>

``` 
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="left">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
```

## hover

<popover-hover-demo></popover-hover-demo>

使用方法

``` 
<g-popover trigger="hover">
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
```