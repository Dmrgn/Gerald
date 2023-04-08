<template>
    <div class="absolute top-0 left-0 w-100vw h-100vh overflow-hidden">
        <Wave :x="90" :size="60" :isFlippedX="false" :isFlippedY="false" :color="color"></Wave>
        <Wave :x="50" :size="70" :isFlippedX="true" :isFlippedY="false" :color="color"></Wave>
    </div>
</template>

<script lang="ts">
import Wave from '~/components/Wave.vue'

export default {
    name: "Clouds",
    components: {
        Wave,
    },
    props: {
        color: {
            type: String,
            default: "rgb(255,0,0)"
        },
    },
}
</script>

<style lang="scss" scoped>

</style>