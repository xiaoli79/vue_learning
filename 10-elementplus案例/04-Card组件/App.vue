<template>
  <el-card style="max-width: 480px">


    <!-- 头部:剧名插槽header进行分发 -->
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

    <!-- 尾部：具名插槽footer进行分发 -->
    <template #footer>Footer content</template>
  </el-card>
</template>
