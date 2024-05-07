<script setup>
import { ref, onMounted, onUpdated } from "vue";

const users = ref([]);

function getUsers() {
  users.value = [
    {
      id: "01",
      name: "Ashraf",
      mobile: "123456",
    },
    {
      id: "0231",
      name: "Nazrun",
      mobile: "5689",
    },
    {
      id: "001",
      name: "Jashim",
      mobile: "45895",
    },
  ];
}
onMounted(() => {
  console.log("OnMounted Fired");
  getUsers();
});
onUpdated(() => {
  console.log("Updated Fired");
});
</script>
<template>
  <div class="container">
    <div class="users">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.mobile }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container > table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 15px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

</style>
