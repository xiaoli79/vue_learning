<script setup>
  import { ref } from 'vue';
  import BitSelect from './component/BitSelect.vue';

  const activeId= ref('333')

</script>

<template>
  <BitSelect v-model = "activeId"/>
</template>

<style scoped>

</style>