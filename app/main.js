import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './renderer/App';
import { RouterMap } from './renderer/router';

Vue.use(VueRouter);

const router = new VueRouter();
router.map(RouterMap);

//const App = Vue.extend(require('./renderer/App.vue'));

router.start(App, '#app');

window.router = router;
