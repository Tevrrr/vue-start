<template>
    <div class="post" :key="post.id">
        <div><strong>Title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.description }}</div>
        <my-button> Delete</my-button>
    </div>
</template>
<script>
export default {
    props:{
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid cadetblue;
}
</style>