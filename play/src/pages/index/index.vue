<script setup lang="ts">
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import TnPrivacyPopupBox from '../../packages/src/index.vue'
import type {
  PrivacyPopupBoxOpenDirection,
  WXPrivacyAuthorizationEventInfo,
  WXPrivacyAuthorizationResolve,
  WXPrivacySettingRes,
} from '../../packages/src'

const showPrivacyPopup = ref(false)
const privacyOpenDirection = ref<PrivacyPopupBoxOpenDirection>('center')
const privacyContractText = ref<string>('')
let resolvePrivacyAuthorization: WXPrivacyAuthorizationResolve | undefined

const openCenterPrivacyPopup = () => {
  // showPrivacyPopup.value = true
  // privacyOpenDirection.value = 'center'
  uni.getClipboardData({
    success: (res) => {
      console.log(res)
    },
  })
}
const openBottomPrivacyPopup = () => {
  showPrivacyPopup.value = true
  privacyOpenDirection.value = 'bottom'
}
const agreePrivacyAuthorizationHandle = () => {
  resolvePrivacyAuthorization?.({ buttonId: 'agree-btn', event: 'agree' })
  showPrivacyPopup.value = false
}
const disagreePrivacyHandle = () => {
  resolvePrivacyAuthorization?.({ event: 'disagree' })
  showPrivacyPopup.value = false
}

onReady(() => {
  wx.onNeedPrivacyAuthorization(
    (
      resolve: WXPrivacyAuthorizationResolve,
      eventInfo: WXPrivacyAuthorizationEventInfo
    ) => {
      console.log(resolve)
      console.log(eventInfo)
      showPrivacyPopup.value = true
      resolvePrivacyAuthorization = resolve
    }
  )
  // wx.requirePrivacyAuthorize({
  //   success: (res) => {
  //     console.log(res)
  //     // 用户同意授权
  //     // 继续小程序逻辑
  //   },
  //   fail: () => {}, // 用户拒绝授权
  //   complete: () => {},
  // })
  wx.getPrivacySetting({
    success: (res: WXPrivacySettingRes) => {
      privacyContractText.value = res.privacyContractName
      // if (res.needAuthorization) {
      //   // 弹出隐私弹框
      //   privacyContractText.value = res.privacyContractName
      //   showPrivacyPopup.value = true
      // }
    },
  })
})
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
    :privacy-contract-text="privacyContractText"
    @agree-privacy-authorization="agreePrivacyAuthorizationHandle"
    @disagree="disagreePrivacyHandle"
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
