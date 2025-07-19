import { Markup, Telegraf } from 'telegraf'

const webAppUrl = process.env.WEB_APP_URL as string
const botToken = process.env.BOT_TOKEN as string

const bot = new Telegraf(botToken)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello, press start button!',
    Markup.inlineKeyboard([Markup.button.webApp('Start', `${webAppUrl}?ref=${ctx.from?.id}`)]),
  )
})

bot.start((ctx) => {
  ctx.reply('Hello, world!')
})

bot.launch()
