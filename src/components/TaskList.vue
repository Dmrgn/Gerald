<template>
    <h2 class="text-2xl mx-3 font-bold" :style="'color:'+$root.secondaryColor">Tasks</h2>
    <div v-for="(task, key) in taskList" :key="key">
        <div class="parent flex text-xl m-3 relative" @dragover="dragOver" @dragstart="dragStart" @dragend="dragEnd" :data-index="key">
            <button class="p-2 bg-white rounded-lg relative w-13 border-solid border-4 border-gray-300" type="button"
                @click="removeTask(key)">
                <div class="absolute top-11px left-19px bg-black w-[2px] h-[20px]" style="transform:rotate(-45deg)"></div>
                <div class="absolute top-11px left-19px bg-black w-[2px] h-[20px]" style="transform:rotate(45deg)"></div>
            </button>
            <div class="p-2 ml-2 z-30 relative bg-white rounded-lg font-bold border-4 border-gray-300 w-full" :style="'background-color:'+(this.currentlyDragged===key?'rgba(255,255,255,0.5);':'white')" draggable="true">
                <div :class="'absolute rounded bg-gray-200 top--10px left-0 w-100% h-50%'+(this.currentlyDraggedOver===key?'':'hidden')"></div>
                <p class="select-none">{{ task }} </p>
            </div>
        </div>
    </div>
    <input
        class="p-2 m-3 text-lg bg-white rounded-lg border-solid border-4 border-gray-300"
        style="width: max(80%, 20rem)"
        @keyup.enter="addTask" placeholder="Add task...">
</template>

<script>
    import {
        taskList
    } from "~/logic";
    export default {
        data() {
            return {
                taskList: taskList,
                currentlyDragged: -1,
                currentlyDraggedOver: -1
            }
        },
        methods: {
            addTask(task) {
                if (taskList.value.length === 7) return;
                taskList.value.push(task.target.value)
                task.target.value = ''
            },
            removeTask(task) {
                taskList.value.splice(task, 1)
            },
            dragStart(e) {
                this.currentlyDragged = Number(e.target.closest("div.parent").getAttribute("data-index"));
            },
            dragEnd() {
                const temp = taskList.value.splice(this.currentlyDragged, 1);
                taskList.value.splice(this.currentlyDraggedOver, 0, temp[0]);
                this.currentlyDragged = -1;
                this.currentlyDraggedOver = -1;
            },
            dragOver(e) {
                this.currentlyDraggedOver = Number(e.target.closest("div.parent").getAttribute("data-index"));
            }
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