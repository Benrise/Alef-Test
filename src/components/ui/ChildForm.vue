<template>
    <div class="child-form">
        <BaseForm label="Имя"/>
        <BaseForm label="Возраст"/>
        <BaseButton 
                label="Удалить"
                @click="clickButton"
                severity="primary"
                text
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
        clickButton(){
            console.log('Deleted!')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>