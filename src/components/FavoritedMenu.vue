<template>
    <div class="grid grid-cols-3">
        <a class="text-center p-4 m-3 relative aspect-square bg-white rounded" v-for="(item, key) in favorites" :key="key" :href="item.url">
            <div :href="item.url">
                <img class="rounded aspect-square" alt="error" :src="item.url" @error="imageError">
                <p class="absolute bottom-0">{{item.name}}</p>
            </div>
        </a>
    </div>
    <div class="flex flex-col m-3">
        <input placeholder=" Name" class="my-2 rounded" style="width: max(20%, 250px)" ref="favoriteName" v-if="isAdding">
        <input placeholder=" Url" class="my-2 rounded" style="width: max(20%, 250px)" ref="favoriteUrl" v-if="isAdding">
        <p class="my-2 ml-1 text-red-600 font-bold" v-if="errorMessage">{{errorMessage}}</p>
        <button class="my-2 rounded bg-white w-20 p-4 text-lg" @click="addFavorite()">Add</button>
    </div>
    <br>
</template>

<script lang="ts">
import { favoritesStorage } from '../logic/storage'; 

export default {
    name: "FavoritedMenu",
    data() {
        return {
            favorites: favoritesStorage,
            isAdding: true,
            errorMessage: "error"
        }
    },
    methods: {
        addFavorite() {
            favoritesStorage.value.push({name: this.$refs.favoriteName.value, url: this.$refs.favoriteUrl.value});
            this.$refs.favoriteName.value = ''
            this.$refs.favoriteUrl.value = ''
        },
        removeFavorite(index: number) {
            favoritesStorage.value.splice(index, 1)
        },
        imageError(e) {
            console.log(e);
            e.target.src = "https://imgs.search.brave.com/2ZzQSooIyRSbIhX7hO4xd55xxVeZVnBGmOJ4ys62bp8/rs:fit:432:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/RWhsU2owMV9zTnhV/RUZwR1lJUE13SGFJ/SSZwaWQ9QXBp";
        }
    },
}
</script>

<style lang="scss" scoped>
</style>