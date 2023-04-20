<template >
    <div class="postList" v-if="posts.length > 0">
        <h3>Posts</h3>
        <post-item :post="post" :key="post.id" v-for="post in posts" @remove="$emit('remove', post)" />
    </div>
    <h2 v-else>
        Posts not found!
    </h2>
    <!-- Есть еще v-show -->
</template>
<script>
import PostItem from './PostItem.vue';

export default {

    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        a() {
            this.posts.length
        }
    }

}
</script>
<style scoped>
.postList{
    padding: 10px;
}
</style>