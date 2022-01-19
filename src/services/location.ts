import $ from 'jquery';
import { IPLocationResult } from "../data/interfaces/position";
import { TMAP_KEY } from "../data/common/keys";

export const getLocation = async (): Promise<IPLocationResult> => {
  const res: IPLocationResult = await $.ajax({
    type: 'get',
    url: `https://apis.map.qq.com/ws/location/v1/ip?key=${TMAP_KEY}&output=jsonp`,
    dataType: 'jsonp',
    jsonpCallback: 'callback',
  });
  return res;
};
