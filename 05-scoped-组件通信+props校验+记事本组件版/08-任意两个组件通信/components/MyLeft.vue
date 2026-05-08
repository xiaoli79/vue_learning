<!-- @format -->

<script setup>
  import meipo from '@/eventBus';
  import { ref } from 'vue';

  const word = ref('')

  const msg = ref('两情若是久长时，又岂在朝朝暮暮')

  // 牛郎作为发送方进行发送数据
  const onSend = () =>{
    meipo.emit('biubiubiu',msg.value )
  }

  meipo.on('ZhaNan',(str)=>{
    word.value = str
  })

</script>
 

<template>
  <div class="my-left">
    <h3>牛郎</h3>
    <button @click="onSend">Send Message</button>
    <p>牛郎收到来自织女的消息 {{ word }}</p>
  </div>
</template>

<style scoped>
.my-left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100px;
  background: purple;
  color: #fff;
}
</style>