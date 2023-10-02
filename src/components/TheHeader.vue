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
                        <router-link to="/form" class="menu__link" >
                            Форма
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/preview" class="menu__link" >
                            Превью
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="header__menu-icon" @click="toggleMenu" :class="{ '_active': isMenuOpen }"><span></span></div>
            <div class="header__filler">

            </div>
        </div>
    </header>
</template>

<script>
    export default {
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
        },
        watch: {
            '$route' () {
                this.isMenuOpen = false
                document.body.classList.remove('_lock');
            }
        }
    }
</script>