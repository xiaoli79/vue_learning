
<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

//表单的校验规则
const formRule = {
  name:[
    {
      // 必填项
      required: true,
      message: "请填写活动名称",
      trigger: 'blur'
    },
    {

      //长度限制在4-10字符之间
      min:4,
      max:10,
      message: "长度只能在4-10之间"
    }
  ],
  //地区
  region:[
    {
      //必填项
      required: true,
      message: "请选择活动地区",
      trigger:"change"
    }
  ],
  date:[
    {
      type: 'date',
      required: true,
      message: "请选择一个时间",
      trigger: "change"
    }

  ],
  type: [
    {
      type: 'array',
      required: true,
      message: "请至少选择一个活动类型",
      trigger: "blur"
    }
  ],
  resource: [
    {
      required: true,
      message: "请选择活动资源",
      trigger: "change"
    }
  ],
  //描述
  desc: [
    {
      required: true,
      message: "请输入活动描述",
      trigger: 'blur'
    }
  ]
}

const onSubmit = () => {
  console.log('submit!')
}
</script>



<template>


<!-- el-form 表单最外层组件
      model:绑定表单的数据源（一个用来收集表单数据，另一个就是用来做校验）
      label-width: 表单域标签的宽度
      style: 行内样式
-->
  <el-form :model="form" :rules = "formRule" label-width="auto" style="max-width: 600px">
    <!-- el-form-item: 用来包裹表单控件 -->
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop = "region">
      <!-- el-select + el-option:下拉列表组件 placeholder:提示文本-->
      <el-select v-model="form.region" placeholder="please select your zone">
        <!-- el-option
              label：给用户展示的文本
              value: 给v-model提供手机的值 -->
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time" prop = "date">
        <el-time-picker
          v-model="form.date"
          placeholder="Pick a time"
          style="width: 100%"
        />
    </el-form-item>
    <el-form-item label="Instant delivery">
      <!-- el-switch : 开关组件，只有两种状态，打开或关闭 -->
      <el-switch v-model="form.delivery" />
    </el-form-item>


    <!-- el-checkbox -->
    <el-form-item label="Activity type" prop="type">
      <!-- el-checkbox-group将多选框进行分组 ，用足来管理多个复选框
           v-model:手气多个复选框的值-->
      <el-checkbox-group v-model="form.type">
        <!-- el-checkbox： 一个复选框组件
              value: 提供给v-model收集值用的
              name: 多选框的名字 -->
        <el-checkbox value="Online activities" name="type">
          Online activities
        </el-checkbox>
        <el-checkbox value="Promotion activities" name="type">
          Promotion activities
        </el-checkbox>
        <el-checkbox value="Offline activities" name="type">
          Offline activities
        </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop = resource>
      <!-- el-radio-group 将单选框进行分组 ,用来管理一组单选框
           v-model用来收集选中的单选框的值-->
      <el-radio-group v-model="form.resource">
        <!-- el-radio就是一个单选框的组件 -->
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop ="desc">

      <!--这是一个文本域    -->
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>


      <!-- 按钮组件
            type:按钮的类型，不同的类型对应不同的颜色 -->
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
