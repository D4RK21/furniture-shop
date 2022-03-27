import { createStore } from "vuex";

export default createStore({
  state: {
    basket: [],
  },
  getters: {
    getProducts: (state) => {
      return state.basket;
    },
  },
  mutations: {
    addProduct: (state, product) => {
      state.basket.push(product);
    },
  },
  actions: {},
  modules: {},
});
