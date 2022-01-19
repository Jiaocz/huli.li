import $ from 'jquery';
import { ISunResult, IPosition } from "../data/interfaces/common";
import { QWEATHER_KEY } from '../data/common/keys';

export const getSunRiseAndSet = async ({lat, lng}: IPosition): Promise<ISunResult> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const res: ISunResult = await $.ajax({
    type: 'get',
    url: 'https://devapi.qweather.com/v7/astronomy/sun',
    data:{
      key: QWEATHER_KEY,
      location: `${lng},${lat}`,
      date: `${year}${month}${day}`,
    }
  });
  if (res.refer.sources && res.refer.sources.length > 0) {
    console.log(`日出日落信息来源：${res.refer.sources.join(',')}，许可或版权声明：${(res.refer?.license || []).join(',')}`);
  }
  return res;
};
