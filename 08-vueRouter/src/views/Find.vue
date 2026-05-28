<script setup></script>

<template>
    <div class="find">
        <p>发现音乐</p>
        <p>发现音乐</p>
        <p>发现音乐...</p>
        <nav>
            <router-link to="/find/recommend">推荐</router-link>
            <router-link to="/find/topList">排行榜</router-link>
            <router-link to="/find/playList">歌单</router-link>
        </nav>
        <router-view />
    </div>
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
