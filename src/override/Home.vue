<template>
    <div class="w-full bg-red-200" style="height:100vh">
        <Time></Time>
        <div class="grid grid-cols-3">
            <div></div>
            <div></div>
            <FavoritedMenu></FavoritedMenu>
        </div>
        <div v-for="(task, key) in taskList" :key="key">
            <div>
                <input type="button" value="x" @click="removeTask(key)"> {{ task }}
                <br>
            </div>
        </div>
        <input class="border" @keyup.enter="addTask">
        <br>
        <input class="border" @keyup.enter="removeTask">
        <br>
        <button class="border" @click="clearTasks">
            clearTasks
        </button>
    </div>
    
</template>

<script lang="ts">
import Time from '../components/Time.vue'
import FavoritedMenu from '../components/FavoritedMenu.vue'
import { taskList } from '~/logic/storage'

export default {
    components: {
        Time,
        FavoritedMenu,
    },
    mounted () {
    },
    data() {
        return {
        };
    },
    methods: {
        addTask() {
            taskList.value.push(task.target.value)
            task.target.value = ''
        }
    },
}
function addTask(task) {
  taskList.value.push(task.target.value)
  task.target.value = ''
}
function removeTask(task: Element) {
  taskList.value.splice(task, 1)
}
function clearTasks() {
  taskList.value = []
}
</script>

<style lang="scss" scoped>

</style>
