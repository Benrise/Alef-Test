<template>
    <main-block :title="'Персональные данные'">
      <BaseForm :label="'Имя'" />
      <BaseForm :label="'Возраст'" />
    </main-block>
  </template>

<script>
import MainBlock from "@/components/blocks/MainBlock.vue";
import BaseForm from "@/components/ui/BaseForm.vue";
export default {
    name: "PersonalData",
    components: {BaseForm, MainBlock},
}
</script>