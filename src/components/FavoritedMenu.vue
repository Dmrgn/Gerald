<template>
    <div class="grid grid-cols-3">
        <a class="text-center p-4 m-3 relative aspect-square bg-white rounded" v-for="(item, key) in favorites" :key="key" :href="item.url">
            <div>
                <img class="rounded aspect-square" alt="error" :src="item.url" @error="imageError">
                <p class="absolute bottom-0">{{item.name}}</p>
            </div>
        </a>
    </div>
    <div class="flex flex-col m-3">
        <button class="my-2 rounded bg-white w-20 p-2" @click="toggleEditing">Edit</button>
        <input placeholder=" Name" :class="'my-2 p-2 rounded to-show ' + (isEditing ? 'shown': '')" style="width: max(20%, 250px)" ref="favoriteName">
        <input placeholder=" Url" :class="'my-2 p-2 rounded to-show ' + (isEditing ? 'shown': '')" style="width: max(20%, 250px)" ref="favoriteUrl">
        <input placeholder=" Image Url" :class="'my-2 p-2 rounded to-show ' + (isEditing ? 'shown': '')" style="width: max(20%, 250px)" ref="favoriteImage">
        <p class="my-2 ml-1 text-red-600 font-bold to-show" v-if="errorMessage">{{errorMessage}}</p>
        <button class="my-2 rounded to-show bg-white w-20 p-2" @click="addFavorite()">Add</button>
    </div>
    <br>
</template>

<script lang="ts">
import { favoritesStorage } from '../logic/storage'; 

const ERROR_MESSAGES = {
    url: ["Thats not a real URL...", "Ur URL is invalid.", "Come back with a better URL!"],
    image: ["What kind of image is that...", "Bro... fix your image.", "Thats not a valid image URL!"],
    tooMany: ["You can't have that many favourites!", "Too many favourites!", "Thats not a valid image URL!"],
};

function isValidURL(str: string) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

export default {
    name: "FavoritedMenu",
    data() {
        return {
            favorites: favoritesStorage,
            isEditing: false, 
            errorMessage: ""
        }
    },
    methods: {
        addFavorite() {
            let item = {name: this.$refs.favoriteName.value, url: this.$refs.favoriteUrl.value, image: this.$refs.favoriteImage.value};
            if (!isValidURL(item.url)) {
                this.errorMessage = ERROR_MESSAGES.url[Math.floor(Math.random()*ERROR_MESSAGES.url.length)];
                return;
            }
            if (!isValidURL(item.image)) {
                this.errorMessage = ERROR_MESSAGES.image[Math.floor(Math.random()*ERROR_MESSAGES.image.length)];
                return;
            }
            if (favoritesStorage.value.length === 9) {
                this.errorMessage = ERROR_MESSAGES.tooMany[Math.floor(Math.random()*ERROR_MESSAGES.tooMany.length)];
                return;
            }
            favoritesStorage.value.push(item);
            this.$refs.favoriteName.value = '';
            this.$refs.favoriteUrl.value = '';
            this.$refs.favoriteImage.value = '';
        },
        removeFavorite(index: number) {
            favoritesStorage.value.splice(index, 1)
        },
        imageError(e) {
            console.log(e);
            e.target.src = "https://imgs.search.brave.com/2ZzQSooIyRSbIhX7hO4xd55xxVeZVnBGmOJ4ys62bp8/rs:fit:432:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/RWhsU2owMV9zTnhV/RUZwR1lJUE13SGFJ/SSZwaWQ9QXBp";
        },
        toggleEditing() {
            this.isEditing = !this.isEditing;
        }
    },
}
</script>

<style lang="scss" scoped>
    
    // .to-show {
    //     transition: all 1s;
    //     transform: ;
    // }

    // .shown {

    // }
</style>