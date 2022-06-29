import DtBot from './index.js'

test('the data is peanut butter', async () => {
  const bot = new DtBot({
    webhook: process.env.WEBHOOK,
    secret: process.env.SECRET,
  })
  const result = await bot.text('hello')

  expect(result).toBe()
})
