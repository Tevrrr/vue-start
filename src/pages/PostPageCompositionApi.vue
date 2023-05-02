<!-- @format -->

<template>
	<div>
		<nav class="navbar">
			<my-button @click="dialogVisible = !dialogVisible">
				Create Post</my-button
			>
			<my-select v-model="selectValue" :options="options"></my-select>
			<my-input
				v-focus
				v-model="searchQwery"
				type="text"
				placeholder="Search"
			/>
		</nav>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<div v-if="!isPostsLoading">
			<post-list :posts="sortedAndSearchPosts" @remove="deletePost" />
		</div>
		<h4 v-else>Loading...</h4>
		<!-- <div v-intersections="loadMorePosts"></div> -->
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import PagesNav from '@/components/PagesNav.vue';
import { usePosts } from '@/hools/usePosts';
import { useSortedPosts } from '@/hools/useSortedPosts';
import { useSortedAndSearchPosts } from '@/hools/useSortedAndSearchPosts';
import { ref } from 'vue';
export default {
	components: { PostForm, PostList, PagesNav },
	data() {
		return {
			options: [
				{ value: 'title', name: 'Sort by title' },
				{ value: 'body', name: 'Sort by body' },
			],
		};
	},
	setup(props) {
		const { posts, isPostsLoading, totalPages } = usePosts(10);
		const { selectValue, sortedPosts } = useSortedPosts(posts);
		const { searchQwery, sortedAndSearchPosts } =
            useSortedAndSearchPosts(sortedPosts);
        const dialogVisible = ref(false)
        const createPost =(newPost) => {
			posts.value.push(newPost);
			dialogVisible.value = false;
		}
		return {
			posts,
			isPostsLoading,
			totalPages,
			selectValue,
			sortedPosts,
			searchQwery,
            sortedAndSearchPosts,
            createPost,
            dialogVisible
		};
	},
};
</script>

<style scoped>
.navbar {
	display: flex;
	padding: 10px;
	gap: 15px;
}
</style>
