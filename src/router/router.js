/** @format */

import PostPage from '@/pages/PostPage.vue';
import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/posts',
		component: PostPage,
	},
	{
		path: '/about',
		component: About,
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(),
});
export default router;
