/** @format */

import { computed, ref } from 'vue';

export function useSortedPosts(posts) {
	const selectValue = ref('');
	const sortedPosts = computed(() => {
		return [...posts.value]?.sort((first, second) =>
			first[selectValue.value]?.localeCompare(second[selectValue.value])
		);
	});
	return {
		selectValue,
		sortedPosts,
	};
}
