<template>
    <div class="button" 
    :class="buttonClasses"
    >
        <i class="material-icons" v-if="leftIcon">{{leftIcon}}</i>
        <span class="button__label">{{ label }}</span>
        <i class="material-icons" v-if="rightIcon">{{rightIcon}}</i>
    </div>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        label: {
            type: String,
            default: ''
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        leftIcon: {
            type: String,
            default: ''
        },
        rightIcon: {
            type: String,
            default: ''
        },
        severity: {
            type: String,
            default: ''
        },
        outline: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        storage: {
            type: Boolean,
            default: false
        }

        
    },
    data(){
        return {

        }
    },
    methods:{
        click() {
            this.$emit('click')
        }
    },
    computed: {
        buttonClasses(){
            return {
                'button_disabled': this.disabled,
                'button_primary': this.severity === 'primary' && !this.outline,
                'button_outline-primary': this.severity === 'primary' && this.outline,
                'button_text-primary': this.severity === 'primary' && this.text,
                'button_default': this.severity === 'default' && !this.outline,
                'button_outline-default': this.severity === 'default' && this.outline,
                'button_text-default': this.severity === 'default' && this.text,
                'button_storage' : this.storage
            };
        }
    }

}
</script>
