<template>
  <h2 class="text-2xl font-bold text-red-400">Task List</h2>
  <div v-for="(task, key) in taskList" :key="key">
    <div class="flex text-xl">
      <button class="p-2 bg-white rounded-lg w-13 border-solid border-4 border-red-300" type="button" @click="removeTask(key)" >

      </button>
      <p class="p-2 bg-white rounded-lg text-red-400 font-bold w-80 border-4 border-gray-100">{{ task }} </p>
    </div>
  </div>
  <input class="p-2 w-94 text-xl bg-white rounded-lg text-red-400 border-solid border-4 border-gray-300 placeholder-red-200 font-bold" @keyup.enter="addTask" placeholder="Add Task">
</template>

<script lang="ts">
 import {taskList} from "~/logic";
export default {
 data() {
   return {
     taskList: taskList
   }
 },
 methods: {
   addTask(task: Element) {
     console.log(task);
     taskList.value.push(task.target.value)
     task.target.value = ''
   },
   removeTask(task: number) {
     taskList.value.splice(task, 1)
   },
 }
 }
</script>

<style lang="scss" scoped>
p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
