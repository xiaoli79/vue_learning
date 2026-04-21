<script setup>
  import { computed, ref } from 'vue';

  const goodsList = ref([
    {id : 1, name: '篮球',num: 1},
    {id : 2, name: '玩具',num: 2 },
    {id : 3, name: '书籍',num: 3 },
  ])



  //计算属性：求得总量
  const totalNum = computed(() => {

    console.log('1-computed')
    return goodsList.value.reduce((prev,item) => prev + item.num , 0)

  })  

  //普通属性：求得总数
  //箭头函数
  const calcTotalNum = () =>{
    console.log("function")
    return goodsList.value.reduce((prev,item) => prev + item.num , 0)      
  }

</script>


<template>
  <h3>奶龙的礼物清单</h3>

  <table>
    <thead>
      <tr>
        <th>名字</th>
        <th>数量</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in goodsList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </tbody>
  </table>

	<p>礼物总数：{{ totalNum }} 个</p>
	<p>礼物总数：{{ totalNum }} 个</p>
	<p>礼物总数：{{ totalNum }} 个</p>
	<hr />
	<p>礼物总数：{{ calcTotalNum() }} 个</p>
	<p>礼物总数：{{ calcTotalNum() }} 个</p>
	<p>礼物总数：{{ calcTotalNum() }} 个</p>

  <!-- <p>礼物总数:<span v-text="totalNum"></span>个</p> -->
</template>


<style scoped>
  table{
    width: 350px;
    border: 1px solid #ccc;
  }


  table th, table td{
    border: 1px solid #ccc;
  }


  table td{
    text-align: center; 
  }




</style>