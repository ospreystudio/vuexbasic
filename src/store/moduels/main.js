const state = {
    todos: [
        {
         title: "todo item a",
         completed: false
        },
        {
          title: "todo item b",
          completed: false
        },
    ]
}

const actions = {
    addNewTodo({commit}, todoItem) {
        commit('new_todo', todoItem)
    },
    deleteTodo({commit}, todoItem) {
        commit('delete_todo', todoItem)
    },
    toggleTodo({commit}, todoItem) {
        commit ("toggle_todo", todoItem)
    }
}

const mutations = {
    new_todo(state, todoItem) {
    state.todos.push({
        title: todoItem,
        completed: false
    })
  },
    delete_todo(state, todoItem) {
        let index = state.todos.indexOf(todoItem)
        state.todos.splice(index, 1)
    },

    toggle_todo(state, todoItem) {
        todoItem.completed = !todoItem.completed;
    }

}

const getters = {
    completedTodos(state) {
        return state.todos.filter(todo => {
            return todo.completed === true;
        }).length;
    },

    completedPendings(state) {
        return state.todos.filter(todo => {
            return todo.completed === false;
        }).length;
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}