
  <script setup>
    import { reactive, ref } from 'vue';
    const colorStr = ref('red')
    const bgColor = ref('pink')

    const sytleObj = reactive({
      color:'blue',
      background:'yellowgreen'
    })
  </script>

  <template>
    <div>
      <p :style="{color:colorStr,background:bgColor}">奶龙</p>

      <p :style="sytleObj">大梦想</p>
    </div>
  </template>

  <style scoped>


  </style>