<script setup lang="ts">
const count = ref(0)
function add() {
  count.value++
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="add">add</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
