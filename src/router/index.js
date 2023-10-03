import { createRouter, createWebHistory } from 'vue-router'
import FormPage from "@/pages/FormPage.vue";
import PreviewPage from "@/pages/PreviewPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'FormPage',
        component: FormPage,
        alias: '/form'
    },
    {
        path: '/preview',
        name: 'Preview',
        component: PreviewPage
    }
  ]
})

export default router
