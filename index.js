const TelegramBot = require('node-telegram-bot-api');

const token = ''; //token
const webAppUrl = 'https://kwork.ru/user/fldanyt'; // Сылка на сайт

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

    await bot.sendMessage(chatId,'Если хотите сделать заказ через фриланс биржу, то нажимайте, на кнопку', {
        reply_markup: {
           inline_keyboard:  [ // Кнопка inline
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        
        }
    })
  }
);
