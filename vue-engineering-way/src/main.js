import { createApp } from 'vue'
import App from './App.vue'
// 应用启动时立即执行 mock 模块，注册拦截规则到 Mock.js
// 之后所有发往 GET /api/lucky-food 的 XHR 请求都会被 Mock.js 劫持，返回模拟数据
import './mock/lucky-food'

createApp(App).mount('#app')
