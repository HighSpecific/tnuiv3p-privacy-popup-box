<script setup lang="ts">
import { ref } from 'vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import TnPrivacyPopupBox from '../../packages/src/index.vue'
import type { PrivacyPopupBoxOpenDirection } from '../../packages/src'

const showPrivacyPopup = ref(false)
const privacyOpenDirection = ref<PrivacyPopupBoxOpenDirection>('center')

const openCenterPrivacyPopup = () => {
  showPrivacyPopup.value = true
  privacyOpenDirection.value = 'center'
}
const openBottomPrivacyPopup = () => {
  showPrivacyPopup.value = true
  privacyOpenDirection.value = 'bottom'
}
</script>

<template>
  <view class="content">
    <view>
      <TnButton @click="openCenterPrivacyPopup">居中弹出显示弹框</TnButton>
      <TnButton @click="openBottomPrivacyPopup">底部弹出显示弹框</TnButton>
    </view>
  </view>

  <TnPrivacyPopupBox
    v-model="showPrivacyPopup"
    :open-direction="privacyOpenDirection"
  />
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .message {
    font-size: 50rpx;
  }
}
</style>
