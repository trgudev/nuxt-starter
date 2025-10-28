import type { Directive } from 'vue'

const elMap = new WeakMap<HTMLElement, HTMLDivElement>()

const spinnerHtml = `
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      class="wheel-and-hamster"
    >
      <div class="wheel"></div>
      <div class="hamster">
        <div class="hamster__body">
          <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
          </div>
          <div class="hamster__limb hamster__limb--fr"></div>
          <div class="hamster__limb hamster__limb--fl"></div>
          <div class="hamster__limb hamster__limb--br"></div>
          <div class="hamster__limb hamster__limb--bl"></div>
          <div class="hamster__tail"></div>
        </div>
      </div>
      <div class="spoke"></div>
    </div>
`

/**
 * 创建并插入蒙层和加载动画
 * @param el - 指令绑定的 DOM 元素
 */
const createOverlay = (el: HTMLElement) => {
  const overlay = document.createElement('div')

  Object.assign(overlay.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: '999',
    transition: 'opacity 0.3s'
  })

  overlay.innerHTML = spinnerHtml

  // 如果目标元素的定位是 static，则改为 relative
  if (getComputedStyle(el).position === 'static') {
    el.style.position = 'relative'
  }

  el.appendChild(overlay)

  elMap.set(el, overlay)
}

/**
 * 从元素中移除蒙层
 * @param el - 指令绑定的 DOM 元素
 */
const removeOverlay = (el: HTMLElement) => {
  const overlay = elMap.get(el)
  if (overlay) {
    // 先播放淡出动画
    overlay.style.opacity = '0'
    // 动画结束后移除元素
    setTimeout(() => {
      // 检查 overlay 是否仍在 el 的子节点中
      if (el.contains(overlay)) {
        el.removeChild(overlay)
      }
      elMap.delete(el)
    }, 300)
  }
}

const vLoading: Directive<HTMLElement, boolean> = {
  mounted(el, binding) {
    if (binding.value) {
      createOverlay(el)
    }
  },
  updated(el, binding) {
    if (binding.value && !binding.oldValue) {
      createOverlay(el)
    } else if (!binding.value && binding.oldValue) {
      removeOverlay(el)
    }
  },
  unmounted(el) {
    removeOverlay(el)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loading', vLoading)
})
