import { fetch } from 'undici'
import { getSignature } from './helpers'
import {
  ActionCardContent,
  ActionCardSingle,
  AtContent,
  FeedCardContent,
  LinkContent,
  MarkdownContent,
  Options,
  Result,
} from './types'

/**
 * dingtalk docs: https://open.dingtalk.com/document/group/custom-robot-access
 */
export default class DtBot {
  private webhook: string
  private secret: string

  constructor({ webhook, secret }: Options) {
    if (!webhook || !secret) {
      throw new Error('DtBot options: webhook and secret are required')
    }
    this.webhook = webhook
    this.secret = secret
  }

  async send(content: unknown) {
    const timestamp = Date.now()
    const url = new URL(this.webhook)
    url.searchParams.set('timestamp', timestamp.toString())
    url.searchParams.set(
      'sign',
      getSignature(timestamp + '\n' + this.secret, this.secret)
    )

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: { 'Content-Type': 'application/json' },
    })
    const result = (await response.json()) as Result
    return result.errcode ? Promise.reject(result) : result
  }

  /**
   * 发送纯文本消息，支持 @群内成员
   * @param {string} content 消息内容
   * @param {AtContent} [at]
   */
  text(content: string, at?: AtContent) {
    return this.send({
      msgtype: 'text',
      text: {
        content,
      },
      at,
    })
  }

  /**
   * 发送单个图文链接
   * @param {LinkContent} link
   */
  link(link: LinkContent) {
    return this.send({
      msgtype: 'link',
      link,
    })
  }

  /**
   * 发送 markdown 内容，支持 @群内成员
   * @param {MarkdownContent} markdown
   * @param {AtContent} [at]
   */
  markdown(markdown: MarkdownContent, at?: AtContent) {
    return this.send({
      msgtype: 'markdown',
      markdown,
      at,
    })
  }

  actionCard(actionCard: ActionCardSingle): Promise<Result>
  actionCard(actionCard: ActionCardContent): Promise<Result>
  /**
   * 发送 actionCard （动作卡片），支持多个按钮，支持 markdown
   * @param {(ActionCardSingle | ActionCardContent)} actionCard
   */
  actionCard(actionCard: ActionCardSingle | ActionCardContent) {
    return this.send({
      msgtype: 'actionCard',
      actionCard,
    })
  }

  /**
   * 发送 feedCard，支持多图文链接
   * links 可包含多个 link，建议不要超过 4 个
   * @param {FeedCardContent[]} links
   */
  feedCard(links: FeedCardContent[]) {
    return this.send({
      msgtype: 'feedCard',
      feedCard: {
        links,
      },
    })
  }
}
