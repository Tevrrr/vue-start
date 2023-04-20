<template>
    <input :value="modelValue" @input="updateInput" class="input" />
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.input {
    font-size: 16px;
    padding: 10px;
    border: 2px solid cadetblue;
    width: 100%;
}
</style>