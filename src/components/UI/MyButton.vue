<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'my-button'
}
</script>
<style scoped>
.btn {
    padding-top: 30px;
    padding: 10px 20px;
    background: none;
    border: 2px solid cadetblue;
    font-weight: 700;
    font-size: 16px;
    color: cadetblue;
    cursor: pointer;
    transition: all 0.15s;
}

.btn:hover {
    opacity: 60%;
}
</style>