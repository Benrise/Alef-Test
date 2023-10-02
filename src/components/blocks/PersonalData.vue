<template>
    <main-block title="Персональные данные">
        <template v-slot:form>
            <BaseForm label="Имя" />
            <BaseForm label="Возраст" />
        </template>
      <BaseForm label="Возраст" />
    </main-block>

    <main-block title="Дети (макс. 5)">
        <template v-slot:button>
            <BaseButton 
                label="Добавить"
                @click="clickButton"
                :isDisabled="false"
                leftIcon='add'
                severity="primary"
                outline
            />
        </template>
        
      <BaseForm label="Возраст" />
    </main-block>
  </template>

<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
    name: "PersonalData",
    components: {BaseForm, MainBlock, BaseButton},
    methods:{
        clickButton(){
            console.log('Clicked!')
        }
    }
}
</script>