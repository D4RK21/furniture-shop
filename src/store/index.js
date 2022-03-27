import { createStore } from "vuex";

export default createStore({
  state: {
    basket: [],
  },
  getters: {
    getProducts: (state) => {
      return state.basket;
    },
    getCount: (state) => {
      return state.basket.length;
    },
  },
  mutations: {
    addProduct: (state, product) => {
      var push = true;
      state.basket.forEach((item, index) => {
        if (item.id === product.id) {
          push = false;
          return state.basket[index].count++;
        }
      });
      if (push) state.basket.push(product);
    },
    dellProduct: (state, id) => {
      state.basket.forEach((item, index) => {
        if (item.id === id) {
          state.basket.splice(index, 1);
        }
      });
    },
  },
  actions: {},
  modules: {},
});
