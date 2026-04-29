<script setup>
import { ref } from 'vue'

const props = defineProps(['imgUrl', 'title', 'price', 'idx'])
const emit = defineEmits(['ccc'])

const cutAmount = ref(3)

const onCut = () => {
  emit('ccc', props.idx, cutAmount.value)
}
</script>

<template>
  <div class="item">
    <img :src="imgUrl" :alt="title" />
    <p class="name">{{ title }}</p>
    <p class="price">
      <span>{{ price }}.00</span>
      <button @click="onCut">砍一刀</button>
    </p>
  </div>
</template>

<style scoped lang="scss">
.item {
  width: 240px;
  margin-left: 10px;
  padding: 20px 30px;
  margin-bottom: 20px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -4px, 0);
    cursor: pointer;
  }
}

img {
  width: 100%;
}

.name {
  margin-bottom: 10px;
  font-size: 18px;
  color: #666;
}

.price {
  display: flex;
  align-items: center;
  height: 36px;
  font-size: 22px;
  color: firebrick;

  button {
    margin-left: 50px;
    font-size: 14px;
  }
}
</style>
