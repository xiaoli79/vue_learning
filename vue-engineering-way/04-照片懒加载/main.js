import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 自定义指令
app.directive('lazyload',(el,binding) =>{

    const io = new IntersectionObserver(([entry]) =>{

        //如果照片元素出现在界面上，就开始加载~
        if(entry.isIntersecting){
            el.src = binding.value

            el.addEventListener('error',(error) =>{
                console.log("图片加载失败")
            })
            
            // 停止监听
            io.unobserve(el)

            // 关闭监听
            io.disconnect()
        }
    })
    io.observe(el)
  })
app.mount('#app')
