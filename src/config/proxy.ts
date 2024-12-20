export const proxy = {
	'/dev/': {
		target: 'http://127.0.0.1:8002',
		// target: 'http://120.79.57.105:8088/api',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, '')
	},

	'/prod/': {
		target: 'http://120.79.57.105:8088/api',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, '/api')
	}
};
