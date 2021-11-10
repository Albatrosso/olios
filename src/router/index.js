import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import GuiPage from '../views/GuiPage.vue';
import CartPage from '../views/CartPage.vue';
import CatalogPage from '../views/CatalogPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '*',
		name: '404',
		component: NotFoundPage
	},
	{
		path: '/gui',
		name: 'gui',
		component: GuiPage
	},
	{
		path: '/cart',
		name: 'Cart',
		component: CartPage
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: CatalogPage
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
