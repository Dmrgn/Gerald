<template>
    <div class="absolute" style="bottom: 5vmin; left: 5vmin;">
        <h1 class="mb-[-3vmin]" style="font-size: 10vmin;">{{currentTime}}</h1>
        <h1 class="ml-[1vmin]" style="font-size: 2vmin;">{{currentDate}}</h1>
    </div>
</template>

<script type="ts">
import moment from 'moment';

export default {
    name: "Time",
    mounted () {
        this.updateClock();
        setInterval(this.updateClock, 999)
    },
    methods: {
        updateClock() {
          const est = moment.utc().subtract(4, "hour");
          this.currentTime = `${est.format('h:mm:ss')}`
          this.currentDate = `${est.format('MMMM Do YYYY')}`;
          this.dateTimeString = `${est.year()}-${est.month()}-${est.day()}`;
        },

    },
    data() {
        return {
            currentTime: "",
            currentDate: "",
            dateTimeString: "",

        };
    },
}
</script>

<style lang="scss" scoped>

</style>
