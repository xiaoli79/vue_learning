<script setup>
import { ref } from 'vue';


    // 图片路径数组
    const images = [
        'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0f9be4b071da45d9a0c2.jpg',
        'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fff13ea0e4b0e1ecda4af43e.jpg',
        'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fff1402de4b0e1ecda4af43f.jpg'
    ]


    //响应式下标
    const i = ref(0)

    const next = () =>{
        i.value++
        if( i.value === images.length ){
            i.value = 0

        }
    }

    const prev = () =>{
        if( i.value === 0 ){
            i.value = images.length - 1
        }else{
            i.value--
        }
    }

</script>

<template>
    <div>
        <div class="bit-banner">
            <img :src="images[i]"
                 alt="奶龙">

            <div class="ctrl">
                <a 
                    href="javascript:;" 
                    class="btn prev"
                    @click="prev"
                    >&lt;</a>

                <a 
                    href="javascript:;" 
                    class="btn next"
                    @click="next"
                    >
                    &gt;</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    .bit-banner{
        position: relative;
        width: 1200px;
        height: 337px;
        margin: 150px auto;
    }

    .bit-banner .ctrl .btn{
        position: absolute;
        top:50%;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background: rgba(0,0,0,0.4);
    }

    .bit-banner .ctrl .btn.prev{
        left: 15px;
    }
    .bit-banner .ctrl .btn.next{
        right: 15px;
    }

</style>