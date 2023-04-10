<template>
    <div class="z-30 absolute grid grid-cols-3 w-full top-40vh">
        <div></div>
        <input autofocus ref="searchBar" class="rounded-lg" type="text" :placeholder="placeholder" @keypress.enter="search" />
        <div></div>
    </div>
</template>

<script>
    const POSSIBLE_SEARCHES = [
        "search...",
        "what do you want...",
        "google your problems away...",
        "how to center a div in html...",
        "wikihow world domination...",
        "directions to mars...",
        "directions to area 51...",
        "how to install more ram...",
        "how get good at math fast...",
        "https://www.youtube.com/watch?v=HMFqO-0Gl80",
    ];
    export default {
        name: "Search",
        data() {
            return {
                placeholder: POSSIBLE_SEARCHES[Math.floor(Math.random() * POSSIBLE_SEARCHES.length)]
            }
        },
        mounted() {
            this.$refs.searchBar.focus();
            console.log(this.$refs.searchBar);
        },
        methods: {
            search(e) {
                const query = e.target.value;
                window.location.replace(`https://www.google.ca/search?q=${query}`);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>