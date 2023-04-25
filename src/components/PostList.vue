<!-- @format -->

<template>
	<div class="postList" v-if="posts.length > 0">
		<h3>Posts</h3>
		<transition-group name="post-list">
			<post-item
				:post="post"
				:key="post.id"
				v-for="post in posts"
				@remove="$emit('remove', post)"
				class="post-list-item"
			/>
		</transition-group>
	</div>
	<h2 v-else>Posts not found!</h2>
	<!-- Есть еще v-show -->
</template>
<script>
import PostItem from './PostItem.vue';

export default {
	components: {
		PostItem,
	},
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	methods: {
		a() {
			this.posts.length;
		},
	},
};
</script>
<style scoped>
.postList {
	padding: 10px;
}
.post-list-item {
	margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
	transition: all .5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>
