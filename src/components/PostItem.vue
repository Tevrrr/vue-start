<template>
    <div class="post" :key="post.id">
        <div><strong>Title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
        <div class="btn_panel">
            <my-button @click="$router.push(`/posts/${post.id}`)"> Open</my-button>
            <my-button @click="$emit('remove', post)"> Delete</my-button>
        </div>
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
.btn_panel{
    display: flex;
    gap: 10px;
}
</style>