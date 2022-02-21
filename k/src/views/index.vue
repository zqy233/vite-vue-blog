<template>
  <p>这里是path为'/'的主页</p>
  <p>pinia中store数据：{{ useStore.doubleCount }}</p>
  <button @click="add">add</button>
  <p><router-view /></p>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index"
const useStore = mainStore()
function add() {
  useStore.add()
}
</script>

<style></style>
