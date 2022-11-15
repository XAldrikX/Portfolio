<template>
    <main>
        <section v-for="project in data.projects" :key="project.id" class="project">
            <div class="left" v-if="project.position === 'left'">
                <img class="left-img" :src='project.img' alt="website with charts, metrics and alikes">
                <h1 class="left-text">{{ project.title }}</h1>
                <p>{{ project.description }}</p>
            </div>

            <div class="right" v-else>
                <h1 class="right-text">{{ project.title }}</h1>
                <img class="right-img" :src="project.img" alt="website with charts, metrics and alikes">
                <p>{{ project.description }}</p>
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
    .left {
        color: red;
    }
    .right {
        color: blue;
    }
</style>