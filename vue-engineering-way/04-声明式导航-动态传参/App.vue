<script setup>
</script>

<template>

  <nav>
    <!--router-link类似于 a 标签,to属性会变成href属性 -->
    <router-link to="/find">发现音乐</router-link>
    <router-link to="/my">我的音乐</router-link>

    <!--动态参数传字符串形式--> 
    <!-- <router-link to="/friend/10010">我的朋友</router-link> -->

    <!-- 动态传参：传对象格式 -->
    <router-link 
      :to="{
        name:'Friend',

        params: {
          fid: 666
        }
      
      }">朋友</router-link>
  </nav>
  <!-- 路由的出口 -->
  <router-view/>
</template>


<style scoped>

  nav a{
    color: #333;
    text-decoration: none;
  }

  nav a:nth-child(2){
    margin: 0 80px;
  }

  nav a.router-link-active{
    background: red;
    color: #fff;
  }

</style>