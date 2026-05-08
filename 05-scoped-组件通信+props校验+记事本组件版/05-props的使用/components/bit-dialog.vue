<script setup>

    // const props = defineProps(['opacity'])


    // const props = defineProps({
    //     opacity: Number
    // })
    const props = defineProps({
      opacity: {
        type: Number,
        // 如果是基本类型(数字/字符串/布尔): 直接写默认值

        // default: 0.6,


        // 这个required是判断参数是否必传
        required: true,
        validator(value) {
          console.log(value)
          if(value > 1 || value < 0){
            console.error('opacity有效值在0~1之间')
            return false
          }
          return true
        }
      }



    //   这个是用来教学的
    //   ccc: {
    //       type: Object,
    //       // 如果是复杂类型(数组/对象): default是通函数的形式返回一个值
    //       default: ()=>{
    //         return {}
    //       }
    //     }
    })

</script>

<template>
  <div class="bit-dialog" 
        :style="{background: `rgba(0,0,0,${props.opacity})`}">
    <div class="dialog-container">
      <div class="dialog-header">比特Dialog对话框</div>
      <div class="dialog-body">
        <p>主体内容</p>
        <p>主体内容</p>
        <p>主体内容...</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.bit-dialog {
  display: flex;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.3);
  .dialog-container {
    width: 600px;
    height: fit-content;
    background: #fff;
    .dialog-header {
      padding: 10px 20px;
      height: 35px;
      line-height: 35px;
      box-shadow: 0 3px 6px 0 rgba(7, 35, 68, 0.15);
    }
    .dialog-body {
      padding: 10px 20px;
    }
  }
}
</style>