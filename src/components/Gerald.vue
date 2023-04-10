<template>
    <div class="grid grid-cols-2 absolute z-30 hover:scale-150 scale-100 transition-all" style="bottom: 7vmin; right:10vmin; width:25vw;">
        <div class="text-box relative">
            <p class="absolute top--0.5rem left--0.8rem text-2xl">✨</p>
            <p class="bg-white m-3 p-3 rounded-lg" style="overflow-wrap: break-word;">{{quote}}</p>
        </div>
        <img class="image-box" :style="'filter:drop-shadow(10px 10px 10px '+$root.primaryColor+')'" :src="image" alt="test" />
    </div>
</template>

<script>
    import uwu from "node-owoifier";

    const uwuer = new uwu();

    const IMAGE_URLS = [
        "https://imagehostingthing.netlify.app/duck0.png",
        "https://imagehostingthing.netlify.app/duck1.png",
        "https://imagehostingthing.netlify.app/duck2.png",
        "https://imagehostingthing.netlify.app/duck3.png"
    ];
    export default {
        name: "Gerald",
        data() {
            return {
                image: IMAGE_URLS[0],
                quote: "",
            }
        },
        async mounted() {
            const quotes = await (await fetch("https://type.fit/api/quotes")).json();
            this.quote = uwuer.OwOify(quotes[Math.floor(Math.random() * quotes.length)].text, "high");
            if (Math.floor(Math.random() * 100) === 1)
                this.quote = "gerald{w4tch_0ut_f0r_th4t_m0on!_qUAcK}";
            this.image = IMAGE_URLS[Math.floor(Math.random() * IMAGE_URLS.length)];
        }
    }
</script>

<style lang="scss" scoped>
    .text-box {
        transform: scale(0) translate(10rem, 0);
        transition: all 150ms;
    }
    div:hover > .text-box {
        transform: scale(1) translate(0, 0);
    }
</style>