import type { ModuleConfig } from '/@/flyway';
import ElementPlus from 'element-plus';
import './css/index.scss';

export default (): ModuleConfig => {
	return {
		order: 100,
		label: 'Element Ui',
		description: 'Element Plus 变量、样式配置',
		author: 'FLYWAY',
		version: '1.0.0',
		updateTime: '2024-12-03',
		install(app) {
			app.use(ElementPlus);
		}
	};
};
