<template>
    <div :class="'absolute rounded-full '" :style="'width: 10vw; height: 10vw; left:'+sunx+'vw; top: '+suny+'vh; background-color: orange; filter: drop-shadow(1px 1px 8px #ff6622);'">
    </div>
    <div :class="'absolute rounded-full '" :style="'width: 4vw; height: 4vw; left:'+(moonx)+'vw; top: '+moony+'vh; background-color: rgb(220, 220, 220); filter: drop-shadow(1px 1px 8px #aaaaaa);'">
    </div>
</template>

<script>
export default {
  name: "Sky",
  data() {
    return {
      moonx: -10,
      moony: -10,
      moonup: false,
      sunx: -10,
      suny:-10,
      sunup: false,
      ip:''
    }
  },
  mounted() {
    setInterval(this.update, 1000)
  },
  methods: {
    getIp() {
      fetch("https://api.ipify.org?format=json", {
        method: "GET"
      }).then(async (response) => this.ip = (await response.json())["ip"])
      return this.ip
    },
    diff_minutes(dt2, dt1) {

      let diff = (dt2 - dt1) / 1000;
      diff /= 60;

      return Math.abs(Math.round(diff));

    },
    update() {
      fetch("http://api.weatherapi.com/v1/astronomy.json?key=c1a41272c5ea4d19b97173505230904&q=" + this.getIp() + "&dt=").then(
          async (response) => {
            let r = (await response.json())
            let w = 100
            let h = 100
            let moonRadius = w / 2
            let sunRadius = w / 2 * 1.2
            this.moonx = moonRadius * Math.cos(Math.PI*this.diff_minutes(new Date('01 Jan 1970 '+new Date().toTimeString()), new Date('01 Jan 1970 '+r['astronomy']['astro']['moonrise']))/this.diff_minutes(new Date('01 Jan 1970 '+r['astronomy']['astro']['moonrise']), new Date('01 Jan 1970 '+r['astronomy']['astro']['moonset'])))+w/2
            this.moony = -moonRadius * Math.sin(Math.PI*this.diff_minutes(new Date('01 Jan 1970 '+new Date().toTimeString()), new Date('01 Jan 1970 '+r['astronomy']['astro']['moonrise']))/this.diff_minutes(new Date('01 Jan 1970 '+r['astronomy']['astro']['moonrise']), new Date('01 Jan 1970 '+r['astronomy']['astro']['moonset'])))+h
            this.sunx = sunRadius * Math.cos(Math.PI*this.diff_minutes(new Date('01 Jan 1970 '+new Date().toTimeString()), new Date('01 Jan 1970 '+r['astronomy']['astro']['sunrise']))/this.diff_minutes(new Date('01 Jan 1970 '+r['astronomy']['astro']['sunrise']), new Date('01 Jan 1970 '+r['astronomy']['astro']['sunset'])))+w/2
            this.suny = -sunRadius * Math.sin(Math.PI*this.diff_minutes(new Date('01 Jan 1970 '+new Date().toTimeString()), new Date('01 Jan 1970 '+r['astronomy']['astro']['sunrise']))/this.diff_minutes(new Date('01 Jan 1970 '+r['astronomy']['astro']['sunrise']), new Date('01 Jan 1970 '+r['astronomy']['astro']['sunset'])))+h*0.9
            /*
            console.log(this.moonx)
            console.log(this.moony)
            console.log(this.sunx)
            console.log(this.suny)
             */
            //console.log(new Date('01 Jan 1970 '+new Date().toTimeString()))
            this.sunup=true;
          }
      )
    }
  }

}
</script>

<style scoped>

</style>
