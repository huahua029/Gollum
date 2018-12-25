---
title: Grid
sidebarDepth: 2
---
# 网格

## 24格网格

预览
<grid-demo></grid-demo>

使用方法


``` 
<g-row class="demoRow">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
        <div class="demoCol">4</div>
    </g-col>
</g-row>

<g-row class="demoRow">
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
        <div class="demoCol">2</div>
    </g-col>
</g-row>
```
## 设置gutter

<grid-gutter-demo></grid-gutter-demo>

使用方法

```
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>

<g-row class="demoRow" gutter="10">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```

## 设置偏移
<grid-offset-demo></grid-offset-demo>
使用方法
```
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>

```