import { createStore } from "vuex";

const store = createStore({
  state: {
    bookList: ["Book 1", "Book 2", "Book 3", "Book 4"],
  },
  mutations: {
    ADD_BOOK(state, data) {
      state.bookList.push(data);
    },
    REMOVE_BOOK(state, data) {
      state.bookList.pop(data);
    },
  },
  actions: {
    addBook({commit}, data) {
      commit("ADD_BOOK", data);
    },
    removeBook({commit}, data) {
      commit("REMOVE_BOOK", data);
    },
  },
  getters: {
    // Your getter functions
  },
});

export default store;
