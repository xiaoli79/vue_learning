<script setup>
  import { ref } from 'vue';

  //收集自我介绍的响应式数据
  const intro = ref('')

  //收集城市的响应式数据
  const city = ref('')

  const blood = ref('')

  const isAgree = ref('')

  const hobby = ref(["YLJ","HS"])

</script>

<template>
  <div> 
    <!-- 文本域 -->
    <textarea cols="20" rows="20" placeholder="请输入自我介绍" v-model="intro"></textarea>
    <br/>
    <br/>
  </div>

  <!-- 下拉菜单 -->
  <select v-model="city">
    <option value="beijing">北京</option>
    <option value="shanghai">上海</option>
    <option value="shengzhen">深圳</option>
    <option value="hangzhou">杭州</option>
  </select>

  <br/>
  <br/>


  <!-- 单选框 -->
  <input type="radio" value="a" v-model="blood"> A
  <input type="radio" value="b" v-model="blood"> B
  <input type="radio" value="ab" v-model="blood"> AB
  <input type="radio" value="o" v-model="blood"> O

  <br>
  <br>

  <!-- 复选框 -->
  <input type="checkbox" v-model="isAgree">是否同意协议

  <br>
  <br>

  <input type="checkbox" value="NL" v-model="hobby">奶龙
  <input type="checkbox" value="TS" v-model="hobby">豚鼠
  <input type="checkbox" value="YLJ" v-model="hobby">闫路甲
  <input type="checkbox" value="HS" v-model="hobby">韩硕

</template>

<style scoped>

</style>