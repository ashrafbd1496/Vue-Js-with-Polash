import { createStore } from "vuex";

const store = createStore({
  state: {
    bookList: ["Bangla", "English", "Math", "Science"],
  },
  mutations: {
    ADD_BOOK(state, data) {
      state.bookList.push(data);
    },
    REMOVE_BOOK(state, index) {
      state.bookList.splice(index, 1);

      // console.log(data);
    },
  },
  actions: {
    addBook({ commit }, data) {
      commit("ADD_BOOK", data);
    },
    removeBook({ commit }, index) {
      commit("REMOVE_BOOK", index);
    },
  },
  getters: {
    // Your getter functions
  },
});

export default store;
