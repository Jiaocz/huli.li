<script setup lang="ts">
import { ref } from 'vue';
import { IPosition, ISunResult } from './data/interfaces/common';
import { getLocation } from './services/location'
import { getSunRiseAndSet } from './services/sun';
import { realtimeWeather } from './services/weather';
import { IWeather } from './data/interfaces/weather';
import Fox from './components/Fox.vue';
import Clock from './components/Clock.vue';
import Footer from './components/Footer.vue';

let sunStatus = ref<ISunResult>();
let position = ref<IPosition>();
let isDaytime = ref(true);
let weather = ref<IWeather>();
(async () => {
  const locate = await getLocation();
  position.value = locate.result.location;
  const sun = await getSunRiseAndSet(locate.result.location);
  sunStatus.value = sun;

  const now = new Date();
  isDaytime.value = new Date(sunStatus.value.sunrise).getTime() < now.getTime() && new Date(sunStatus.value.sunset).getTime() > now.getTime();

  const weatherNow = await realtimeWeather(position.value);
  weather.value = weatherNow;
})();
console.log('%c狐狸狸的小窝 - huli.li%chttps://huli.li/%chttps://github.com/Jiaocz/huli.li', 'color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .5em; font-weight: bold;', 'color: #e4a240; border: 1px #e4a240 solid; border-radius: 0; padding: .5em;','color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .5em;');
</script>

<template>
  <div class="container">
    <Clock :weather="weather" :sun="sunStatus" />
    <Fox :is-daytime="isDaytime" />
    <Footer />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #132c33;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #cad3c3;
}
</style>
<style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>