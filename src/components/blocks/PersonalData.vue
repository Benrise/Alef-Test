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
                @click="addChild"
                :disabled="canAdd"
                leftIcon='add'
                severity="primary"
                outline
            />
        </template>
        <template v-slot:elements>
            <template v-for="child in childrenData" :key="child.id">
                <ChildForm
                    :value="child"
                    @remove="removeChild(child.id)"
                />
            </template>
        </template>
        <template v-slot:empty-state v-if="childrenData.length === 0">
            <div class="empty-state">
                <div class="empty-state__container">
                    <i class="empty-state__icon material-icons">group_add</i>
                    <h1 class="empty-state__title">Нет детей</h1>
                    <h2 class="empty-state__text">
                        Добавьте детей, чтобы продолжить заполнять информацию о вашей семье.
                        <br>
                        Если вы нечаянно удалили какого-либо ребёнка, не нажимайте кнопку "Сохранить", а обновите страницу.
                    </h2>
                </div>
            </div>
        </template>
        <template v-slot:footer-button>
            <BaseButton 
                label="Сохранить"
                @click="clickButton"
                :disabled="false"
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
        },
        removeChild(childId) {
            const index = this.childrenData.findIndex(child => child.id === childId);
            if (index !== -1) {
                this.childrenData.splice(index, 1);
            }
        },
        addChild() {
        if (this.childrenData.length < 5) {
            const newChild = {
                id: this.childrenData.length, 
                name: '', 
            };
            this.childrenData.push(newChild);
        } else {
            console.log('Достигнут максимальный лимит детей (5)');
        }
    }

    },
    computed:{
        canAdd() {
            return this.childrenData.length === 5
        }
    },
    data(){
        return {
            childrenData: [],
            userData: {
                name: '',
                age: ''
            },
        }
    }
}
</script>