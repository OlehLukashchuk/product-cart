import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './assets/styles/style.scss'

const app = createApp(App, router)
app.use(router)
app.mount('#app')
