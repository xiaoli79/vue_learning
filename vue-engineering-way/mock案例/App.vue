<script setup>
import { ref } from 'vue'

// 响应式变量 — 存储 Mock.js 返回的模拟数据（name/city/dish/image）
const result = ref(null)

// 发起"随机美食"请求（实际被 Mock.js 拦截，不会到达网络层）
function fetchLuckyFood() {
  // 请求前先清空旧数据，避免旧卡片残留
  result.value = null

  // 创建 XMLHttpRequest — 此处创建的是已被 Mock.js 劫持后的"假 XHR"
  const xhr = new XMLHttpRequest()

  // 配置请求方法和 URL，Mock.js 会根据这两个字段去规则表中匹配 handler
  xhr.open('GET', '/api/lucky-food')

  // 注册响应回调：当 Mock.js 调用 handler 拿到假数据后，会模拟触发此回调
  xhr.onload = () => {
    // Mock.js 已将 handler 返回的对象序列化为 JSON 字符串，存在 responseText 中
    // 这里反序列化后赋值给响应式变量，驱动模板渲染卡片
    result.value = JSON.parse(xhr.responseText)
  }

  // 触发"发送"——实际执行的是 Mock.js 代理对象的 send()：
  //   1. 在规则表中匹配 method + url
  //   2. 匹配成功 → 调用 handler 生成随机数据
  //   3. 将数据写入 responseText，设置 status=200，触发 onload
  xhr.send()
}
</script>

<template>
  <div class="container">
    <h1>随机美食推荐 🍽️</h1>
    <!-- 点击按钮 → 调用 fetchLuckyFood → 创建 XHR → Mock.js 拦截并返回假数据 → 更新 result -->
    <button class="btn" @click="fetchLuckyFood">抽一道今日美食！</button>

    <!-- result 有值时展示卡片：name=随机姓名, city=随机城市, dish=随机菜名, image=随机占位图 -->
    <div v-if="result" class="card">
      <div class="info">
        <p><span class="label">食客：</span>{{ result.name }}</p>
        <p><span class="label">城市：</span>{{ result.city }}</p>
        <p><span class="label">菜名：</span>{{ result.dish }}</p>
      </div>
      <img :src="result.image" alt="美食图片" class="food-img" />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.container {
  text-align: center;
  padding: 40px;
}

h1 {
  color: #fff;
  font-size: 36px;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.btn {
  padding: 14px 48px;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  background: #fff;
  color: #f5576c;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

.card {
  margin-top: 30px;
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  display: inline-block;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.info {
  text-align: left;
  margin-bottom: 20px;
}

.info p {
  font-size: 18px;
  line-height: 2;
  color: #333;
}

.label {
  color: #f5576c;
  font-weight: bold;
}

.food-img {
  width: 300px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
}
</style>
