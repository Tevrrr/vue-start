<template>
    <div class="post" :key="post.id">
        <div><strong>Title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
        <my-button @click="$emit('remove', post)"> Delete</my-button>
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-top: 15px;
    padding: 15px;
    border: 2px solid cadetblue;
}
</style>