<script setup>
  import { ref } from 'vue';
  const msg = ref('')
</script>

<template>
  <p>{{ msg }}</p>
  <!-- <input 
    type="text"
    v-model="msg">
   -->

  <!-- :value实现数据的变化 -->
  <input 
    type="text"
    :value="msg"
    @input="msg=$event.target.value"/>

</template>

<styles scoped>


 </styles>