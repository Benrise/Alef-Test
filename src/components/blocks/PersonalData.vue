<template>
    <main-block title="Персональные данные">
        <template v-slot:elements>
            <BaseForm 
                label="Имя"
                v-model="userData.name"
            />
            <BaseForm 
                label="Возраст"
                v-model="userData.age"
            />
        </template>
    </main-block>

    <main-block title="Дети (макс.&nbsp;5)">
        <template v-slot:header-button>
            <BaseButton 
                label="Добавить"
                @click="clickButton"
                :isDisabled="false"
                leftIcon='add'
                severity="primary"
                outline
            />
        </template>
        <template v-slot:elements>
            <template v-for="(child, index) in childrenData" :key="index">
                <ChildForm
                    :value="child"
                />
            </template>
        </template>
        <template v-slot:footer-button>
            <BaseButton 
                label="Сохранить"
                @click="clickButton"
                :isDisabled="false"
                severity="primary"
            />
        </template>
    </main-block>
  </template>

<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import ChildForm from "@/components/ui/ChildForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
    name: "PersonalData",
    components: {BaseForm, MainBlock, BaseButton, ChildForm},
    methods:{
        clickButton(){
            console.log('Added!')
        }
    },
    data(){
        return {
            childrenData: [
                {
                    name: 'Пётр',
                    age: '10'
                },
                {
                    name: 'Василий',
                    age: '14'
                }
            ],
            userData: {
                name: '',
                age: ''
            },
        }
    }
}
</script>