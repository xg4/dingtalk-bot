import crypto from 'crypto'

/**
 * 生成钉钉 🤖️ 签名
 * @param {string} value
 * @param {string} secret
 * @returns
 */
export function sign(value: string, secret: string) {
  return crypto
    .createHmac('sha256', secret)
    .update(value)
    .digest()
    .toString('base64')
}
