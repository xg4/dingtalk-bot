import crypto from 'node:crypto'

/**
 * 生成钉钉 🤖️ 签名
 * @export
 * @param {string} value
 * @param {string} secret
 * @returns
 */
export function getSignature(value: string, secret: string) {
  return crypto
    .createHmac('sha256', secret)
    .update(value)
    .digest()
    .toString('base64')
}
