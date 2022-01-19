import $ from 'jquery';
import { QWEATHER_KEY } from './../data/common/keys';
import { IPosition } from '../data/interfaces/common';
import { IWeather } from '../data/interfaces/weather';

export const realtimeWeather = async ({lat, lng}: IPosition): Promise<IWeather> => {
  const res: IWeather = await $.ajax({
    type: 'get',
    url: 'https://devapi.qweather.com/v7/weather/now',
    data: {
      key: QWEATHER_KEY,
      location: `${lng},${lat}`,
    }
  });
  if (res.refer.sources && res.refer.sources.length > 0) {
    console.log(`日出日落信息来源：${res.refer.sources.join(',')}，许可或版权声明：${(res.refer?.license || []).join(',')}`);
  }
  return res;
};
