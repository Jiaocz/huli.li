export interface ISunResult {
  /**
   * 状态码
   */
  code: string;

  /**
   * 当前API的最近更新时间
   */
  updateTime: string;

  /**
   * 当前数据的响应式页面，便于嵌入网站或应用
   */
  fxLink: string;

  /**
   * 日出时间
   */
  sunrise: string;

  /**
   * 日落时间
   */
  sunset: string;

  refer: {
    /**
     * 原始数据来源，或数据源说明，可能为空
     */
    sources?: string[];

    /**
     * 数据许可或版权声明，可能为空
     */
    license?: string[];
  }
};

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
