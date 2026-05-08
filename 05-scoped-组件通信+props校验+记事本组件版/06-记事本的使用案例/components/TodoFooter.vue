<script setup>
  import { computed } from 'vue';




  // 声明
  const emit = defineEmits()




  // 接收值
  const props = defineProps({
    todoList:{
      type:Array,
      default: () => []
    } 
  })

  const unFinishedLength = computed(()=>{
    return props.todoList.filter((item) => !item.finished).length
  })



</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ unFinishedLength }}</strong> item left</span>
    <ul class="filters">
      <li><a href="#/" class="selected">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="emit('clear-todo')">Clear completed</button>
  </footer>
</template>