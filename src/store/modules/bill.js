export default {
  state: {
    bill: [],
  },
  getters: {
    getBill: (state) => {
      console.log("Getter getBill:", state.bill);
      return state.bill;
    },
  },
  mutations: {
    addBill: (state, payload) => {
      state.bill = payload;
      console.log("23", state.bill);
    },
  },
  actions: {
    addBill: (context, payload) => {
      console.log(payload);
      context.commit("addBill", payload);
    },
  },
};
