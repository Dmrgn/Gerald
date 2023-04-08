<template>
    <h2 class="text-2xl mx-3 font-bold">Tasks</h2>
    <div v-for="(task, key) in taskList" :key="key">
        <div class="flex text-xl m-3">
            <button class="p-2 bg-white rounded-lg w-13 border-solid border-4 border-gray-300" type="button"
                @click="removeTask(key)">
            </button>
            <p class="p-2 ml-2 bg-white rounded-lg font-bold border-4 border-gray-300" style="width: 100%;">{{ task }} </p>
        </div>
    </div>
    <input
        class="p-2 m-3 text-xl bg-white rounded-lg border-solid border-4 border-gray-300  font-bold"
        style="width: max(80%, 20rem)"
        @keyup.enter="addTask" placeholder="Add Task">
</template>

<script lang="ts">
    import {
        taskList
    } from "~/logic";
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