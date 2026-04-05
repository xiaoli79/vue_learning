<script setup>
import { ref } from 'vue';
</script>



<template>
    <div>
        <div class="bit-banner">
            <img src="https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0f9be4b071da45d9a0c2.jpg"
                 alt="奶龙">

            <div class="ctrl">
                <a 
                    href="javascript:;" 
                    class="btn prev"
                    >&lt;</a>

                <a 
                    href="javascript:;" 
                    class="btn next">
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