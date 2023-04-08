<template>
    <div class="w-full" :style="'height:100vh; ' +'background-color:'+color+';'">
        <Time></Time>
        <div class="grid grid-cols-4">
            <div></div>
            <div></div>
            <div class="m-3">
              <TaskList></TaskList>
            </div>
            <div class="m-4">
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
        mounted() {
          this.color = this.getBackground();
          setInterval(()=>{this.color = this.getBackground(); console.log('height:100vh; ' +'background-color:'+this.color+';')}, 600)
        },
      data() {
          return {
            colors : ['rgb(133, 227, 255)','rgb(144, 217, 236)','rgb(154, 207, 220)','rgb(164, 198, 204)','rgb(172, 190, 190)','rgb(180, 183, 178)','rgb(187, 177, 166)','rgb(193, 170, 155)','rgb(199, 165, 145)','rgb(205, 160, 135)','rgb(210, 155, 127)','rgb(215, 150, 119)','rgb(220, 146, 111)','rgb(224, 142, 104)','rgb(228, 138, 97)','rgb(232, 134, 91)','rgb(235, 131, 85)','rgb(239, 128, 79)','rgb(242, 125, 74)','rgb(245, 122, 69)'],
            color : 'rgb(133, 227, 255)'
          }
        },
      methods: {
        getBackground() {
          const time = new Date();
          if(6<=time.getHours()&& time.getHours()<7){
            return this.colors[59-time.getMinutes()]
          } else if(21<=time.getHours()&& time.getHours()<22){
            console.log(time.getMinutes())
            return this.colors[time.getMinutes()]
          } else if(7<=time.getHours()&& time.getHours()<18){
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
