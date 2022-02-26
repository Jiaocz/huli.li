<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { IPosition } from './data/interfaces/position';
import { ISun } from './data/interfaces/sun';
import { IWeather } from './data/interfaces/weather';
import { getLocation } from './services/location'
import { getSunRiseAndSet } from './services/sun';
import { realtimeWeather } from './services/weather';
import Fox from './components/Fox.vue';
import Clock from './components/Clock.vue';
import Footer from './components/Footer.vue';

let sunStatus = ref<ISun>();
let isDaytime = ref(true);
let weather = ref<IWeather>();
let position: IPosition;
let weatherTimerId: number;
let sunTimerId: number;
let today: number;

const init = async () => {
  await initLocation();
  today = new Date().getDay();
  await getWeather();
  weatherTimerId = setInterval(getWeather, 60 * 60 * 1000);
  await getSunStatus();
  await checkStatus();
  sunTimerId = setInterval(checkStatus, 45 * 1000);
}

const initLocation = async () => {
  const locate = await getLocation();
  position = locate.result.location;
}

const getWeather = async () => {
  const weatherNow = await realtimeWeather(position);
  weather.value = weatherNow;
}

const getSunStatus = async () => {
  const sun = await getSunRiseAndSet(position);
  sunStatus.value = sun;
}

const checkStatus = async () => {
  if (sunStatus.value) {
    const now = new Date();
    if (now.getDay() != today) {
      await getSunStatus();
    }
    isDaytime.value = new Date(sunStatus.value.sunrise).getTime() < now.getTime() && new Date(sunStatus.value.sunset).getTime() > now.getTime();
  } else {
    getSunStatus();
    checkStatus();
  }
};

onMounted(init);
onBeforeUnmount(() => {
  clearInterval(weatherTimerId);
  clearInterval(sunTimerId);
});
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