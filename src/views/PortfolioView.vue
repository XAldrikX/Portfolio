<template>
    <main>
        <section v-for="project in data.projects" :key="project.id" class="project">
            <div class="left" v-if="project.position === 'left'">
                <img class="left-img" :src='require(`../assets/projects/${project.img}`)' alt="website with charts, metrics and alikes">
                <div class="left-text-wrapper">
                    <h1 class="left-text">{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                    <router-linK>
                        <button class="btn-view-project">VIEW PROJECT</button>
                    </router-linK>
                </div>
            </div>

            <div class="right" v-else>
                <div class="right-text-wrapper">
                    <h1 class="right-text">{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                    <router-linK>
                        <button class="btn-view-project">VIEW PROJECT</button>
                    </router-linK>
                </div>
                <img class="right-img" :src="require(`../assets/projects/${project.img}`)" alt="website with charts, metrics and alikes">
            </div>
        </section>
    </main>
</template>

<script>
    import projects from '../../src/projects.json';

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
        padding: 96px 0;
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
</style>