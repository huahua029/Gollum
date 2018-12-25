---
title: Layout
sidebarDepth: 2
---
# 布局

## 布局1

<layout-demo></layout-demo>

使用方法

``` 
<g-layout style="display:flex;color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content style="height: 100px;flex-grow: 1; background:deepskyblue;">
        content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```
## 布局2
<layout-content-sider-demo></layout-content-sider-demo>
使用方法

```
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```
## 布局３
<layout-sider-demo></layout-sider-demo>

使用方法

```
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
```