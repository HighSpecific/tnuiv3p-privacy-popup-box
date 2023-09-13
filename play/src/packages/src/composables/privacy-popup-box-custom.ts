import { computed, toRef } from 'vue'
import { useComponentColor, useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'

import type { CSSProperties } from 'vue'
import type { PrivacyPopupBoxProps } from '../types'

export const usePrivacyPopupBoxCustomStyle = (props: PrivacyPopupBoxProps) => {
  const ns = useNamespace('privacy-popup-box')

  const [agreeBtnBgColorClass, agreeBtnBgColorStyle] = useComponentColor(
    toRef(props, 'agreeBgColor'),
    'bg'
  )
  const [agreeBtnColorClass, agreeBtnColorStyle] = useComponentColor(
    toRef(props, 'agreeColor'),
    'text'
  )
  const [disagreeBtnBgColorClass, disagreeBtnBgColorStyle] = useComponentColor(
    toRef(props, 'disagreeBgColor'),
    'bg'
  )
  const [disagreeBtnColorClass, disagreeBtnColorStyle] = useComponentColor(
    toRef(props, 'disagreeColor'),
    'text'
  )

  // 同意按钮样式
  const agreeBtnClass = computed<string>(() => {
    const cls: string[] = [ns.e('agree-btn')]

    if (agreeBtnBgColorClass.value) cls.push(agreeBtnBgColorClass.value)
    if (agreeBtnColorClass.value) cls.push(agreeBtnColorClass.value)

    return cls.join(' ')
  })
  const agreeBtnStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (agreeBtnBgColorStyle.value) {
      style.backgroundColor = agreeBtnBgColorStyle.value
    } else if (agreeBtnColorStyle.value) {
      style.color = agreeBtnColorStyle.value
    } else if (!agreeBtnBgColorClass.value && !agreeBtnColorClass.value) {
      style.backgroundColor = 'var(--tn-color-primary)'
      style.color = '#fff'
    }

    return style
  })

  // 不同意按钮样式
  const disagreeBtnClass = computed<string>(() => {
    const cls: string[] = [ns.e('disagree-btn')]

    if (disagreeBtnBgColorClass.value) cls.push(disagreeBtnBgColorClass.value)
    if (disagreeBtnColorClass.value) cls.push(disagreeBtnColorClass.value)

    return cls.join(' ')
  })
  const disagreeBtnStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (disagreeBtnBgColorStyle.value) {
      style.backgroundColor = disagreeBtnBgColorStyle.value
    } else if (disagreeBtnColorStyle.value) {
      style.color = disagreeBtnColorStyle.value
    } else if (!disagreeBtnBgColorClass.value && !disagreeBtnColorClass.value) {
      if (props.openDirection === 'center') {
        style.backgroundColor = 'transparent'
        style.color = 'var(--tn-color-gray)'
      } else if (props.openDirection === 'bottom') {
        style.backgroundColor = 'var(--tn-color-danger)'
        style.color = '#fff'
      }
    }

    return style
  })

  return {
    ns,
    agreeBtnClass,
    agreeBtnStyle,
    disagreeBtnClass,
    disagreeBtnStyle,
  }
}
