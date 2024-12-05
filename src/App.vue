<template>
  <div>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      class="form-control"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodo)
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
