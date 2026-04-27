

import { createApp } from 'vue'
import App from './App.vue'

//导入MyPanel组件
import MyPanel from './components/MyPanel.vue'

//全局注册组件 'MyPannel'为组件名， MyPanel 为组件对象。
// 一般传入的是大驼峰，因为使用大驼峰的标签名，今天使用组件的时候，既可以使用大驼峰，也可以使用烤串法
//但如果使用的是烤串法标签名，今天使用组件的时候，只用使用烤串法进行组件的使用。
createApp(App).component('MyPanel',MyPanel).mount('#app')
