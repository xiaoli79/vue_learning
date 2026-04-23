<script setup>
import { computed, reactive, ref, watch } from 'vue'

// 商品列表
const goodsList = ref(JSON.parse(localStorage.getItem(key)) || [
  { id: 190, name: '魏家凉皮', price: 10, num: 2 },
  { id: 237, name: '肉夹馍', price: 11, num: 3 },
  { id: 163, name: '冰峰', price: 3, num: 2 }
])


const key = "xiaoli"


const goodItem =reactive({
  name:'',
  price:'',
  num:''
})


const add = () =>{

  // 判断值是否为空
  if(!goodItem.name || !goodItem.price || !goodItem.num){
    alert("商品信息部分为空")
    return
  }


  //以对象的形式推送
  goodsList.value.push({
    ...goodItem,
    id: Date.now()
  })

  //置空
  goodItem.name=''
  goodItem.price=''
  goodItem.num=''
}


const del = (i) =>{
  
  if(window.confirm("确认删除吗?")){
    goodsList.value.splice(i,1)
  }

}

watch(goodsList,(newVal) =>{
  console.log("goodsList变了，新值为 =",newVal)

  // 当数组发生变化，需将其最新的值存储到本地。数组是引用类型，必须先将其序列化，然后进行存储
  localStorage.setItem(key,JSON.stringify(newVal))
},{
  deep:true
})

const totalNum = computed(() => goodsList.value.reduce((prev,item) => prev+item.num,0))

const totalPrice = computed(() => goodsList.value.reduce((prev,item) => prev + item.price * item.num,0))
</script>

<template>
  <div class="goods-container">
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
<!-- 有内容tbody -->
      <tbody v-if="goodsList.length > 0">
        <tr v-for="(item,index) in goodsList"
        :key="item.id">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td :class="{active : item.price * item.num >= 30}">{{ item.price * item.num }}</td>
          <td><a href="#" @click="del(index)">删除</a></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6" class="empty">
            暂无数据
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="2">总数量：<b>{{ totalNum }}</b></td>
          <td colspan="4">总金额：<b>{{ totalPrice }}</b></td>
        </tr>
      </tfoot>
    </table>

    <form>
      <div class="form-item">
        <label class="label">名称：</label>
        <div class="input">
          <input
            type="text"
            placeholder="请输入名称"
            v-model.trim = "goodItem.name" />
        </div>
      </div>

      <div class="form-item">
        <label class="label">价格：</label>
        <div class="input">
          <input
            type="number"
            placeholder="请输入价格"
            v-model.number = "goodItem.price" />
        </div>
      </div>

      <div class="form-item">
        <div class="label">数量：</div>
        <div class="input">
          <input
            type="number"
            placeholder="请输入数量"
            v-model="goodItem.num" />
        </div>
      </div>

      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="btn-add" @click.prevent="add">新增</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.goods-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: 50px auto;
  font-family: 'Courier New', Courier, monospace;
}

.goods-container table {
  flex: 4;
}

.goods-container table {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}

.goods-container table th {
  background: #f5f5f5;
}

.goods-container table tr:hover td {
  background: #f5f5f5;
}

.goods-container table td,
.goods-container table th {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: center;
}

.goods-container table td a {
  color: blue;
  text-decoration: none;
}

.goods-container table td.active {
  color: #f00;
}

.goods-container table tbody .empty {
  height: 100px;
  color: #999;
  font-size: 18px;
}

.goods-container table tfoot {
  background: #f5f5f5;
}

.goods-container form {
  margin-top: 50px;
}

.goods-container form .form-item {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.goods-container form .form-item .label {
  width: 60px;
  font-size: 14px;
  text-align: right;
}

.goods-container form .form-item .input {
  flex: 1;
}

.goods-container form .form-item input {
  box-sizing: border-box;
  width: 250px;
  height: 36px;
  border: 1px solid #ccc;
  padding: 10px;
  appearance: none;
  outline: none;
  color: #999;
}

.goods-container form .form-item input::placeholder {
  color: #999;
}

.goods-container form .form-item .btn-add {
  padding: 6px 12px;
  border: 1px solid blue;
  font-size: 14px;
  border-radius: 4px;
  background: blue;
  color: #fff;
  appearance: none;
  outline: none;
  cursor: pointer;
}
</style>