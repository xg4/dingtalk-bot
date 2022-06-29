# dt-bot

> 钉钉机器人 nodejs API

## 安装

```sh
# npm
npm i dt-bot

# yarn
yarn add dt-bot

# pnpm
pnpm i dt-bot
```

## 用例

```js
import DtBot from 'dt-bot'

const bot = new DtBot({
  webhook:
    'https://oapi.dingtalk.com/robot/send?access_token=240f60f8d7da01372cb9951d454780911536b4722ed113b2c4219489bc1b4',
  secret: 'SECc4e1dd406a33ec054ff11b5eded2bd858d73abf3f6c5930c13003c3d9bc3d',
})

bot.text('hello world')

bot.markdown({ title: 'this is title', text: '# hello world' })

bot.link({
  title: 'this is title',
  text: 'this is text',
  messageUrl: 'https://github.com/',
})

bot.feedCard([
  {
    title: 'title1',
    messageURL: 'https://github.com/',
    picURL: 'https://avatars1.githubusercontent.com/u/24098281?s=460&v=4',
  },
  {
    title: 'title2',
    messageURL: 'https://github.com/',
    picURL: 'https://avatars1.githubusercontent.com/u/24098281?s=460&v=4',
  },
])

bot.actionCard({
  title: 'this is title',
  text: 'this is text',
  btns: [
    {
      actionURL: 'https://github.com/',
      title: 'this is title',
    },
    {
      actionURL: 'https://github.com/',
      title: 'this is title2',
    },
  ],
})

bot.actionCard({
  title: 'this is title',
  text: 'this is text',
  singleTitle: '查看详情',
  singleURL: 'https://github.com/',
})
```
