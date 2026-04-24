
//默认导入min函数
//默认导入的变量名可以随便起，但为了语义化，建议和模块
//功能保持一致
import min from './utils/min.js'




//按需导入的变量必须用大括号包起来，并且变量名和导出的变量名必须
//一致
import {add,sub} from './utils/math.js'





console.log(add(3,3))
console.log(sub(6,3))
console.log(min(12,45))




