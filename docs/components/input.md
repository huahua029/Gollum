---
title: Input
sidebarDepth: 2
---
# 输入框

## 简单用法

<input-demo></input-demo>

**使用方法:**

```
<g-input value="默认"></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" readonly></g-input>
  
```
## 双向绑定

<input-model-demo></input-model-demo>

**使用方法:**
```
data() {
  return {
    message:'message'
  }
}
<g-input v-model="message"></g-input>
<div>
    value：　{{message}}
</div>
```