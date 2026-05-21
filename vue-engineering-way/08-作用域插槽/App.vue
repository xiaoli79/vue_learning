  <script setup>
  import BitPanel from './components/bit-panel.vue'
</script>

<template>
  <h3>折叠面板</h3>
  <div>

    <bit-panel>
      <template #title="obj">
        {{ obj.n1 }}
        {{ obj.n2 }}
        <br>
        <span>我是闫路甲他爹</span>
      </template>

      <template #body>
				<p>闫门风骨自轩昂，</p>
				<p>路远仍怀赤子肠。</p>
				<p>甲第书声传四海，</p>
				<p>老爹一笑满庭香。</p>        
      </template>
    </bit-panel>

    <bit-panel>
      <template #title>
        <span>两张女明星</span>
      </template>

      <template #body>
        <img src="./assets/meinv1.jpg" alt="">    
        <img src="./assets/meinv2.jpg" alt="">    
      </template>
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