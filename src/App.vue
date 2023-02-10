<template>
    <NavBar />
    <router-view v-slot="{ Component }" class="body-router-view">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <FooterEl />
</template>

<script>
    import NavBar from '../src/components/NavBar.vue';
    import FooterEl from '../src/components/FooterEl.vue';

    export default {
        name: 'App',
        components: {
            NavBar,
            FooterEl
        }
    }
</script>

<style>
/* Variaveis e resets */

:root {
    --Cyan: #5FB4A2;
    --DarkBlue: #203A4C;
    --GrayDarkBlue: #33323D;
    --VeryLightGray: #FAFAFA;
    --LightGray: #EAEAEB;
    --BrightRed: #F43030;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
}

img {
    max-width: 100%;
    display: block;
}

body {
    max-width: 1440px;
    margin: 0 auto;
    background-color: var(--LightGray);
    scroll-behavior: smooth;
}
/* Tipografia */

h1 {
    font-size: 3.125rem;
    font-weight: 700;
}

h2 {
    font-size: 2.5rem;
    font-weight: 700;
}

h3 {
    font-size: 2rem;
    font-weight: 400;
}

h1, h2, h3 {
    font-family: 'Ibarra Real Nova', serif;
    color: var(--GrayDarkBlue);
}

body {
    font-family: 'Public Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--GrayDarkBlue);
}

/* Layout */

.body-router-view {
    max-width: 1440px;
    height: auto;
    background-color: var(--VeryLightGray);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5 ease-out; 
}

@media(max-width: 1200px) {
    .body-router-view {
        padding: 0 2.5rem 0 2.5rem;;
    }
}
@media(max-width: 800px) {
    .body-router-view {
        padding: 0 1.5rem 0 1.5rem;;
    }
    h1 {
        font-size: 2.5rem;
    }
}

/* Transitions */

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1 ease-in-out;
}
</style>
