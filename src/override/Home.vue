<template>
    <div class="w-full" style="height:100vh">
        <Time></Time>
        <div class="grid grid-cols-4">
            <div></div>
            <div></div>
            <div></div>
            <div class="m-4">
                <TaskList></TaskList>
                <div></div>
                <FavoritedMenu></FavoritedMenu>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import Time from '../components/Time.vue'
    import FavoritedMenu from '../components/FavoritedMenu.vue'
    import TaskList from '~/components/TaskList.vue';

    // import IconClose from '~icons/material-symbols/close-rounded'

    export default {
        components: {
            Time,
            FavoritedMenu,
            TaskList,
        },
        data() {
          return {}
        },
    }
</script>

<style lang="scss" scoped>

</style>
