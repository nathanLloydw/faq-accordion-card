import { createApp } from 'vue'
import '../css/styles.css'

import hello_world from './components/hello_world.vue'

const app = createApp({})

app.component('hello-world', hello_world);

app.mount('#app')