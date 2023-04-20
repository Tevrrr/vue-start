<template>
    <form @submit.prevent class="createPostForm">
        <h4>Create a new post</h4>
        <my-input v-model="post.title" type="text" placeholder="Title" />
        <my-input v-model="post.body" type="text" placeholder="Body" />
        <my-button class="btn" @click="createPost">Create</my-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        };
    },
    methods: {
        createPost() {
            this.post.id= Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body:''
            };

        },
    },
    watch: {
        post: {
            handler(newValue) {
                console.log(newValue);
            },
            deep:true
        }
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






</style>