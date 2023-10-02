import { createRouter, createWebHistory } from 'vue-router'
import FormPage from "@/pages/FormPage.vue";
import PreviewPage from "@/pages/PreviewPage.vue";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/form',
        name: 'FormPage',
        component: FormPage
    },
    {
        path: '/preview',
        name: 'Preview',
        component: PreviewPage
    }
  ]
})

export default router
