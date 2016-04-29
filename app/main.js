import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './renderer/App';
import Router from './renderer/router';

Vue.use(VueRouter);

const router = new VueRouter();
router.map(Router);

router.start(App, '#app');

window.router = router;
