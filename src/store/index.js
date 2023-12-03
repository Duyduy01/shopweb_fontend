import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/auth';
import Cart from './modules/cart';
import Path from './modules/path';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Cart,
        Path
    }
})