<template>
<h1>TodoList</h1>
  <h3>Completed: {{ completedTodos }} </h3>
  <h3>Pending: {{ completedPendings }}</h3>
  <TodoList />
  <TodoForm />
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoForm from "./components/TodoForm";


import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  }, computed: {
    ...mapGetters({
      completedTodos: 'main/completedTodos',
      completedPendings: 'main/completedPendings',
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
