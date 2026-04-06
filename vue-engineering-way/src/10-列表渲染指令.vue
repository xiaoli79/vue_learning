<script setup>
    import { ref } from 'vue';

    // 数字数组
    const nums = ref([11,22,33,44,55])

    //商品列表
    const goodsList = ref([
        {id:1,name:"篮球",price: 299},
        {id:2,name:"足球",price: 350},
        {id:1,name:"排球",price: 400}
    ])

    //对象
    const obj ={
        id: 10001,
        name: 'bit',
        age: 9
    }
    //遍历数字
    const digit = 5
</script>


<template>

    <!-- 遍历数字数组 -->
    <div>
        <ul>
            <li v-for="(item,index) in nums">
                {{item}} =>{{index}}
            </li>
        </ul>
    </div>
    <!-- 遍历对象数组  -->
    <div class="goods-list">
        <div class="goods-items"
             v-for="item in goodsList">
             <p>id = {{ item.id }}</p>
             <p>name = {{ item.name }}</p>
             <p>price = {{ item.price }}</p>
        </div>
    </div>
    <!-- 遍历对象 -->
    <ul>
        <li v-for="(value,key,index) in obj">
            {{key}} => {{value}}
        </li>
    </ul>

    <ul>
        <li v-for="(value,index) in digit ">
            {{value}} =>{{ index }}
        </li>
    </ul>
</template>



<style scoped></style>