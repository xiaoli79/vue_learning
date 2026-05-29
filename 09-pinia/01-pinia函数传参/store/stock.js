

// 导入定义仓库的函数
import { defineStore } from "pinia";
import { computed, ref } from "vue";


// 函数传参： 类似于Vue3的组合式API
export const useStockStore = defineStore('stock',()=>{

    //提供共享数据
    const stock = ref(20)


    const doubleStock = computed(() =>{
        return stock.value * 2
    })

    //修改共享数据
    //设置stock
    function setStock(val){
        stock.value = val;
    }

    //新增
    function addStock(){
        stock.value++
    }

    //减少
    function subStock(){
        stock.value--
    }

    //返回共享数据和修改函数
    return{
        stock,
        doubleStock,
        setStock,
        addStock,
        subStock
    }
})