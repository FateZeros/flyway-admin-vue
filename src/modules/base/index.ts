import { useStore } from './store';

export function useBase() {
	return {
		...useStore()
	};
}
