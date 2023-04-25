<template>
	<div>
		<nav class="navbar">
			<my-button @click="dialogVisible = !dialogVisible">
				Create Post</my-button
			>
			<my-select v-model="selectValue" :options="options"></my-select>
			<my-input v-model="searchQwery" type="text" placeholder="Search" />
		</nav>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<!-- <post-list v-if="!isPostsLoading" :posts="posts" @remove="deletePost" /> -->
		<div v-if="!isPostsLoading">
			<post-list :posts="sortedAndSearchPost" @remove="deletePost" />
			<!-- <pages-nav v-model="page" :totalPages="totalPages"/> -->
		</div>
		<h4 v-else>Loading...</h4>
		<div ref="observer"></div>
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import PagesNav from '@/components/PagesNav.vue';
import axios from 'axios';
export default {
	components: { PostForm, PostList, PagesNav },
	data() {
		return {
			posts: [],
			limit: 10,
			page: 1,
			totalPages: 0,
			dialogVisible: false,
			isPostsLoading: true,
			selectValue: '',
			searchQwery: '',
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
						'https://jsonplaceholder.typicode.com/posts',
						{
							params: {
								_page: this.page,
								_limit: this.limit,
							},
						}
					);
					this.totalPages = Math.ceil(
						response.headers['x-total-count'] / this.limit
					);
					this.posts = response.data;
				} catch (error) {
					console.log(error);
				} finally {
					this.isPostsLoading = false;
				}
			}, 500);
		},
		async loadMorePosts() {
			setTimeout(async () => {
                try {
                    this.page++;
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/posts',
						{
							params: {
								_page: this.page,
								_limit: this.limit,
							},
						}
					);
					this.posts = [...this.posts, ...response.data] ;
				} catch (error) {
					console.log(error);
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
		const options = {
			rootMargin: '0px',
			threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && !this.isPostsLoading && this.page < this.totalPages) {
                console.log(1);
                this.loadMorePosts();
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
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
	// watch: {
	//     selectValue(newValue) {
	//         this.posts.sort((first, second) => {
	//             return first[this.selectValue].localeCompare(second[this.selectValue])
	//         })
	//     },
	// }
	// watch: {
	//     page() {
	//         this.fetchPosts();
	//     }
	// }
};
</script>

<style scoped>


.navbar {
	display: flex;
	padding: 10px;
	gap: 15px;
}
</style>