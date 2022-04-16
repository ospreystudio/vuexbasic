<template>
  <div style="width: 250px; margin: 5px auto">
    <div style="display:flex; justify-content: space-between">
<span :class="{completed: todo.completed}" @click="todoToggle(todo)">{{ todo.title }}</span>
  <button @click="deleteTodo(todo)">Delete</button>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Todo",
  props: ['todo'],
  methods: {
    ...mapActions({
      deleteTodo: 'main/deleteTodo',
      todoToggle: 'main/toggleTodo'
    })
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}


</style>