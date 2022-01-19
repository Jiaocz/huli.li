export interface IPLocationResult {
  /**
   * 状态码，0为正常，其它为异常
   */
  status: number;

  /**
   * 对status的描述
   */
  message: string;

  /**
   * IP定位结果
   */
  result: ILocation;
};

export interface ILocation {
  /**
   * 用于定位的IP地址
   */
  ip: string;

  /**
   * 定位坐标。
   * 注：IP定位服务精确到市级，该位置为IP地址所属的行政区划政府坐标。
   */
  location: IPosition;

  /**
   * 定位行政区划信息
   */
  ad_info: {
    /**
     * 国家
     */
    nation: string;

    /**
     * 省份
     */
    province: string;

    /**
     * 城市
     */
    city: string;

    /**
     * 区
     */
    district: string;

    /**
     * 行政区划代码
     */
    adcode: number;
  }
};

export interface IPosition  {
  /**
   * 纬度
   */
  lat: number;

  /**
   * 经度
   */
  lng: number;
};
