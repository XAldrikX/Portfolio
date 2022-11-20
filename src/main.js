import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Plugins from './Plugins';

createApp(App)
    .use(Plugins)
    .use(router)
    .mount('#app');
