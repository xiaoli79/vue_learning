<script setup>
	const props = defineProps({
		data:{
			type:Array,
			default: () => []
		}
	})

</script>


<template>
  <table
    class="bit-table"
    border="1"
    cellspacing="0"
    cellpadding="0">
    <thead>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in props.data"
	  :key="item.id">
        <td>{{ index+1 }} </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.num }}</td>
        <td>
			<slot :i = index></slot>
		</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.bit-table {
  width: 500px;
  border-color: #fafdfe;
  text-align: center;
}

.bit-table thead {
  background: #9282d3;
}

.bit-table thead tr th {
  border-width: 0;
}

.bit-table tr {
  height: 40px;
}
</style>