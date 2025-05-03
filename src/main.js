<<<<<<< HEAD
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axios;

app.use(pinia);
app.use(router);
app.mount('#app');
=======
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> parent of 50fe75b (pinia)
