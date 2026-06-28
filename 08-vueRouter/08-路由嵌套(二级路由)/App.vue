<script setup>
</script>

<template>
  <nav>
    <router-link to="/find">发现音乐</router-link>
    <router-link to="/my">我的音乐</router-link>
    <router-link :to="{ name: 'Friend', params: { id: 1001 } }">朋友</router-link>
  </nav>

  <router-view />
</template>

<style scoped>
  nav a {
    color: #333;
    text-decoration: none;
  }

  nav a:nth-child(2) {
    margin: 0 80px;
  }

  nav a.router-link-active {
    background: red;
    color: #fff;
  }
</style>
