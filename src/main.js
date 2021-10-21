import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'normalize.css';
import 'pluralize';

//gui
import OlInput from './components/gui/OlInput.vue';
import LeftMenu from './components/gui/LeftMenu.vue';
import RightMenu from './components/gui/RightMenu.vue';

//other
import SearchModal from './components/SearchModal.vue';

//cart
import PromocodeWidget from './components/cart/PromocodeWidget.vue';
import CheckoutWidget from './components/cart/CheckoutWidget.vue';

Vue.config.productionTip = false;

Vue.component('OlInput', OlInput);
Vue.component('LeftMenu', LeftMenu);
Vue.component('RightMenu', RightMenu);
//ohter
Vue.component('SearchModal', SearchModal);
//cart
Vue.component('PromocodeWidget', PromocodeWidget);
Vue.component('CheckoutWidget', CheckoutWidget);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
