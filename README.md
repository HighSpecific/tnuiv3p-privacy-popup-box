# 图鸟 UI vue3 uniapp Plugins - 隐私弹框

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于让用户确认隐私协议

## 组件安装

```bash
npm i tnuiv3p-tn-privacy-popup-box
```

## 组件位置

```bash
tnuiv3p-tn-privacy-popup-box/index.vue
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 通过`v-model`控制隐私弹框的显示与隐藏

```vue
<script setup lang="ts">
import { ref } from 'vue'

const showPrivacyPopup = ref(false)
</script>

<template>
  <TnPrivacyPopupBox v-model="showPrivacyPopup" />
</template>
```

## 修改隐私弹框弹出位置

- 通过设置`open-direction`的值为`center`和`bottom`控制隐私弹框从中间弹出还是从底部弹出

```vue
<template>
  <TnPrivacyPopupBox v-model="showPrivacyPopup" open-direction="bottom" />
</template>
```

## API

### Props

| 属性名                  | 说明                                                         | 类型    | 默认值           | 可选值   |
| ----------------------- | ------------------------------------------------------------ | ------- | ---------------- | -------- |
| `v-model`/`model-value` | 控制隐私弹框的显示与隐藏                                     | Boolean | `false`          | `true`   |
| open-direction          | 隐私弹框弹出的位置                                           | String  | `center`         | `bottom` |
| title                   | 隐私弹框标题                                                 | String  | 用户隐私保护提示 | -        |
| agree-text              | 同意隐私按钮文案                                             | String  | 同意并继续       | -        |
| disagree-text           | 不同意隐私按钮文案                                           | String  | 不同意           | -        |
| agree-bg-color          | 同意按钮背景颜色，以tn开头使用图鸟[内置颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html) | String  | -                | -        |
| agree-color             | 同意按钮字体颜色，以tn开头使用图鸟[内置颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html) | String  | -                | -        |
| disagree-bg-color       | 不同意按钮背景颜色，以tn开头使用图鸟[内置颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html) | String  | -                | -        |
| disagree-color          | 不同意按钮字体颜色，以tn开头使用图鸟[内置颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html) | String  | -                | -        |



### Emits

| 事件名        | 说明                 | 类型         |
| ------------- | -------------------- | ------------ |
| agree         | 点击同意按钮事件     | `() => void` |
| disagree      | 点击不同意按钮事件   | `() => void` |
| open-protocol | 点击查看隐私协议事件 | `() => void` |
