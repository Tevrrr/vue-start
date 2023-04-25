<!-- @format -->

<template>
	<div class="pageNav">
		<div
			:key="page"
			class="page"
			:class="{ activePage: page === modelValue }"
			@click="changePage(page)"
			v-for="page in totalPages"
		>
			{{ page }}
		</div>
	</div>
</template>
<script>
export default {
	props: {
		totalPages: { type: Number },
		modelValue: { type: Number },
	},
	methods: {
		changePage(value) {
			this.$emit('update:modelValue', value);
		},
	},
};
</script>
<style scoped>
.pageNav {
	width: 100%;
	font-size: 20px;
	display: flex;
	justify-content: center;
	gap: 7px;
	padding: 10px;
}

.page,
.activePage {
	cursor: pointer;
}
.activePage {
	cursor: default;
	color: cadetblue;
}
</style>
