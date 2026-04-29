<script setup>

  // 什么时候需要父传子,当子组件数据不确定的时候
  // 父传子的语法:
  // 1.子组件通过defineProps()接收自己需要的数据,进而使用数据(子接)
  // 2.父组件内,子组件的自定义标签上,通过自定义属性传递数据给你(父传)
  defineProps(['imgUrl','title','price'])

</script>

<template>
    <div class="item">
        <img :src="imgUrl" alt="竹制干泡茶盘正方形沥水茶台品茶盘"/>
        <p class="name">{{ title }}</p>
        <p class="price">{{ price }}</p>
    </div>
</template>


<style scoped lang="scss">
    .item {
        width: 240px;
        margin-left: 10px;
        padding: 20px 30px;
        transition: all 0.5s;
        margin-bottom: 20px;
        .item:nth-child(4n) {
            margin-left: 0;
        }
        &:hover {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            transform: translate3d(0, -4px, 0);
            cursor: pointer;
        }
    }

</style>