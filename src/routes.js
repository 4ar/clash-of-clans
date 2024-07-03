import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';
import ItemView from './pages/ItemView.vue';
import NotFoundView from './pages/NotFoundView';

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/about', name: 'about', component: AboutView },
	{ path: '/:itemAlias', name: 'itemAlias', component: ItemView },
	{ path: '/404', name: '404', component: NotFoundView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
