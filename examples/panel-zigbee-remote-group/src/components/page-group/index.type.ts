export interface GroupEditQuery {
  code: string;
  localId: string;
  categoryCode: string;
  groupIcon?: string;
  groupName?: string;
}

export interface Props {
  /**
   * 跳转遥控器群组支持的品类 code
   */
  codes: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 主题
   */
  theme: 'light' | 'dark';
  /**
   * 渐变背景色
   */
  background: string;
  /**
   * 背景图
   */
  backgroundImage: string;
}
