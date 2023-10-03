<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
import ChildForm from "@/components/ui/ChildForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import EmptyState from "@/components/blocks/EmptyState.vue";

export default {
    name: "PersonalData",
    components: {BaseForm, MainBlock, BaseButton, ChildForm, EmptyState},
    methods:{
        removeChild(childId) {
            const index = this.children.findIndex(child => child.id === childId);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        },
        addChild() {
            if (this.children.length < 5) {
                const newChild = {
                    id: this.children.length, 
                    name: '', 
                };
                this.children.push(newChild);
            } 
            else {
                console.log('Достигнут максимальный лимит детей (5)');
            }
        },
        saveDataToLocalStorage() {
            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('children', JSON.stringify(this.children));
        },

        loadDataFromLocalStorage() {
            const user = localStorage.getItem('user');
            if (user) {
                this.user = JSON.parse(user);
            }

            const children = localStorage.getItem('children');
            if (children) {
                this.children = JSON.parse(children);
            }
        },

        saveData() {
            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('children', JSON.stringify(this.children));
            this.changes = false;
        },

    },
    computed:{
        canAdd() {
            return this.children.length === 5
        },
    },
    data(){
        return {
            children: [],
            user: {
                name: '',
                age: ''
            },
            errors: [],
            changes: false
        }
    },
    created() {
        this.loadDataFromLocalStorage();
    },
    watch:{
        children: {
            handler(newValue, oldValue){
                if (newValue === oldValue){
                    this.changes = true
                }
            },
            deep: true
        },
        user: {
            handler(newValue, oldValue){
                if (newValue === oldValue){
                    this.changes = true 
                }
            },
            deep: true
        }
    }
}
</script>

<template>
    <form @submit.prevent="saveData()">
        <main-block title="Персональные данные">
            <template v-slot:elements>
                <BaseForm 
                    label="Имя"
                    v-model="user.name"
                    required
                />
                <BaseForm 
                    label="Возраст"
                    v-model="user.age"
                    type="number"
                    required
                />
            </template>
        </main-block>

        <main-block title="Дети (макс.&nbsp;5)">
            <template v-slot:header-button>
                <BaseButton
                    v-if="children.length < 5"
                    label="Добавить"
                    @click="addChild"
                    :disabled="canAdd"
                    leftIcon='add'
                    severity="primary"
                    outline
                />
            </template>
            <template v-slot:elements>
                <template v-for="child in children" :key="child.id">
                    <ChildForm
                        :value="child"
                        @remove="removeChild(child.id)"
                    />
                </template>
            </template>
            <template v-slot:empty-state v-if="children.length === 0">
                <EmptyState icon="group_add">
                    <template v-slot:title>Нет детей</template>
                    <template v-slot:text>
                        Добавьте детей, чтобы заполнить информацию о вашей семье.
                        <br>
                        Если вы случайно удалили ребёнка, не нажимайте кнопку "Сохранить", а обновите страницу.
                    </template>
                </EmptyState>
            </template>
            <template v-slot:footer-button>
                <BaseButton 
                    label="Сохранить"
                    :disabled="!changes"
                    severity="primary"
                    type="submit"
                />
            </template>
        </main-block>
    </form>
  </template>