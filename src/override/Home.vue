<template>
    <div class="w-full bg-red-200" style="height:100vh">
        <Time></Time>
        <div class="grid grid-cols-3">
            <div></div>
            <div></div>
            <Favorited></Favorited>
        </div>
    </div>
</template>

<script lang="ts">
import Time from '../components/Time.vue'
import Favorited from '../components/FavoritedMenu.vue'

export default {
    components: {
        Time,
        Favorited
    },
    mounted () {
    },
    data() {
        return {
        };
    },
}
</script>

<style lang="scss" scoped>

</style>