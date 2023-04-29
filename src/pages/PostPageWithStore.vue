<!-- @format -->

<template>
	<div>
		<!-- <h1>{{ $store.state.isAuth ? 'User is authorized' : 'User is not authorized' }}</h1>
        <h1>{{ $store.state.likes }}</h1>
        <h1>{{ $store.getters.doubleLikes }}</h1>
        <div>
            <my-button @click="$store.commit('incrementLikes')">+</my-button>
            <my-button @click="$store.commit('decrementLikes')">-</my-button>
        </div> -->
		<nav class="navbar">
			<my-button @click="dialogVisible = !dialogVisible">
				Create Post</my-button
			>
			<my-select :model-value="selectValue" @update:model-value="setSelectValue" :options="options"></my-select>
			<my-input v-focus :model-value="searchQwery" @update:model-value="setSearchQwery" type="text" placeholder="Search" />
		</nav>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<div v-if="!isPostsLoading">
			<post-list :posts="sortedAndSearchPost" @remove="deletePost" />
		</div>
		<h4 v-else>Loading...</h4>
		<div v-intersections="loadMorePosts"></div>
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import PagesNav from '@/components/PagesNav.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
	components: { PostForm, PostList, PagesNav },
	data() {
		return {
			dialogVisible: false,
		};
	},
	methods: {
		...mapMutations({
            setPage: 'post/setPost',
            setSearchQwery: 'post/setSearchQwery',
            setSelectValue: 'post/setSelectValue'
		}),
		...mapActions({
			loadMorePosts: 'post/loadMorePosts',
			fetchPosts: 'post/fetchPosts',
		}),
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
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		...mapState({
			posts: (state) => state.post.posts,
			isPostsLoading: (state) => state.post.isPostsLoading,
			page: (state) => state.post.page,
			selectValue: (state) => state.post.selectValue,
			searchQwery: (state) => state.post.searchQwery,
			limit: (state) => state.post.limit,
			totalPages: (state) => state.post.totalPages,
			options: (state) => state.post.options,
		}),
		...mapGetters({
			sortedPost: 'post/sortedPost',
			sortedAndSearchPost: 'post/sortedAndSearchPost',
		}),
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
