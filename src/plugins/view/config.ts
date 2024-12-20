import type { ModuleConfig } from '/@/flyway';

export default (): ModuleConfig => {
	return {
		label: '视图组件',
		description: '左右侧布局、顶部详情等',
		author: 'COOL',
		version: '1.0.4',
		updateTime: '2024-03-25',

		components: [() => import('./components/group.vue'), () => import('./components/head.vue')]
	};
};
