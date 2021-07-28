import { createApp, h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElTooltip,
  ElDialog,
  ElSlider,
  ElIcon,
} from 'element-plus'

const app = createApp({
  render: () => h(App),
})

app
  .use(ElButton)
  .use(ElInput)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElSelect)
  .use(ElOption)
  .use(ElTooltip)
  .use(ElDialog)
  .use(ElSlider)
  .use(ElIcon)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/welcome.vue'),
    },
    {
      path: '/select-coin',
      component: () => import('./views/select-coin.vue'),
    },
    {
      path: '/mining',
      component: () => import('./views/mining.vue'),
    },
  ],
})

app.use(router)

app.mount('#app')
