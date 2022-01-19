export interface ISun {
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
