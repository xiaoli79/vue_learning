<script setup>

const emit = defineEmits(['del-todo'])

const props = defineProps({
  todos:{
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(item,index) in props.todos"
      :key="item.id"
      :class="{completed: item.finished}">
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            v-model="item.finished"
          />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="emit('del-todo',index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
