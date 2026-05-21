<script setup>
  import BitPanel from './components/bit-panel.vue'
</script>

<template>
  <h3>折叠面板</h3>
  <div>
    <bit-panel>
      <!-- 展示一首诗 -->
       <!--第一次使用，没有值，就会展示插槽的默认值 -->
       <!--<p>我是闫路甲他爹</p> -->

    </bit-panel>
  </div>

  <div>
    <bit-panel>
      <img src="./assets/meinv1.jpg" alt="">
      <img src="./assets/meinv2.jpg" alt="">
    </bit-panel>
  </div>

    
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #ccc;
}

#app {
  width: 400px;
  margin: 30px auto;
  padding: 1em 2em 2em;
  background: #fff;
}

#app h3 {
  margin-bottom: 20px;
  text-align: center;
}
</style>