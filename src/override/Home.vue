<template>
    <div class="w-full bg-red-200" style="height:100vh">
        <Time></Time>
        <div class="grid grid-cols-3">
            <div></div>
            <div></div>
            <div class="m-4">
                <div v-for="(task, key) in taskList" :key="key">
                    <div>
                        <button class="p-2 m-2 bg-white rounded" type="button" @click="removeTask(key)">
                            <img src="https://img.icons8.com/material-outlined/12/null/delete-sign.png"/>
                        </button>
                        {{ task }}
                        <br>
                    </div>
                </div>
                <input class="border" @keyup.enter="addTask">
                <br>
                <button class="border m-2" @click="clearTasks">
                    clearTasks
                </button>
                <FavoritedMenu></FavoritedMenu>
            </div>
        </div>
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
            clearTasks() {
                taskList.value = []
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>