<template>
    <footer>
        <div class="flex-wrapper">
            <section class="router-wrapper">
                <router-link class="links" to="/">Home</router-link>
                <router-link class="links" to="/portfolio">Portfolio</router-link>
                <router-link class="links" to="/contact">Contact me</router-link>
            </section>
            <section class="icons-wrapper">
                <a href="#"><GitHub color="#FFF" color_2="#33323D" class="github" /></a>
                <a href="#"><Twitter color="#FFF" class="twitter" /></a>
                <a href="#"><LinkedIn color="#FFF" class="linkedin" /></a>
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
        font-size: 0.85rem;
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
    .github,
    .twitter,
    .linkedin {
        transition: transform .5s;
        transform: translateY(0) scale(1);
    }
    .github:hover,
    .twitter:hover,
    .linkedin:hover {
        transform: translateY(-7px) scale(1.2);
    }

    @media(max-width: 1200px) {
        footer {
            padding: 2rem 2.5rem 2rem 2.5rem;
        }
    }
    @media(max-width: 700px) {
        .flex-wrapper {
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 310px;
        }
        .router-wrapper {
            flex-direction: column;
        }
        .links {
            margin-bottom: 2rem;
        }
        .icons-wrapper {
            display: inline-block;
        }
        footer a {
            margin-right: 0px;
        }
        .icons-wrapper a {
            margin-right: 25px;
        }
        .icons-wrapper a:last-child {
            margin-right: 0;
        }
    }
</style>