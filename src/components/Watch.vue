<script setup>
import { reactive, watch } from "vue";
const form = reactive({
  number: 0,
});
setInterval(() => {
  form.number++;
  console.log(form);
}, 3000);

watch(
  () => form.number,
  (newValue, oldValue) => {
    console.log("Old Value-", oldValue, "New Value-", newValue);
  }
);
</script>

<template>
  <div>
    <h1>Vue Watch</h1>
    <div class="result">Number -{{ form.number }}</div>
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
