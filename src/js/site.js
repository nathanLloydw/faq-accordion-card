import { createApp } from 'vue'
import '../css/styles.css'

import FAQs from './components/FAQs.vue'

const app = createApp({})

app.component('faq-block', FAQs);

app.mount('#app')