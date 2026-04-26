<script setup>

  //导入组件
  //大驼峰：每个单词的首字母都大写
  //烤串法：每个单词都小写，不同单词之间用短横线连接

</script>

<template>
  <h3>可折叠面板</h3>
  <!-- 使用组件：既可以是双标签，也可以是自闭和的单标签 -->
   <!-- 大驼峰写法 -->
  <MyPanel/>
  <MyPanel></MyPanel>
  <!-- 烤串法 -->
  <my-panel></my-panel>
  <my-panel/>
</template>

<style lang="scss">
body {
  background-color: #ccc;
}

#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid green;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}

#app h3 {
  text-align: center;
}


</style>