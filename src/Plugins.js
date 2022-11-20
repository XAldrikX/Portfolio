export default {
    install: (app) => {
        const scrollToTop = () => {
            window.scrollTo(0,0);
        }

        app.provide('scrollToTop', scrollToTop);
    }
}