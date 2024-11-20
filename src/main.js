import { createApp } from 'vue';
<<<<<<< HEAD
import App from './App.vue'
import { createPinia } from 'pinia';
=======
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import axios from 'axios';
>>>>>>> dev_1

const app = createApp(App);
const pinia = createPinia();

<<<<<<< HEAD
app.use( pinia );
app.mount('#app');
=======
app.config.globalProperties.$axios = axios;

app.use(pinia);
app.use(router);
app.mount('#app');
>>>>>>> dev_1
