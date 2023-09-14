import { buildProps, isBoolean } from '@tuniao/tnui-vue3-uniapp/utils'
import { UPDATE_MODEL_EVENT } from '@tuniao/tnui-vue3-uniapp/constants'

import type { ExtractPropTypes } from 'vue'

export const privacyPopupBoxOpenDirection = ['center', 'bottom'] as const
export type PrivacyPopupBoxOpenDirection =
  (typeof privacyPopupBoxOpenDirection)[number]

export interface WXPrivacySettingRes {
  needAuthorization: boolean
  privacyContractName: string
}
export type WXPrivacyAuthorizationResolve = (res: {
  buttonId?: string
  event: string
}) => void
export interface WXPrivacyAuthorizationEventInfo {
  referrer: string
}

export const privacyPopupBoxProps = buildProps({
  /**
   * @description 是否显示
   */
  modelValue: Boolean,
  /**
   * @description 隐私弹框打开方向
   */
  openDirection: {
    type: String,
    values: privacyPopupBoxOpenDirection,
    default: 'center',
  },
  /**
   * @description 隐私弹框标题
   */
  title: {
    type: String,
    default: '用户隐私保护提示',
  },
  /**
   * @description 同意隐私按钮文案
   */
  agreeText: {
    type: String,
    default: '同意并继续',
  },
  /**
   * @description 不同意隐私按钮文案
   */
  disagreeText: {
    type: String,
    default: '不同意',
  },
  /**
   * @description 隐私保护指引文案
   */
  privacyContractText: {
    type: String,
    default: '《用户隐私保护指引》',
  },
  /**
   * @description 同意按钮背景颜色，以tn开头使用图鸟内置颜色
   */
  agreeBgColor: String,
  /**
   * @description 同意按钮文字颜色，以tn开头使用图鸟内置颜色
   */
  agreeColor: String,
  /**
   * @description 不同意按钮背景颜色，以tn开头使用图鸟内置颜色
   */
  disagreeBgColor: String,
  /**
   * @description 不同意按钮文字颜色，以tn开头使用图鸟内置颜色
   */
  disagreeColor: String,
})

export const privacyPopupBoxEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  close: () => true,
  agree: () => true,
  disagree: () => true,
  'open-protocol': () => true,
  'agree-privacy-authorization': () => true,
}

export type PrivacyPopupBoxProps = ExtractPropTypes<typeof privacyPopupBoxProps>
export type PrivacyPopupBoxEmits = typeof privacyPopupBoxEmits
