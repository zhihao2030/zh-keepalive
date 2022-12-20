import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import '/@/styles/index.less';
import '/@/styles/reset.less';
import 'uno.css';
import data from '../public/config.json';

data.list.forEach((item) => {
  window[Object.keys(item)[0]] = 4234234;
});
// 支持SVG
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(piniaStore);
app.mount('#app');
