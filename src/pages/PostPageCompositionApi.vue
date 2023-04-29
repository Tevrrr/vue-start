<!-- @format -->

<template>
	<div>
        {{ likes }}
        <my-button @click="addLike">Add</my-button>
		<!-- <nav class="navbar">
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
			<post-list :posts="sortedAndSearchPost" @remove="deletePost" />
		</div>
		<h4 v-else>Loading...</h4>
		<div v-intersections="loadMorePosts"></div> -->
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import PagesNav from '@/components/PagesNav.vue';
import { ref } from 'vue';
import axios from 'axios';
export default {
	components: { PostForm, PostList, PagesNav },
	data() {
		return {
			dialogVisible: false,
			options: [
				{ value: 'title', name: 'Sort by title' },
				{ value: 'body', name: 'Sort by body' },
			],
		};
	},
	setup(props) {
        const likes = ref(2);

        const addLike = () => {
            likes.value++;
        }

        return {
            likes,
            addLike
        }
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
