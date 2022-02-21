import { defineStore } from "pinia"

const otherStore = defineStore("other", {
  state: () => {
    return {
      count: 0
    }
  }
})

export const mainStore = defineStore("main", {
  state: () => {
    return {
      hello: "world"
    }
  },
  getters: {
    doubleCount: () => otherStore().count * 2
  },
  actions: {
    add() {
      otherStore().count++
    }
  }
})
