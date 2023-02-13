<template>
    <header>
        <button class="mobile-menu-btn" @click="open_close_menu()">
            <Menu v-if="!menu" />
            <Close v-else />
        </button>
        <div class="mobile-menu" v-show="menu">
            <nav class="nav-wrapper">
                <router-link to="/">Home</router-link>
                <router-link to="/portfolio">Portfolio</router-link>
                <router-link to="/contact">Contact me</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    import Menu from '../components/icons/Menu.vue';
    import Close from '../components/icons/Close.vue'

    export default {
        name: 'NavBar',
        components: {
            Menu,
            Close
        },
        data() {
            return {
                menu: false,
            }
        },
        methods: {
            open_close_menu() {
                if (!this.menu) {
                    this.menu = true;
                } else {
                    this.menu = false;
                }
            }
        },
        created() {
            if(document.documentElement.clientWidth > 700) {
                this.menu = true;
            } else {
                this.menu = false;
            }
        }
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

    .nav-wrapper a {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--GrayDarkBlue);
        margin-right: 30px;
    }

    .nav-wrapper a:last-child {
        margin-right: 0;
    }

    .nav-wrapper a.router-link-exact-active {
        color: var(--Cyan);
    }

    .mobile-menu-btn {
        display: none;
    }

    @media (max-width: 1200px) {
        header {
            padding: 4rem 2.5rem 3.375rem 2.5rem;
        }
    }

    @media(max-width: 700px) {
        header {
            position: relative;
        }
        .mobile-menu {
            position: absolute;
            background-color: var(--GrayDarkBlue);
            height: 200px;
            top: 100%;
            right: 25px;
            padding: 35px 55px;
            z-index: 2;
        }
        .nav-wrapper {
            flex-direction: column;
            justify-content: center;
            margin-top: 55px;
        }
        .nav-wrapper a {
            margin-right: 0;
            margin-bottom: 25px;
            color: white;
        }
        .mobile-menu-btn {
            position: absolute;
            top: 35%;
            right: 25px;
        }
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
        }
        .disabled {
            display: block;
        }
    }
</style>