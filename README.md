# 咕噜　一个简单的Vue UI组件
[![Build Status](https://travis-ci.org/huahua029/Gollum.svg?branch=master)](https://travis-ci.org/huahua029/Gollum)

## 介绍

这是在学习Vue过程中做的一个UI框架
## 开始使用
１．添加CSS样式
    使用本框架前，请在CSS中开启`border-box`
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE8及以上浏览器都支持此样式

    你还需要设置默认颜色等变量（后续会改为scss）
    ```
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    IE15以及以上浏览器支持此样式
２．安装Gollum
    ```
    npm i --save Gollum
    ```
３．引入Gollum
    ```
    import {Button, ButtonGroup,Icon} from 'Gollum'
    import 'Gollum/dist/index.css'

    export default{
        name: 'app',
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    ```
４．引入svg symblos
    ```
    <script src="//at.alicdn.com/t/font_958487_x6yrbxqa4x8.js"></script>
    ```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献者
