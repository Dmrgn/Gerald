<script>

export default {
  name:"Weather",
  mounted(){
    setInterval(this.updateWeatherData,5000)
  },
  data() {
    return {
      name : '',
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
      ip:''
    }
  },
  methods: {
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
            this.name=r['current']['name']
            this.condition=r['current']['condition']['text']
            this.clouds = r['current']['cloud']
            this.temp = r['current']['temp_c']
          }
      )
      fetch("http://api.weatherapi.com/v1/astronomy.json?key=c1a41272c5ea4d19b97173505230904&q="+this.getIp()+"&dt=").then(
          async (response) => {
            let r = (await response.json())
            this.sunrise=r['astronomy']['astro']['sunrise']
            this.sunset=r['astronomy']['astro']['sunset']
            this.moonrise=r['astronomy']['astro']['moonrise']
            this.moonset=r['astronomy']['astro']['moonset']
            this.moonIllumination = r['astronomy']['astro']['moonIllumination']
            this.isMoonUp=r['astronomy']['astro']['is_moon_up']
            this.isSunUp=r['astronomy']['astro']['is_sun_up']
          }
      )
    }
  }
}

</script>
