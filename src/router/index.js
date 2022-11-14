import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Nicolas Bortoli',
            metaTags: [
                {
                    name: 'description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                },
                {
                    property: 'og:description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                }
            ]
        }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('../views/PortfolioView.vue'),
        meta: {
            title: 'Nicolas Bortoli | Portfolio',
            metaTags: [
                {
                    name: 'description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                },
                {
                    property: 'og:description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                }
            ]
        },
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
        meta: {
            title: 'Nicolas Bortoli | Contact',
            metaTags: [
                {
                    name: 'description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                },
                {
                    property: 'og:description',
                    content: 'Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário.'
                }
            ]
        },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 20,
                behavior: 'smooth',
            }
        }
    },
    routes
})

router.beforeEach((to, from, next) => {

    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }
  
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    if(!nearestWithMeta) return next();
  
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
  
      tag.setAttribute('data-vue-router-controlled', '');
  
      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  
    next();
  });

export default router
