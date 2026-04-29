<script setup>
  import { ref } from 'vue';
import LifeCycle from './component/LifeCycle.vue';


  const isAlive = ref(true)

</script>




<template>
  <life-cycle v-if="isAlive"/>
</template>

<style scoped>


</style>