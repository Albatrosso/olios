import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'normalize.css';

//gui
import OlInput from './components/gui/OlInput.vue';

Vue.config.productionTip = false;

Vue.component('OlInput', OlInput);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
