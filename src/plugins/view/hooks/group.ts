import { provide, ref } from 'vue';
import { useParent } from '/@/flyway';
import type { ClViewGroup } from '../types';

export function useViewGroup<T = ClViewGroup.Item>(options?: DeepPartial<ClViewGroup.Options<T>>) {
	const ViewGroup = ref<ClViewGroup.Ref<T>>();
	useParent('cl-view-group', ViewGroup);

	if (options) {
		provide('useViewGroup__options', options);
	}

	return { ViewGroup };
}
