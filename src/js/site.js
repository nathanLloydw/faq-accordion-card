import { createApp } from 'vue'
import '../css/styles.css'

import dekstop_navigation from './components/desktop_navigation.vue'
import mobile_navigation from './components/mobile_navigation.vue'

const app = createApp({})

app.component('desktop_navigation', dekstop_navigation);
app.component('mobile_navigation', mobile_navigation);

app.mount('#app')