const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('5705894113:AAELvN0amQ82m2tBYwxHZUxjzvT2ODn2sAM');

bot.command('start', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'привет добро пожаловать в бот', {
        parse_mode: "Markdown",

        reply_markup: {
            one_time_keyboard: true,

            keyboard: [
                [
                    {
                        text: "Отправьте свой номер",
                        request_contact: true


                    },
                ],

            ],
            resize_keyboard: true,



        },
    });

    bot.telegram.sendMessage(ctx.chat.id, 'Офформление',  {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Форма для соискателя",callback_data: "a1",
                    },


                ],
                [
                    {
                        text: "Форма мои навыки",callback_data: "a2",
                    },

                ],

                [
                    {
                        text: "Форма социальные сети",callback_data: "a3",
                    },


                ],
                [
                    {
                        text: "Форма для работодателя",callback_data: "a4",
                    }
                ]



            ]
        }


    })

});



bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));