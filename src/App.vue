<!-- @format -->

<template>
	<div class="app">
        <navbar></navbar>
        <router-view></router-view>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

</style>
