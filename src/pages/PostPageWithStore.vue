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
			<!-- <my-select v-model="selectValue" :options="options"></my-select> -->
			<!-- <my-input v-focus v-model="searchQwery" type="text" placeholder="Search" /> -->
		</nav>
		<!-- <my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog> -->
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
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	components: { PostForm, PostList, PagesNav },
	data() {
		return {

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
	},
	mounted() {
        // this.fetchPosts();

	},
	computed: {
		sortedPost() {
			return [...this.posts].sort((first, second) => {
				return first[this.selectValue]?.localeCompare(
					second[this.selectValue]
				);
			});
		},
		sortedAndSearchPost() {
			return this.sortedPost.filter((item) => {
				return item.title
					?.toLocaleLowerCase()
					?.includes(this.searchQwery?.toLocaleLowerCase());
			});
		},
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