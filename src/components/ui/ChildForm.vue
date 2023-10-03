<script>
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: 'ChildForm',
    components: {BaseForm, BaseButton},
    methods:{
        remove() {
            this.$emit('remove', this.value)
        }
    },
    props: {
        value: {
            type: Object
        }
    },
    data() {
        return{
            valueLocal: this.value,
            error: false
        }
    }
}
</script>

<template>
    <div class="child-form">
        <BaseForm 
            label="Имя"
            v-model="valueLocal.name"
            type="text"
            required
        />
        <BaseForm 
            label="Возраст"
            v-model="valueLocal.age"
            type="number"
            required
        />
        <BaseButton 
            label="Удалить"
            severity="primary"
            text
            @click="remove()"
        />
    </div>
</template>
