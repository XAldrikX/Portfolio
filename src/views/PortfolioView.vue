<template>
    <main>
        <section v-for="project in data.projects" :key="project.id" class="project">
            <div class="left" v-if="project.position === 'left'">
                <img class="left-img" :src='require(`@/assets/projects/${project.img}`)' alt="website with charts, metrics and alikes">
                <div class="left-text-wrapper">
                    <h1 class="left-text">{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                    <!-- <router-linK> -->
                        <button class="btn-view-project">VIEW PROJECT</button>
                    <!-- </router-linK> -->
                </div>
            </div>

            <div class="right" v-else>
                <div class="right-text-wrapper">
                    <h1 class="right-text">{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                    <!-- <router-linK> -->
                        <button class="btn-view-project">VIEW PROJECT</button>
                    <!-- </router-linK> -->
                </div>
                <img class="right-img" :src="require(`@/assets/projects/${project.img}`)" alt="website with charts, metrics and alikes">
            </div>
        </section>
    </main>
</template>

<script>
    import projects from '../projects.json';

    export default {
        name: "PortfolioView",
        data() {
            return {
                data: projects,
            }
        }
    }
</script>

<style scoped>
    main {
        padding-bottom: 1px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #33323D;
        mix-blend-mode: normal;
        opacity: 0.8;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .left-text,
    .right-text {
        letter-spacing: 0.3px;
        margin-bottom: 28px;
    }
    .left,
    .right {
        display: flex;
        justify-content: space-between;
        max-width: 1015px;
        height: auto;
    }
    .left {
        margin: 0 265px 80px auto;
    }
    .right {
        margin: 0 auto 80px 265px;
    }
    img {
        max-width: 550px;
    }
    .left-text-wrapper,
    .right-text-wrapper {
        max-width: 350px;
        margin: auto 0;
        padding: 6rem 0;
        border-top: 1px solid var(--LightGray);
        border-bottom: 1px solid var(--LightGray);
    }
    .btn-view-project {
        width: 175px;
        height: 48px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
        margin-top: 25px;
        cursor: pointer;
        border: 1px solid var(--GrayDarkBlue);
        background-color: var(--VeryLightGray);
        transition: background-color .2s ease-in-out;
    }
    .btn-view-project:hover,
    .btn-view-project:focus {
        background-color: var(--GrayDarkBlue);
        color: var(--VeryLightGray);
    }

    @media (max-width: 1200px) {
        img {
            max-width: 339px;
            padding: 2.875rem 0;
        }
        .left {
            margin: 0;
            padding: 2.5rem 0;
        }
        .right {
            margin: 0;
            padding: 2.5rem 0;
        }
        .left-text-wrapper,
        .right-text-wrapper {
            padding: 2.875rem 0;
        }
        .left-img {
            margin-right: 2.5rem;
        }
        .right-img {
            margin-left: 2.5rem;
        }
    }
    @media(max-width: 700px) {
        img {
            width: 100%;
        }
        .left,
        .right {
            display: flex;
            flex-direction: column;
            padding: 0;
        }
        .left-img {
            margin: 0 auto;
        }
        .right-img {
            display: flex;
            margin: 0 auto;
            order: 1;
        }
        .right-text-wrapper {
            display: flex;
            flex-direction: column;
            order: 2;
        }
        .left-text-wrapper,
        .right-text-wrapper {
            margin: 0 auto;
        }
    }
</style>