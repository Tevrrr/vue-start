/** @format */

import { computed, ref } from 'vue';

export function useSortedAndSearchPosts(sortedPosts) {
	const searchQwery = ref('');
	const sortedAndSearchPosts = computed(() => {
		return sortedPosts.value.filter((item) => {
			return item.title
				?.toLocaleLowerCase()
				?.includes(searchQwery.value?.toLocaleLowerCase());
		});
    });
    
    return {
        searchQwery,
        sortedAndSearchPosts
    }
}
