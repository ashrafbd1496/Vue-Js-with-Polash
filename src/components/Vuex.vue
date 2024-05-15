<template>
  <div>
    <h1>Vuex</h1>
    <input v-model="bookName" type="text" placeholder="Add Book" /><button
      @click="addBook"
      class="add-btn"
    >
      Add Book
    </button>
    <ul>
      <li v-for="(book, index) in myBookList" :key="index">
        <span class="book">{{ book }} </span><button @click="removeBook" class="del">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookName: "",
    };
  },
  computed: {
    myBookList() {
      return this.$store.state.bookList;
    },
  },
  methods: {
    addBook() {
      this.$store.dispatch("addBook", this.bookName);
    },
    removeBook(){
      this.$store.dispatch('removeBook',this.bookName);
    }
  },
};
</script>
<style>
ul {
  list-style: none;
}
.book {
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
}
input {
  padding: 8px;
  border: 1px solid;
  border-radius: 5px;
}
.add-btn,
.del {
  border: 1px solid #333;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
</style>
