/** @format */

import axios from 'axios'

export const postModule = {
	state: () => ({
		posts: [],
		isPostsLoading: true,
		page: 1,
		selectValue: '',
		searchQwery: '',
		limit: 10,
		totalPages: 0,
		options: [
			{ value: 'title', name: 'Sort by title' },
			{ value: 'body', name: 'Sort by body' },
		],
	}),
	getters: {
		sortedPost(state) {
			return [...state.posts].sort((first, second) => {
				return first[state.selectValue]?.localeCompare(
					second[state.selectValue]
				);
			});
		},
		sortedAndSearchPost(state, getters) {
			return getters.sortedPost.filter((item) => {
				return item.title
					?.toLocaleLowerCase()
					?.includes(state.searchQwery?.toLocaleLowerCase());
			});
		},
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts;
		},
		setLoading(state, bool) {
			state.isPostsLoading = bool;
		},
		setPage(state, page) {
			state.page = page;
		},
		setSelectValue(state, value) {
			state.selectValue = value;
		},
		setSearchQwery(state, qwery) {
			state.searchQwery = qwery;
		},
		setTotalPages(state, value) {
			state.totalPages = value;
		},
	},
	actions: {
		async fetchPosts({ state, commit }) {
			setTimeout(async () => {
				try {
					commit('setLoading', true);
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/posts',
						{
							params: {
								_page: state.page,
								_limit: state.limit,
							},
						}
					);
					commit(
						'setTotalPages',
						Math.ceil(
							response.headers['x-total-count'] / state.limit
						)
					);
					commit('setPosts', response.data);
				} catch (error) {
					console.log(error);
				} finally {
					commit('setLoading', false);
				}
			}, 500);
		},
		async loadMorePosts({ state, commit }) {
			setTimeout(async () => {
				try {
					commit('setPage', state.page + 1);
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/posts',
						{
							params: {
								_page: state.page,
								_limit: state.limit,
							},
						}
					);
					commit(
						'setTotalPages',
						Math.ceil(
							response.headers['x-total-count'] / state.limit
						)
					);
					commit('setPosts', [...state.posts, ...response.data]);
				} catch (error) {
					console.log(error);
				} finally {
					commit('setLoading', false);
				}
			}, 500);
		},
    },
    namespaced: true
};
