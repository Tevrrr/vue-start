<!-- @format -->

<template>
	<select :value="modelValue" @change="changeOption">
		<option disabled value="">Choose something from the list</option>
		<option
			v-for="option in options"
			:key="option.value"
			:value="option.value"
		>
			{{ option.name }}
		</option>
	</select>
</template>
<script>
export default {
	name: 'my-select',
	props: {
		modelValue: {
			type: String,
		},
		options: {
			type: Array,
			default: () => [],
		},
    },
    methods: {
        changeOption(option) {
            this.$emit('update:modelValue', option.target.value);
        }
    }
};
</script>
<style></style>
