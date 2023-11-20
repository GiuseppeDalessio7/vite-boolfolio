import { createRouter, creaWebHashHistory } from 'vue-router';


import AppHome from './views/AppHome.vue';
import AppProjects from './views/AppProjects.vue';



const router = createRouter(
    {
        history: createWebHashHistorry(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome,
            },

            {
                path: '/projects',
                name: 'projects',
                component: AppProjects,
            },
        ]
    });


export { router }