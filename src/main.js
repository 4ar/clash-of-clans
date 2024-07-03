import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import '../src/assets/scss/main.scss';

createApp(App).use(router).mount('#app');
