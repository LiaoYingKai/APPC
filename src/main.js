import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'

const app = createApp(App)

app.use(router)

app.component('v-select', vSelect)

app.mount('#app')
