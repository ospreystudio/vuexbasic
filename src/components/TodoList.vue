<template>
<div>
  <Todo v-for="(todo, index) in todos" :key="index" :todo = "todo" />
</div>
</template>

<script>

import Todo from "./Todo";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  computed: {
    todos() {
      return this.$store.state.main.todos
    }
  }
}
</script>

<style scoped>

</style>