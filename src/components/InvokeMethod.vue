<script setup>
import { ref } from "vue";
import useNumbers from "../number";
 
let number = ref(0);
const { increment, decrement } = useNumbers(number);
</script>
<template>
  <div class="container">
    <h1>Invoking Methods</h1>
    <div class="result">{{ number }}</div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
.container>button{
    border: 1px solid;
    margin: 5px;
}
.result{
    width: 100px;
   margin: 0 auto;
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    border-radius: 5px;
}
</style>
