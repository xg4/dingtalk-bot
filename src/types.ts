export interface AtContent {
  /**
   * 被@人的手机号
   * 在content里添加@人的手机号，且只有在群内的成员才可被@，非群内成员手机号会被脱敏
   */
  atMobiles?: string[]
  /**
   * 被@人的用户userid
   * 在content里添加@人的userid
   */
  atUserIds?: string[]
  /** @所有人时：true，否则为：false */
  isAtAll?: boolean
}
export interface LinkContent {
  /** 消息标题 */
  title: string
  /** 消息内容。如果太长只会部分展示 */
  text: string
  /**
   *  点击消息跳转的URL，打开方式如下：
   *  移动端，在钉钉客户端内打开
   *  PC端 1.默认侧边栏打开 2.希望在外部浏览器打开
   */
  messageUrl: string
  /** 图片URL */
  picUrl?: string
}
export interface MarkdownContent {
  /** 首屏会话透出的展示内容 */
  title: string
  /** markdown格式的消息 */
  text: string
}
export interface ActionCardBase {
  /** 首屏会话透出的展示内容 */
  title: string
  /** markdown格式的消息 */
  text: string
  /** 0：按钮竖直排列 1：按钮横向排列 */
  btnOrientation?: '0' | '1'
}
/** 整体跳转 */
export interface ActionCardSingle extends ActionCardBase {
  /**
   * 单个按钮的标题
   * 设置此项和singleURL后，btns无效
   */
  singleTitle: string
  /**
   * 点击消息跳转的URL，打开方式如下：
   * 移动端，在钉钉客户端内打开
   * PC端 1.默认侧边栏打开 2.希望在外部浏览器打开
   */
  singleURL: string
}
export declare type ActionCardBtn = {
  /** 按钮标题 */
  title: string
  /**
   * 点击按钮触发的URL，打开方式如下：
   * 移动端，在钉钉客户端内打开
   * PC端 1.默认侧边栏打开 2.希望在外部浏览器打开
   */
  actionURL: string
}
/** 独立跳转 */
export interface ActionCardContent extends ActionCardBase {
  /** 按钮的信息：title-按钮方案，actionURL-点击按钮触发的URL */
  btns: ActionCardBtn[]
}
export interface FeedCardContent {
  /** 单条信息文本 */
  title: string
  /**
   * 点击单条信息到跳转链接
   * 说明 PC端跳转目标页面的方式，参考消息链接在PC端侧边栏或者外部浏览器打开。
   */
  messageURL: string
  /** 单条信息后面图片的URL */
  picURL: string
}

export interface Result {
  errcode: number
  errmsg: string
}

export interface Options {
  webhook: string
  secret: string
}
