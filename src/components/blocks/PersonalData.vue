<template>
    <section class="main-block">
        <div class="main-block__container">
            <div class="main-block__title">
                Персональные данные
            </div>
            <div class="main-block__forms">
                <BaseForm
                    :label="'Имя'"
                />
                <BaseForm
                    :label="'Возраст'"
                />
            </div>
        </div>
    </section>
</template>

<script>

import BaseForm from "@/components/ui/BaseForm.vue";
export default {
    name: "PersonalData",
    components: {BaseForm},
}
</script>