// 引入 Mock.js 库 — 它会在应用启动时劫持（重写）浏览器原生的 XMLHttpRequest
// 之后所有前端发起的 AJAX 请求，都会先经过 Mock.js 的规则表匹配
import Mock from 'mockjs'

// 解构出 Random 工具 — 用于生成随机的中文姓名、城市、颜色、图片等模拟数据
const { Random } = Mock

// 预定义 30 道热门菜名，每次请求从中随机抽取一道返回
const dishes = [
  '宫保鸡丁', '麻婆豆腐', '北京烤鸭', '红烧肉', '鱼香肉丝',
  '糖醋里脊', '水煮鱼', '东坡肉', '回锅肉', '佛跳墙',
  '辣子鸡', '清蒸鲈鱼', '锅包肉', '蚂蚁上树', '蒜蓉生蚝',
  '葱爆羊肉', '干煸四季豆', '酸菜鱼', '毛血旺', '剁椒鱼头',
  '小龙虾', '烤羊排', '寿司拼盘', '冬阴功汤', '咖喱蟹',
  '牛排', '披萨', '意面', '汉堡', '寿喜锅'
]

// 【核心】注册一条拦截规则
// Mock.mock(url, method, handler) 做了两件事：
//   1. 将 handler 存入 Mock.js 内部的规则表（key = method + url）
//   2. 之后当前端代码 new XMLHttpRequest() 并发起 GET /api/lucky-food 时，
//      Mock.js 劫持的 XHR 会匹配到这条规则，直接调用 handler 生成假数据返回，
//      请求根本不会到达网络层
Mock.mock('/api/lucky-food', 'get', () => ({
  // Random.cname() — 随机生成一个中文姓名，如"王小明"
  name: Random.cname(),
  // Random.city(true) — 随机生成"省 市"格式的地址，如"广东省 广州市"
  city: Random.city(true),
  // 从 dishes 数组中随机取一道菜
  dish: dishes[Math.floor(Math.random() * dishes.length)],
  // Random.image(size, bgColor, textColor, text) — 生成一张占位图片（纯色背景 + 文字）
  // 这里生成 300×200 的图片，背景色随机，显示"Food"字样
  image: Random.image('300x200', Random.color(), '#FFF', 'Food'),
}))
