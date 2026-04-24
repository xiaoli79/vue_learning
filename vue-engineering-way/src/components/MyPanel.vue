<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
</script>


<template>

  <div class="panel">
    <div class="title">
      <h4>自由与爱情</h4>
      <span class="btn" @click="visible = !visible"> {{ visible ? '收起' : '展开' }} </span>
    </div>
    <div class="container" v-show="visible">
      <p>生命诚可贵，</p>
      <p>爱情价更高。</p>
      <p>若为自由故，</p>
      <p>两者皆可抛。</p>
    </div>
  </div>
</template>

<style scoped>
.panel {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0 1em;
  }

  .title h4 {
    line-height: 2;
    margin: 0;
  }

  .container {
    border: 1px solid #ccc;
    padding: 0 1em;
    border-top-color: transparent;
  }

  .btn {
    cursor: pointer;
  }
}
</style>