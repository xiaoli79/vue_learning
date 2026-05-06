<script setup>
import { ref } from 'vue';


const title = ref('')

const emit = defineEmits();



const onEnter = () =>{
  if(!title.value) return alert("任务名称不能为空")


  emit('add-todo',title.value)


  title.value = ''
}


</script>

<template>
  <header class="header">
    <h1>比特人的记事本</h1>
    <input 
      v-model.trim="title"
      @keydown.enter="onEnter"
      class="new-todo" placeholder="What needs to be finished?" autofocus />
  </header>
</template>