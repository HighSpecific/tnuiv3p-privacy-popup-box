import { ref, watch } from 'vue'

import type { SetupContext } from 'vue'
import type { PrivacyPopupBoxEmits, PrivacyPopupBoxProps } from '../types'

export const usePrivacyPopupBox = (
  props: PrivacyPopupBoxProps,
  emits: SetupContext<PrivacyPopupBoxEmits>['emit']
) => {
  const showPrivacyPopup = ref(false)
  watch(
    () => props.modelValue,
    (val) => {
      showPrivacyPopup.value = val
    },
    { immediate: true }
  )

  // 弹框关闭事件
  const popupCloseHandle = () => {
    emits('update:modelValue', false)
  }

  // 同意按钮点击事件
  const agreeBtnClickHandle = () => {
    emits('agree')
    popupCloseHandle()
  }
  // 不同意按钮点击事件
  const disagreeBtnClickHandle = () => {
    emits('disagree')
    popupCloseHandle()
  }

  // 跳转到用户隐私协议页面
  const protocolClickHandle = () => {
    emits('open-protocol')
    // #ifdef MP-WEIXIN
    wx.openPrivacyContract()
    // #endif
  }

  return {
    showPrivacyPopup,
    popupCloseHandle,
    agreeBtnClickHandle,
    disagreeBtnClickHandle,
    protocolClickHandle,
  }
}
