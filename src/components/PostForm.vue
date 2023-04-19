<template>
    <form @submit.prevent class="createPostForm">
        <h4>Create a new post</h4>
        <input v-model="post.title" class="input" type="text" placeholder="Title" />
        <input v-model="post.description" class="input" type="text" placeholder="Description" />
        <my-button class="btn" @click="createPost">Create</my-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                description: '',
            }
        };
    },
    methods: {
        createPost() {
            this.post.id= Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                description:''
            };

        },
    }
}
</script>
<style scoped>
.createPostForm {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}





.input {
    font-size: 16px;
    padding: 10px;
    border: 2px solid cadetblue;
    width: 100%;
}
</style>