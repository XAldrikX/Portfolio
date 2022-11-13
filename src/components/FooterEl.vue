<template>
    <footer>
        <div class="flex-wrapper">
            <section class="router-wrapper">
                <router-link to="/">Home</router-link>
                <router-link to="/portifolio">Portifolio</router-link>
                <router-link to="/contact">Contact me</router-link>
            </section>
            <section class="icons-wrapper">
                <a href="#"><GitHub color="#FFF" color_2="#33323D" /></a>
                <a href="#"><Twitter color="#FFF" /></a>
                <a href="#"><LinkedIn color="#FFF" /></a>
            </section>
        </div>
    </footer>
</template>

<script>
    import GitHub from '../components/icons/GitHub.vue';
    import Twitter from '../components/icons/Twitter.vue';
    import LinkedIn from '../components/icons/LinkedIn.vue';

    export default {
        name: 'FooterEl',
        components: {
            GitHub,
            Twitter,
            LinkedIn
        }
    }
</script>

<style scoped>
    footer {
        padding: 2rem 0 2rem 0;
        background-color: var(--GrayDarkBlue);
        max-width: 1440px;
    }
    .flex-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1110px;
    }
    .router-wrapper {
        display: flex;
        justify-content: start;
        align-items: center;
        height: 2rem;
    }
    footer a {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--VeryLightGray);
        margin-right: 30px;
    }
    footer a:last-child {
        margin-right: 0;
    }
    footer a.router-link-exact-active {
        color: var(--Cyan);
    }
</style>