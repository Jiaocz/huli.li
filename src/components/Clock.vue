<template>
  <div id="clock">
    <p class="time">{{ time }}</p>
    <p class="text" v-if="weather">
      <i :class="{['qi-' + weather?.now.icon]: true}" style="margin-right: .5em;"></i>{{ weather.now.text }}, {{ weather.now.temp }}℃（体感温度{{weather.now.feelsLike}}℃）,{{weather.now.windDir}}{{weather.now.windScale}}级，相对湿度{{weather.now.humidity}}%
    </p>
    <p class="text" v-if="sun">
      <i class="fas fa-sun" style="margin-right: .5em;"></i>日出：{{ new Date(sun.sunrise).toLocaleTimeString() }} - 日落：{{ new Date(sun.sunset).toLocaleTimeString() }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IWeather } from '../data/interfaces/weather';
import 'qweather-icons/font/qweather-icons.css';
import { ISunResult } from '../data/interfaces/common';

interface Props {weather?: IWeather, sun?: ISunResult}

const props = defineProps<Props>();

let time = ref<string>('');

const zeroPadding = (num: number, digit: number): string => {
  let zero = '';
  for (let i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

const updateTime = () => {
  let cd = new Date();
  time.value = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`;
};
updateTime();
const timerID = setInterval(updateTime, 1000);

console.log('%cClock - Digital Clock with Vue.js%chttps://codepen.io/gau/pen/LjQwGp', 'color: rgba(255,255,255,.8); background: #222; border-radius: 5px 0 0 5px; margin: 0; border: #222 1px solid; padding: .5em; font-weight: bold;', 'color: #222; border: 1px #222 solid; border-radius: 0 5px 5px 0; padding: .5em;');
</script>

<script lang="ts">
export default {
  beforeDestroy() {
    clearInterval(timerID);
  },
}
</script>

<style scoped lang="scss">
/* Clock from https://codepen.io/gau/pen/LjQwGp?editors=0010 */
p {
  margin: 0;
  padding: 0;
}
#clock {
  padding-top: 1rem;
  padding-left: 1em;
  padding-right: 1em;
  /* font-family: "Share Tech Mono", monospace; */
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
}
</style>
