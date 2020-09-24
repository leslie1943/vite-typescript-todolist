import { createApp } from 'vue'
import App from './App'
import { router } from './router'
import './styles/primer.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
