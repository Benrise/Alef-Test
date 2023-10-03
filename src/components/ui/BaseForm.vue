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
        },
        type: {
            String,
            default: 'text'
        },
        error: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        formClasses(){
            return {
                'form_filled': this.modelValue,
                'form_error': this.error
            }
        }
    },
    methods:{
        clearError() {
            this.$emit('update:error', false);
        }
    }

}
</script>

<template>
    <div class="form" :class="formClasses">
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
            :type="type"
            @focus="clearError"
            :required="required"
            
        >
    </div>
</template>