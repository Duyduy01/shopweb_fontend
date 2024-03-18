export default {
  state: {
    bill: [],
  },
  getters: {
    getBill: (state) => {
      return state.bill;
    },
  },
  mutations: {
    addBill: (state, payload) => {
      state.bill = payload.body.data;
    },
  },
  actions: {
    addBill: (context, payload) => {
      context.commit("addBill", payload);
    },
  },
};
