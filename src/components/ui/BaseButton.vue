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
                'button_disabled': this.isDisabled,
                'button_primary': this.severity === 'primary' && !this.outline,
                'button_outline-primary': this.severity === 'primary' && this.outline,
            };
        }
    }

}
</script>
