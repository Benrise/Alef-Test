<template>
    <div class="child-form">
        <BaseForm 
            label="Имя"
            v-model="valueLocal.name"
        />
        <BaseForm 
            label="Возраст"
            v-model="valueLocal.age"
        />
        <BaseButton 
            label="Удалить"
            severity="primary"
            text
            @click="remove"
        />
    </div>
</template>

<script>
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: 'ChildForm',
    components: {BaseForm, BaseButton},
    methods:{
        remove() {
            this.$emit('remove')
        }
    },
    props: {
        value: {
            type: Object
        }
    },
    data() {
        return{
            valueLocal: this.value
        }
    }
}
</script>
