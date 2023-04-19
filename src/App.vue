<!-- @format -->

<template>
    <div>
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue';
export default {
    components: { PostForm, PostList },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'JS 0',
                    description: 'JS is a universal programming language',
                },
                {
                    id: 2,
                    title: 'JS 1',
                    description: 'JS is a universal programming language',
                },
                {
                    id: 3,
                    title: 'JS 2',
                    bodescriptiondy: 'JS is a universal programming language',
                },
                {
                    id: 4,
                    title: 'JS 3',
                    description: 'JS is a universal programming language',
                },
            ],
            title: '',
            description: '',
        };
    },
    methods: {
        createPost(newPost) {
            this.posts.push(newPost)
        }
        // inputTitle(event) {
        //     this.title = event.target.value
        // },
        // inputDescription(event) {
        //     this.description = event.target.value
        // },
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
</style>
