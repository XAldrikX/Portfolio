<template>
    <div class="contact-me-wrapper">
        <section class="one">
            <h2>Get in Touch</h2>
            <div class="contact-me-text-wrapper">
                <p>
                    I'd love to hear about what you're working on and how I could help. I'm currently looking for a 
                    new role and am open to a wide range of opportunities. My preference would be to find a position 
                    in a company in London. But I'm also happy to hear about opportunites that don't fit that description. 
                    I'm a hard-working and positive person who will always approach each task with a sense of purpose and 
                    attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
                </p>
                <div class="social-media-icons">
                    <a href="#"><GitHub color="#33323D" color_2="#FFF" class="github" /></a>
                    <a href="#"><Twitter color="#33323D" class="twitter" /></a>
                    <a href="#"><LinkedIn color="#33323D" class="linkedin" /></a>
                </div>
            </div>
        </section>

        <section class="two">
            <h2>Contact Me</h2>
            <form class="form-send-contact">
                <label for="name">Name</label>
                <input type="text" id="name">

                <label for="email">Email Address</label>
                <input type="email" id="email">

                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="How can I help?"></textarea>

                <button class="btn-send">Send Message</button>
            </form>
        </section>
    </div>
</template>

<script>
    import GitHub from '../components/icons/GitHub.vue';
    import Twitter from '../components/icons/Twitter.vue';
    import LinkedIn from '../components/icons/LinkedIn.vue';

    export default {
        name: 'ContactView',
        components: {
            GitHub,
            Twitter,
            LinkedIn
        }
    }
</script>

<style scoped>
    .one,
    .two {
        display: flex;
        justify-content: space-between;
        max-width: 1110px;
        margin: 0 auto;
        padding-top: 4rem;
        padding-bottom: 2rem;
    }
    .one {
        border-top: 2px solid var(--LightGray);
        border-bottom: 1px solid var(--LightGray);
    }
    .two {
        border-top: 1px solid var(--LightGray);
        border-bottom: 2px solid var(--LightGray);
    }
    .contact-me-text-wrapper {
        max-width: 635px;
    }
    .contact-me-text-wrapper > p {
        font-size: 1rem;
        line-height: 30px;
        color: #33323D;
        mix-blend-mode: normal;
        opacity: 0.8;
        margin-bottom: 1.563rem;
    }
    .social-media-icons > a {
        margin-right: 15px;
    }
    .form-send-contact {
        display: flex;
        flex-direction: column;
        max-width: 635px;
        width: 635px;
    }
    .form-send-contact > input {
        height: 50px;
        background-color: var(--LightGray);
        border: none;
        padding: 10px;
        margin-bottom: 25px;
    }
    .form-send-contact > label {
        margin-bottom: 15px;
    }
    textarea {
        height: 100px;
        background-color: var(--LightGray);
        border: none;
        padding: 10px;
        resize: none;
    }
    .btn-send {
        max-width: 200px;
        width: 200px;
        height: 48px;
        background-color: var(--DarkBlue);
        color: var(--VeryLightGray);
        margin: 25px 0 105px 0;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color .2s ease-in-out;
        border: none;
    }
    .btn-send:hover {
        background-color: var(--Cyan);
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
        .one,
        .two {
            display: block;
            padding-top: 2rem;
            padding-bottom: 1rem;
        }
        h2 {
            padding-bottom: 1.5rem;
        }
    }
    @media(max-width: 700px) {
        .form-send-contact {
            max-width: 650px;
            width: 100%;
        }
    }
    @media(max-width: 400px) {
        .form-send-contact {
            max-width: 350px;
            width: 100%;
        }
    }
</style>