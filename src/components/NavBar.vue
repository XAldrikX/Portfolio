<template>
    <header>
        <nav class="nav-wrapper">
            <router-link to="/">Home</router-link>
            <router-link to="/portifolio">Portifolio</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
    header {
        padding-top: 4rem;
        padding-bottom: 3.375rem;
        background-color: var(--VeryLightGray);
    }

    .nav-wrapper {
        display: flex;
        justify-content: end;
        align-items: center;
        max-width: 1110px;
        height: 2rem;
        margin: 0 auto;
    }

    nav a {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--GrayDarkBlue);
        margin-right: 30px;
    }

    nav a:last-child {
        margin-right: 0;
    }

    nav a.router-link-exact-active {
        color: var(--Cyan);
    }
</style>