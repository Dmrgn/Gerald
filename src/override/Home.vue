<template>
    <div class="w-full" :style="'height:100vh; ' +'background-color:'+color+';'">
        <Time></Time>
        <div :class="'grid ' + (isSmallDisplay == 1 ? 'grid-cols-3' : (isSmallDisplay == 2 ? 'grid-cols-2' : 'grid-cols-4'))">
            <div class="m-4">
                <FavoritedMenu></FavoritedMenu>
            </div>
            <div v-if="isSmallDisplay == 0"></div>
            <div v-if="isSmallDisplay < 2"></div>
            <div class="m-3">
                <TaskList></TaskList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Time from '../components/Time.vue'
    import FavoritedMenu from '../components/FavoritedMenu.vue'
    import TaskList from '~/components/TaskList.vue';

    export default {
        components: {
            Time,
            FavoritedMenu,
            TaskList,
        },
        mounted() {
            // change the background over the course of the day
            this.color = this.getBackground();
            setInterval(() => {
                this.color = this.getBackground();
            }, 600)
            // track resize for proper column split
            window.onresize = this.resize;
            this.resize();
        },
        data() {
            return {
                colors: ['rgb(133, 227, 255)', 'rgb(144, 217, 236)', 'rgb(154, 207, 220)', 'rgb(164, 198, 204)',
                    'rgb(172, 190, 190)', 'rgb(180, 183, 178)', 'rgb(187, 177, 166)', 'rgb(193, 170, 155)',
                    'rgb(199, 165, 145)', 'rgb(205, 160, 135)', 'rgb(210, 155, 127)', 'rgb(215, 150, 119)',
                    'rgb(220, 146, 111)', 'rgb(224, 142, 104)', 'rgb(228, 138, 97)', 'rgb(232, 134, 91)',
                    'rgb(235, 131, 85)', 'rgb(239, 128, 79)', 'rgb(242, 125, 74)', 'rgb(245, 122, 69)',
                    'rgb(245, 122, 69)', 'rgb(245, 113, 63)', 'rgb(245, 104, 58)', 'rgb(245, 97, 53)',
                    'rgb(245, 90, 48)', 'rgb(245, 84, 44)', 'rgb(245, 78, 40)', 'rgb(246, 72, 37)',
                    'rgb(246, 67, 33)', 'rgb(246, 63, 30)', 'rgb(246, 59, 28)', 'rgb(246, 55, 25)',
                    'rgb(246, 51, 23)', 'rgb(246, 47, 20)', 'rgb(246, 44, 18)', 'rgb(246, 41, 16)',
                    'rgb(246, 38, 14)', 'rgb(246, 35, 12)', 'rgb(246, 32, 11)', 'rgb(246, 30, 9)',
                    'rgb(246, 30, 9)', 'rgb(224, 29, 16)', 'rgb(204, 28, 23)', 'rgb(186, 26, 28)',
                    'rgb(169, 25, 34)', 'rgb(154, 25, 39)', 'rgb(140, 24, 43)', 'rgb(127, 23, 47)',
                    'rgb(115, 22, 51)', 'rgb(104, 22, 55)', 'rgb(94, 21, 58)', 'rgb(84, 20, 61)', 'rgb(75, 20, 64)',
                    'rgb(66, 19, 67)', 'rgb(58, 19, 69)', 'rgb(51, 19, 72)', 'rgb(44, 18, 74)', 'rgb(37, 18, 76)',
                    'rgb(31, 17, 78)', 'rgb(25, 17, 80)'
                ],
                color: 'rgb(133, 227, 255)',
                isSmallDisplay: 0,
                width: 0,
                height: 0
            }
        },
        methods: {
            resize() {
                this.isSmallDisplay = (window.innerWidth <= 1800) ? 1 : 0;
                this.isSmallDisplay = (window.innerWidth <= 1200) ? 2 : this.isSmallDisplay;
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            },
            getBackground() {
                const time = new Date();
                if (6 <= time.getHours() && time.getHours() < 7) {
                    return this.colors[59 - time.getMinutes()]
                } else if (18 <= time.getHours() && time.getHours() < 19) {
                    return this.colors[time.getMinutes()]
                } else if (7 <= time.getHours() && time.getHours() < 18) {
                    return 'rgb(133, 227, 255)'
                } else {
                    return 'rgb(25, 17, 80)'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>