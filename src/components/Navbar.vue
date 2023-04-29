<!-- @format -->

<template>
	<nav class="navbar">
		<router-link class="nav_item" to="/">Home</router-link>
		<router-link class="nav_item" to="/posts">Posts</router-link>
		<router-link class="nav_item" to="/about">About</router-link>composition
		<router-link class="nav_item" to="/store">Store</router-link>
		<router-link class="nav_item" to="/composition">Composition</router-link>
	</nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar{
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 7px;
}
.nav_item{
    color: black;
    text-decoration: none;
}
</style>
