<script setup>
  import { ref } from 'vue'
  import BitTable from './components/bit-table.vue';

  const tableData1 = ref([
    { id: 139, name: '肉夹馍', price: 11, num: 2 },
    { id: 340, name: '魏家凉皮', price: 10, num: 1 },
    { id: 397, name: '茶叶蛋', price: 2, num: 2 },
    { id: 262, name: '冰峰', price: 10, num: 2 }
  ])

  const tableData2 = ref([
    { id: 340, name: '葫芦头', price: 14, num: 4 },
    { id: 118, name: '羊肉泡馍', price: 18, num: 3 },
    { id: 273, name: '黑色大窑', price: 5, num: 2 }
  ])

  const preview = (index) =>{
    alert(JSON.stringify(tableData1.value[index]))
  }

  const delete1 = (index) =>{
    if(window.confirm("确认删除么?")){
      tableData2.value.splice(index,1)
    }
  }

  </script>

  <template>
    <div class="main">
      <h2>欢迎来到陕西美食</h2>

      <bit-table :data="tableData1">
        <template #default="aaa">
          <a 
            href="javascript:;"
            @click="preview(aaa.i)">查看</a>
        </template>
      </bit-table>

      <br/>
      
      <bit-table :data="tableData2">
        <template #default="bbb">
          <button 
            @click="delete1(bbb.i)">删除</button>
        </template>
      </bit-table>
    </div>
  </template>

  <style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    display: block;
    text-decoration: none;
    font-weight: bold;
    color: rgb(206, 21, 21);
  }
</style>