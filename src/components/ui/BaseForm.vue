<template>
    <div class="form" :class="{ filled: modelValue }">
        <label 
            for="form-input" 
            class="form__label">
        {{ label }}
        </label>
        
        <input 
            id="form-input" 
            class="form__input"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
        >
        
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Label'
        },
        modelValue: {
            type: String,
            default: ''
        }
    }
}
</script>