import { createApp } from 'vue';
import App from './App.vue';
import { bootstrap } from './flyway';

const app = createApp(App);

// 启动
bootstrap(app)
	.then(() => {
		app.mount('#app');
	})
	.catch(err => {
		console.error('FLYWAY ADMIN 启动失败', err);
	});
