import { createApp } from 'vue'
import { createPinia} from 'pinia'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './style.css'

import App from './App.vue'
import {router} from './router'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
