<template>
    <div>
      <h1>Vuex</h1>  
      <input type="text"><button class="add-btn">Add</button>
      {{myBookList}}
    </div>
</template>
<script>
export default {
    computed: {
        myBookList(){
            return this.$store.state.bookList
        }
    }
}
</script>
<style>
input{
    padding: 8px;
    border: 1px solid;
    border-radius: 5px;
}
    .add-btn{
        border: 1px solid #333;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
    }
</style>