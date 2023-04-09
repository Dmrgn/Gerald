<template>
  <div class = "absolute z-20" style="bottom:30vmin; left:5vmin;">
    <h1 class="mb-[-3vmin]" :style="'font-size: 6vmin; color: '+$root.secondaryColor+';'">{{city}}</h1>
    <h1 class="ml-[1vmin] my-[1vmin]" :style="'font-size: 4vmin; color: '+$root.secondaryColor+';'">{{temp}}° - {{condition}}</h1>
  </div>
</template>

<script>

export default {
  name:"Weather",

  data() {
    return {
      city : '',
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
      moonIllumination: 0,
      isMoonUp : '',
      isSunUp : '',
      condition: '',
      clouds: 0,
      temp:0,
      ip:'',
      valid : false
    }
  },
  async mounted(){
    while(this.city===''){
      this.updateWeatherData()
      await new Promise(r => setTimeout(r, 500));
    }
  },
  methods: {
    getData(){
      return this.data
    },
    getIp(){
      fetch("https://api.ipify.org?format=json", {
        method:"GET"
      }).then(async (response)=>this.ip = (await response.json())["ip"])
      return this.ip
    },
    updateWeatherData (){

      fetch("http://api.weatherapi.com/v1/current.json?key=c1a41272c5ea4d19b97173505230904&q="+this.getIp()+"&aqi=no").then(
          async (response) => {
            let r = (await response.json())
            console.log(r)
            this.city=r['location']['name']
            this.condition=r['current']['condition']['text']
            this.clouds = r['current']['cloud']
            this.temp = r['current']['temp_c']
          }
      )
      fetch("http://api.weatherapi.com/v1/astronomy.json?key=c1a41272c5ea4d19b97173505230904&q="+this.getIp()+"&dt=").then(
          async (response) => {
            let r = (await response.json())
            console.log(r)
            this.sunrise=r['astronomy']['astro']['sunrise']
            this.sunset=r['astronomy']['astro']['sunset']
            this.moonrise=r['astronomy']['astro']['moonrise']
            this.moonset=r['astronomy']['astro']['moonset']
            this.moonIllumination = r['astronomy']['astro']['moonIllumination']
            this.isMoonUp=r['astronomy']['astro']['is_moon_up']
            this.isSunUp=r['astronomy']['astro']['is_sun_up']
            console.log(this.sunset)
          }
      )

    }
  }
}

</script>
