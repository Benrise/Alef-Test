<script>
import BaseButton from "@/components/ui/BaseButton.vue";

    export default {
        components: {BaseButton},
        data() {
            return {
                isMenuOpen: false,
            }
        },
        methods: {
            toggleMenu() {
                document.body.classList.toggle('_lock');
                this.isMenuOpen = !this.isMenuOpen;
            },
            clearStorage(){
                localStorage.clear();
                history.go(0);
            }
        },
        watch: {
            '$route' () {
                this.isMenuOpen = false
                document.body.classList.remove('_lock');
            }
        },
        
    }
</script>

<template>
    <header class="header">
        <div class="header__container">
            <router-link to="/" class="header__logo">
                <img
                        src="/svg/logo/logo-shape.svg"
                        class="header__shape-logo"
                        alt="Alef Shape Logo"
                />
                <img
                        src="/svg/logo/logo-text.svg"
                        class="header__text-logo"
                        alt="Alef Text Logo"
                />
            </router-link>
            <nav class="header__menu menu" :class="{ '_active': isMenuOpen }">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/form" class="menu__link" :class="{ 'menu__link_active': $route.path === '/form'}">
                            Форма
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/preview" class="menu__link" :class="{ 'menu__link_active': $route.path === '/preview' }">
                            Превью
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="header__menu-icon" @click="toggleMenu" :class="{ '_active': isMenuOpen }"><span></span></div>
            <div class="header__filler">
                <BaseButton
                    leftIcon="update"
                    severity="default"
                    text
                    @click="clearStorage()"
                />
            </div>
        </div>
    </header>
</template>