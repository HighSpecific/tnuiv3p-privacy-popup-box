<script lang="ts" setup>
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import { privacyPopupBoxEmits, privacyPopupBoxProps } from './types'
import {
  usePrivacyPopupBox,
  usePrivacyPopupBoxCustomStyle,
} from './composables'

const props = defineProps(privacyPopupBoxProps)
const emits = defineEmits(privacyPopupBoxEmits)

const {
  showPrivacyPopup,
  popupCloseHandle,
  agreeBtnClickHandle,
  disagreeBtnClickHandle,
  agreePrivacyAuthorizationHandle,
  protocolClickHandle,
} = usePrivacyPopupBox(props, emits)
const { ns, agreeBtnClass, agreeBtnStyle, disagreeBtnClass, disagreeBtnStyle } =
  usePrivacyPopupBoxCustomStyle(props)
</script>

<template>
  <TnPopup
    v-model="showPrivacyPopup"
    :open-direction="openDirection"
    :width="openDirection === 'center' ? '84%' : '100%'"
    :overlay-closeable="false"
    radius="30"
    :safe-area-inset-bottom="false"
    @close="popupCloseHandle"
  >
    <view :class="[ns.b(), ns.is(openDirection)]">
      <view :class="[ns.e('title')]">{{ title }}</view>
      <view :class="[ns.e('content')]">
        <slot>
          亲爱的用户，感谢您信任并使用本小程序！我们非常重视用户的隐私和个人信息保护，您在使用我们的产品/服务时，我们可能会收集和使用您的相关信息，为此我们依据相关法律制定了
          <text
            :class="[ns.em('content', 'protocol')]"
            @tap.stop="protocolClickHandle"
          >
            {{ privacyContractText }}
          </text>
          ，请您在点击同意之前仔细阅读并充分理解相关条款内容，我们将严格按照指引内容使用您的信息，以便为您提供更好的服务。
        </slot>
      </view>
      <view :class="[ns.e('operation-container')]">
        <view :class="[ns.e('agree-btn-container')]">
          <TnButton
            open-type="agreePrivacyAuthorization"
            only-button
            @click="agreeBtnClickHandle"
            @agreeprivacyauthorization="agreePrivacyAuthorizationHandle"
          >
            <view
              :class="[agreeBtnClass]"
              class="tn-flex-center"
              :style="agreeBtnStyle"
            >
              {{ agreeText }}
            </view>
          </TnButton>
        </view>
        <view
          :class="[disagreeBtnClass]"
          class="tn-flex-center"
          :style="disagreeBtnStyle"
          @tap.stop="disagreeBtnClickHandle"
        >
          {{ disagreeText }}
        </view>
      </view>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>
