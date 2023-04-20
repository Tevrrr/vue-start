<!-- @format -->

<template>
	<div>
		<nav class="navbar">
			<my-button @click="dialogVisible = !dialogVisible">
				Create Post</my-button
			>
			<my-select v-model="selectValue" :options="options"></my-select>
		</nav>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<!-- <post-list v-if="!isPostsLoading" :posts="posts" @remove="deletePost" /> -->
		<post-list v-if="!isPostsLoading" :posts="sortedPost" @remove="deletePost" />
		<h4 v-else>Loading...</h4>
	</div>
</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';
import axios from 'axios';
export default {
	components: { PostForm, PostList },
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: true,
			selectValue: '',
			options: [
				{ value: 'title', name: 'Sort by title' },
				{ value: 'body', name: 'Sort by body' },
			],
		};
	},
	methods: {
		createPost(newPost) {
			this.posts.push(newPost);
			this.dialogVisible = false;
		},
		deletePost(post) {
			this.posts = this.posts.filter((item) => item.id !== post.id);
		},
		updateSelect(value) {
			this.selectValue = value;
		},
		async fetchPosts() {
			setTimeout(async () => {
				try {
					this.isPostsLoading = true;
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/posts?_limit=10'
					);
					this.posts = response.data;
				} catch (error) {
					console.log(error);
				} finally {
					this.isPostsLoading = false;
				}
			}, 500);
		},
		// inputTitle(event) {
		//     this.title = event.target.value
		// },
		// inputDescription(event) {
		//     this.description = event.target.value
		// },
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		sortedPost() {
			return [...this.posts].sort((first, second) => {
				return first[this.selectValue]?.localeCompare(
					second[this.selectValue]
				);
			});
		},
	},
	// watch: {
	//     selectValue(newValue) {
	//         this.posts.sort((first, second) => {
	//             return first[this.selectValue].localeCompare(second[this.selectValue])
	//         })
	//     },
	// }
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

.navbar {
	display: flex;
	padding: 10px;
	gap: 15px;
}
</style>
