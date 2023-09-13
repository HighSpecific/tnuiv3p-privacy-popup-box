import { withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import PrivacyPopupBox from './index.vue'

export const TnPrivacyPopupBox = withNoopInstall(PrivacyPopupBox)
export default TnPrivacyPopupBox

export * from './types'
export type { TnPrivacyPopupBoxInstance } from './instance'
