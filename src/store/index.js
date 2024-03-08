import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/auth';
import Cart from './modules/cart';
import Bill from './modules/bill'
import Path from './modules/path';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Cart,
        Bill,
        Path
    }
})