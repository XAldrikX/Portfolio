<template>
    <div class="wrapper">
        <section class="one">
            <div class="presentation">
                <img class="presentation-background" src="../assets/teste.jpg" alt="Notebook encima de uma mesa de trabalho, com plantas e um abajur"/>
                <div class="presentation-text">
                    <h1>Hey, I'm Nicolas <br> Bortoli and I <br> love building <br> beautiful websites</h1>
                    <button class="btn-about-me">
                        <router-link to="/about">ABOUT ME</router-link>
                    </button>
                </div>
            </div>
        </section>

        <section class="two">
            <!-- Mudar about me para portifolio -->
            <div class="about-me">
                <img class="about-me-background" src="../assets/background-about-me.jpg" alt="Bloco de notas e um tablet">
                <div class="about-me-text">
                    <h2>About me</h2>
                    <p>I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean 
                        JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in London, UK, but I'm happy working remotely 
                        and have experience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or cycling. I'd love 
                        you to check out my work.
                    </p>
                    <button class="btn-portifolio">
                        <router-link to="/portifolio">GO TO PORTFOLIO</router-link>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    components: {
        
    }
}
</script>

<style scoped>
    .presentation {
        max-width: 1110px;
        margin: 0 auto;
        position: relative;
    }
    .about-me {
        max-width: 1110px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .two {
        margin-top: 150px;
    }
    .presentation-background {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
        object-position: bottom;
        border-radius: 5px;
    }
    .about-me-background {
        width: 50%;
        max-height: 600px;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
    }
    .presentation-text {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 60%;
        background-color: var(--VeryLightGray);
        position: absolute;
        bottom: 0;
        left: 0;
        -webkit-border-top-right-radius: 10px;
        -moz-border-radius-topright: 10px;
        border-top-right-radius: 10px;
    }
    .about-me-text {
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }
    .about-me-text > p {
        width: 350px;
    }
    .about-me-text > h2 {
        margin: 50px 0 28px 0;
    }
    .presentation-text > h1 {
        line-height: 50px;
        margin-top: 50px;
        letter-spacing: -0.45px;
    }
    .btn-about-me {
        width: 200px;
        height: 48px;
        margin-top: auto;
        background-color: var(--DarkBlue);
    }
    .btn-about-me > a {
        color: var(--VeryLightGray);
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 2px;
    }
    .btn-portifolio {
        width: 200px;
        height: 48px;
        margin-top: 30px;
        border: 1px solid var(--DarkBlue);
        background-color: transparent;
    }
    .btn-portifolio > a {
        text-decoration: none;
        color: var(--DarkBlue);
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
    }
</style>
