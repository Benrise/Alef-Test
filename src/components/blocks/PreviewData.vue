<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import EmptyState from "@/components/blocks/EmptyState.vue";

export default {
    name: "PreviewData",
    components: { MainBlock, BaseButton, EmptyState},
    data(){
        return {
            user: {},
            children: []
        }
    },
    methods: {
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
    },
    created() {
        this.loadDataFromLocalStorage();
    }

}
</script>

<template>
     <main-block title="Персональные данные">
        <template v-slot:elements>
            <div class="font-weight-bold">
                {{ user.name}} <span v-if="!!user.age">, </span> {{ user.age}}
            </div>
        </template>
        <template v-slot:empty-state v-if="!user.name && !user.age">
            <div class="empty-state">
                <div class="empty-state__container">
                    <i class="empty-state__icon material-icons">person</i>
                    <h1 class="empty-state__title">Нет данных</h1>
                    <h2 class="empty-state__text">
                        Заполнить данные можно на странице <router-link to="/form">Форма</router-link>
                    </h2>
                </div>
            </div>
        </template>
    </main-block>

    <main-block title="Дети">
        <template v-slot:elements>
            <template v-for="(child, index) in children" :key="index">
                <BaseButton
                  :label="`${child.name}, ${child.age} лет`"
                  @click="clickButton"
                  severity="default"
                  storage
                />
            </template>
        </template>
        <template v-slot:empty-state v-if="children.length === 0">
            <EmptyState icon="group">
                <template v-slot:title>Здесь будут отображаться ваши дети</template>
                <template v-slot:text>
                    Пополнить список детей можно на странице <router-link to="/form">Форма</router-link>
                </template>
            </EmptyState>
        </template>
    </main-block>
</template>
