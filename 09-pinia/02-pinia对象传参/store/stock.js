

//导入定义仓库的函数
import { defineStore } from "pinia";

//对象传参： Option Store
export const useStockStore = defineStore('stock',{


    // state: 存放共享数据，类似于Setup传参时的ref或reactive
    state: () =>({
        stock: 100
    }),

    //actions: 存放修改数据的函数，类似于Setup传参时修改数据的函数
    actions: {
        //新增
        addStock(){
            this.stock++
        },
        //减少
        subStock(){
            this.stock--
        }
    },
    //getters: 存放计算属性，类似于computed
    getters: {
        doubleStock: (state) => state.stock * 2 
    }
})