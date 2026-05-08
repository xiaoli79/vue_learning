<script setup>
    import TodoFooter from './components/TodoFooter.vue';
    import TodoHeader from './components/TodoHeader.vue';
    import TodoMain from './components/TodoMain.vue';
    // 导入样式
    import './assets/style.css'
    import { ref, watch } from 'vue';

    const TODO_LIST_KEY = 'todo-list-key' 

    const todoList = ref( JSON.parse(localStorage.getItem(TODO_LIST_KEY )) || [
        { id: 321, name: '学Vue组件通信', finished: false },
        { id: 127, name: '打王者', finished: true },
        { id: 666, name: '跑步1小时', finished: false }
    ])

    //添加
    const addTodo = (name) =>{
        todoList.value.push({
            id: Date.now,
            name,
            finished: false
        })
    }

    //删除
    const delToDo = (i) =>{

        // 确认提示
        if(window.confirm("确认删除")){
            // 调用splice(i,1)从当前点击的位置删除1个
            todoList.value.splice(i,1)
        }
    }
    
    const clearTodo = ()=>{
        todoList.value = todoList.value.filter((item) => !item.finished)
    }

    // 监视数据的变化: 这里有3种操作会触发todoList的变化
    // 分别是:添加、删除、切换选中状态
    watch(todoList,(newVal) =>{
        localStorage.setItem(TODO_LIST_KEY ,JSON.stringify(newVal))
    },{
        // 深度监视~~ 能监测到对象的属性的变化~~当对象中的finished属性变化了
        // ，也要能监视到todoList的变化
        deep:true
    })

</script>


<template>
    <div class="todoapp">
        <!-- 头部 -->
        <todo-header @add-todo ="addTodo"/>
        <!-- 主体 -->
        <todo-main
          :todos="todoList"
          @del-todo="delToDo"
          @toggle-todo="toggleTodo"
        />
        <!-- 尾部 -->
        <todo-footer :todoList="todoList"
        @clear-todo="clearTodo"/>
    </div>

</template>


<style scoped>


</style>
