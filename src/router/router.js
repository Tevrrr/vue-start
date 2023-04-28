/** @format */

import PostPage from '@/pages/PostPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
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
		path: '/posts/:id',
		component: PostIdPage,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/store',
		component: PostPageWithStore,
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(),
});
export default router;
