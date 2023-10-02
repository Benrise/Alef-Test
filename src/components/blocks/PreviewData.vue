<template>
     <main-block title="Персональные данные">
        <template v-slot:elements>
            <div class="font-weight-bold">
                {{ userData.name}}, {{ userData.age}}
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
            userData: {
                name: 'Имя (?)',
                age: 'Возраст (?)'
            },
            childrenData: [
                {
                    name: 'Пётр',
                    age: '10'
                },
                {
                    name: 'Василий',
                    age: '14'
                }
            ]
        }
    }

}
</script>
