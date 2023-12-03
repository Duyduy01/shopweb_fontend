export default {
    state: "",
    getters: {
        GET_PATH: state => {
            return state.path;
        },
    },
    mutations: {
        SET_PATH: (state, payload) => {
            state.path = Object.assign(payload);
            localStorage.setItem('PATH', JSON.stringify(state));
        },

        REMOVE_PATH: (state) => {
            console.log(state)
            localStorage.removeItem('PATH');

        },
    }
}