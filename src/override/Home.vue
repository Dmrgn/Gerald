<script setup>
import { taskList } from '~/logic/storage'

// function openOptionsPage() {
//   browser.runtime.openOptionsPage()
// }
function addTask(task) {
  taskList.value.push(task.target.value)
  task.target.value = ''
}
function removeTask(task) {
  taskList.value.splice(task, 1)
}
function clearTasks() {
  taskList.value = []
}
</script>

<template>
  <div class="w-full h">
    <div v-for="(task, key) in taskList" :key="key">
      <div>
        <input type="button" value="x" @click="removeTask(key)"> {{ task }}
        <br>
      </div>
    </div>
  </div>
  <input class="border" @keyup.enter="addTask">
  <br>
  <input class="border" @keyup.enter="removeTask">
  <br>
  <button class="border" @click="clearTasks">
    clearTasks
  </button>
</template>
