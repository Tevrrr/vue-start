import { onMounted, ref } from "vue";
import axios from "axios";

export function usePosts(limit) {

		const posts = ref([]);
		const totalPages = ref(0);
        const isPostsLoading = ref(true);
        const featching = async () => {
            try {
                isPostsLoading.value = true;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: 1,
                            _limit: limit,
                        },
                    }
                );
                totalPages.value = Math.ceil(
                    response.headers['x-total-count'] / limit
                );
                posts.value = response.data;
            } catch (error) {
                console.log(error);
            } finally {
                isPostsLoading.value = false;
            }
    }
    onMounted(featching);
    return {
        posts, isPostsLoading, totalPages
    }

}