<template>
    <div class="form" :class="{ filled: value }">
        <label 
            for="form-input" 
            class="form__label">
        {{ label }}
        </label>
        
        <input 
            id="form-input" 
            class="form__input"
            v-model="inputValue"
            @input="handleChange"
        >
        
    </div>
</template>

<script>
export default {
    props: {
        label: String,
    },
    data() {
        return {
            value: '',
        };
    },
    methods: {
        handleChange(event) {
            this.value = event.target.value;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>