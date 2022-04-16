<template>
<input type="text" v-model="TodoItem">
  <button @click="newTodoItem">Submit</button>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      TodoItem: ""
    }
  },
  methods: {
    newTodoItem() {
      this.$store.dispatch('main/addNewTodo', this.TodoItem)
      this.TodoItem = ""
    }
  }
}
</script>

<style scoped>

</style>