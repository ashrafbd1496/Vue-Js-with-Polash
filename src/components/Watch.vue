<script setup>
import { ref, watch } from "vue";
const number = ref(0);
setInterval(() => {
  number.value++;
  console.log(number);
}, 3000);

watch(number, (newValue,oldValue) => {
  console.log("Old Value-", oldValue,'New Value-',newValue);
});
</script>

<template>
  <div>
    <h1>Vue Watch</h1>
    <div class="result">Number -{{ number }}</div>
  </div>
</template>

<style scoped>
.result {
  background-color: #333;
  width: 200px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  border-radius: 5px;
  padding: 10px;
}
</style>
