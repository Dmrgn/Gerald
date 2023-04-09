<template>
    <div :class="'absolute bottom-0'" :style="'width: '+size+'vw; left:'+(x*(size/100))+'vw; transform: scale('+(isFlippedX?'-1':1)+','+(isFlippedY?'-1':1)+');'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path :fill="color" fill-opacity="0.5" d="M0,96L30,122.7C60,149,120,203,180,234.7C240,267,300,277,360,256C420,235,480,181,540,170.7C600,160,660,192,720,213.3C780,235,840,245,900,250.7C960,256,1020,256,1080,218.7C1140,181,1200,107,1260,80C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#007acc;"></path>
        </svg>
    </div>
    <div :class="'absolute bottom-0'" :style="'width: '+size+'vw; left:-'+((100-x)*(size/100))+'vw; transform: scale('+(isFlippedX?'-1':1)+','+(isFlippedY?'-1':1)+');'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path :fill="color" fill-opacity="0.5" d="M0,96L30,122.7C60,149,120,203,180,234.7C240,267,300,277,360,256C420,235,480,181,540,170.7C600,160,660,192,720,213.3C780,235,840,245,900,250.7C960,256,1020,256,1080,218.7C1140,181,1200,107,1260,80C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#007acc;"></path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Wave",
        props: {
            x: {
                type: Number,
                default: 0
            },
            size: {
                type: Number,
                default: 100
            },
            isFlippedX: {
                type: Boolean,
                default: false
            },
            isFlippedY: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: "rgb(255,0,0)"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>