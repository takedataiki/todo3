<template>
  <div class="container p-3">
    <div class="input-group mb-5">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="新しいTodoを入力"
        class="form-control"
      >
      <button 
        class="btn btn-outline-secondary"
        @click="addTodo"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>    

    <ul class="list-group">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="list-group-item d-flex align-items-center px-4"
      >
        <p class="m-0">{{ todo.name }}</p>
        <button 
          @click="removeTodo(index)"
          class="btn btn-sm btn-outline-danger ms-auto"
        >
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  created() {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos)
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ name: this.newTodo })
      this.newTodo = ''
      this.saveTodos()
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
      this.saveTodos()
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
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
