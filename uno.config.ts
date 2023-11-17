// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetAttributify, transformerVariantGroup, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  // ...UnoCSS options
})