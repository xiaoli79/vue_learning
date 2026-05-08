<script setup>

// MyLeft 和 MyRight 相对于App 是子组件
//MyLeft和MyRight互不影响，说明这两个组件是兄弟组件
import MyLeft from './components/MyLeft.vue';
import MyRight from './components/MyRight.vue';

</script>


<template>

  <div>
    <my-left/>
    <my-right/>
  </div>

</template>


<style>
</style>