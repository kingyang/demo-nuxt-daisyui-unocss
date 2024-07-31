// uno.config.ts
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { defineConfig } from 'unocss'

import presetDaisy from './.build/unocss-preset-daisyui'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ extraProperties: { display: 'inline-flex' } }),
    presetDaisy({ logs: false }),
  ],
  rules: [
    [/^animate-(\w+)-(\d+)$/, ([, n, d]) => ({ animation: `${n} 1s linear ${d};` })],
  ],
  theme: {
    colors: {
      // 琥珀橙
      amber: '#9F5800',
      // 草绿色
      azure: '#ebfaf7',
      deepteal: '#012D24',
      // 绿宝石
      emerald: '#0CC49E',
      // 鲑鱼橙
      salmon: '#f87272',
    },
  },
})
