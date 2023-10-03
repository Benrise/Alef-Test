<template>
     <main-block title="Персональные данные">
        <template v-slot:elements>
            <div class="font-weight-bold">
                {{ userData.name}} <span v-if="!!userData.age">, </span> {{ userData.age}}
            </div>
        </template>
        <template v-slot:empty-state v-if="!userData.name && !userData.age">
            <div class="empty-state">
                <div class="empty-state__container">
                    <i class="empty-state__icon material-icons">person</i>
                    <h1 class="empty-state__title">Нет данных</h1>
                    <h2 class="empty-state__text">
                        Заполните имя и дату рождения на странице <router-link to="/form">Форма</router-link>
                    </h2>
                </div>
            </div>
        </template>
    </main-block>

    <main-block title="Дети">
        <template v-slot:elements>
            <template v-for="(child, index) in childrenData" :key="index">
                <BaseButton
                  :label="`${child.name}, ${child.age} лет`"
                  @click="clickButton"
                  severity="default"
                  storage
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
    </main-block>
</template>

<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
    name: "PreviewData",
    components: { MainBlock, BaseButton},
    data(){
        return {
            userData: {},
            childrenData: []
        }
    },
    methods: {
        loadDataFromLocalStorage() {
            const userData = localStorage.getItem('userData');
            if (userData) {
                this.userData = JSON.parse(userData);
            }

            const childrenData = localStorage.getItem('childrenData');
            if (childrenData) {
                this.childrenData = JSON.parse(childrenData);
            }
        },
    },
    created() {
        this.loadDataFromLocalStorage();
    }

}
</script>
