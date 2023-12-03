// helpers/general.js
var axios = require('axios');
export function initialize(store, router) {
    router.beforeEach((to, from, next) => {

        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        // request cần quyền gì
        const {
            authorize
        } = to.meta;
        // get user đang login
        const currentUser = store.state.Auth.currentUser;
        // get role user đang login



        if (requiresAuth && !currentUser) {
            next('/dang-nhap');
        } else if (to.path === '/dang-nhap' && currentUser) {
            next('/');
        } else if (authorize && authorize.length && currentUser) {
            const userRole = currentUser.authorities;
            let check = false;
            userRole.forEach(e => {
                if (authorize.includes(e.authority)) {
                    check = true;
                }
            })
            if (!check) {
                next('/404');
            } else {
                next();
            }
        } else if(JSON.parse(localStorage.getItem("PATH")) !=null && currentUser){
            let path = JSON.parse(localStorage.getItem("PATH")).path
            store.commit("REMOVE_PATH");
            next(path);
        }
         else {
            next();
        }


    });

    axios.interceptors.response.use(null, (error) => {
        if (error.response.status === 401) {
            store.commit('LOGOUT');
            router.push('/dang-nhap');
        }

        return Promise.reject(error);
    });

    if (store.getters.CURRENT_USER) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters.CURRENT_USER.token}`;
    }

}