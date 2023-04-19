<!-- @format -->

<template>
	<form class="createPostForm">
		<h4>Create a new post</h4>
		<input
			v-bind:value="title"
            @input="title = $event.target.value"
			class="input"
			type="text"
			placeholder="Title"
		/>
		<input
			v-bind:value="description"
            @input="description = $event.target.value"
			class="input"
			type="text"
			placeholder="Description"
		/>
		<button class="btn" @click="createPost">Create</button>
	</form>
	<div class="post" v-for="post in posts">
		<div><strong>Title:</strong> {{ post.titel }}</div>
		<div><strong>Description:</strong> {{ post.body }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{
					id: 1,
					titel: 'JS 0',
					body: 'JS is a universal programming language',
				},
				{
					id: 2,
					titel: 'JS 1',
					body: 'JS is a universal programming language',
				},
				{
					id: 3,
					titel: 'JS 2',
					body: 'JS is a universal programming language',
				},
				{
					id: 4,
					titel: 'JS 3',
					body: 'JS is a universal programming language',
				},
			],
			title: '',
			description: '',
		};
	},
	methods: {
		createPost() {
			this.likes += 1;
        },
        // inputTitle(event) {
        //     this.title = event.target.value
        // },
        // inputDescription(event) {
        //     this.description = event.target.value
        // },
	},
};
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

.createPostForm {
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
}

.btn {
	align-self: flex-end;
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

.input {
	font-size: 16px;
	padding: 10px;
	border: 2px solid cadetblue;
	width: 100%;
}

.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid cadetblue;
}
</style>
