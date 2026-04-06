<script setup>
import { ref } from 'vue';




const goodsList = ref([
    { id: 101, name: 'biangbiang面', price: 13 },
    { id: 102, name: '葫芦头', price: 20 },
    { id: 103, name: '冰峰', price: 2 },
    { id: 104, name: '肉夹馍', price: 11 },
    { id: 105, name: '羊肉泡馍', price: 18 }
])

//数组的删除方法: unshift(头部删除) / pop(尾部删除) / splice(startIndx,delCount)(任意位置删除)
const del = (i) =>{
    //加了一个弹窗~~
    if(window.confirm("确认删除么?")){
        console.log(i)
        goodsList.value.splice(i,1)
    }
}
</script>



<template>
    <table border = "1" cellspacing="0" cellpadding="0">
        <caption>奶龙的橱窗</caption>
        <thead>
            <tr>
                <th>商品名称</th>
                <th>商品价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            使用列表渲渲染
            <tr v-for="(item,index) in goodsList">
                <td>{{ item.name}}</td>
                <td>{{ item.price }}</td>
                <td>
                    <button @click="del(index)">删除</button>
                </td>
            </tr>
        </tbody>
        <!-- 条件渲染 -->
        <tfoot v-if="goodsList.length === 0">
            <tr>
                <td colspan="3">暂无数据啦</td>
            </tr>
        </tfoot>
    </table>
</template>


<style lang="scss">

    table{
        width: 500px;
        margin: 150px auto;
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    tr{
        height: 40px;
    }

    tfoot{
        height: 100px;
    }

</style>