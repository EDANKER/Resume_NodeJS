const {Telegraf, Markup, session} = require('telegraf');
const bot = new Telegraf('5705894113:AAELvN0amQ82m2tBYwxHZUxjzvT2ODn2sAM');



bot.on('location', (ctx) => ctx.reply('спасибо, нам это было важно'))
bot.on('contact', (ctx) => ctx.reply('спасибо, нам это было важно'))
bot.on('sticker', (ctx) => ctx.reply('нет такого вырианта ответа'))

// bot.on('text', (ctx) => {
//     const scores = ctx.db.getScores(ctx.message.from.username)
//     return ctx.reply(`{ctx.message.from.username }: ${scores}`)
// })


bot.start((ctx) => {
    ctx.reply("Добро подаловать в бот, что бы начал напиши /info")
})


bot.command('/info', (ctx) => {

    ctx.telegram.sendMessage(ctx.chat.id, 'Для начала нужно сделать это', {
        parse_mode: "Markdown",

        reply_markup: {


            inline_keyboard: [
                [
                    {
                        text: "Отправьте свой номер",
                        callback_data: "number"
                    },


                ],

                [
                    {
                        text: "Поделиться локацей",
                        callback_data: "number"


                    },
                ]

            ],
            remove_keyboard: true,
            resize_keyboard: true,




        },
    });





});



bot.action('number', ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, "Подтвердите телефон и вашу локацию", {

        reply_markup: {

            keyboard:[
                [
                    {
                        text: "Подтвердите ваш номер",
                        request_contact: true,

                    },

                    {
                        text: "Подтвердите вашу локацию",
                        request_location: true

                    }
                ],

                [
                    {
                        text: "Продолжить",



                    }
                ]





            ],


            resize_keyboard: true

        }


    })


})

bot.hears("Продолжить", ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Офформление',  {
        reply_markup: {

            inline_keyboard: [

                [
                    {
                        text: "Форма для соискателя",callback_data: "prifil1",
                    },


                ],

                [
                    {
                        text: "Форма мои навыки",callback_data: "proffil2",
                    },

                ],

                [
                    {
                        text: "Форма социальные сети",callback_data: "socialnetwork",
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



})



bot.action('socialnetwork', ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, "Форма социальные сети", {
        reply_markup: {
            keyboard:[
                [
                    {
                        text: "У вас есть профиль в \n" +
                            "социальных сетях?"
                    },
                ],

                [
                    {
                        text: "Укажите ссылку на ваш \n" +
                            "профиль"
                    },
                ],

                [
                    {
                      text: "Продолжить"
                    }

                ]




            ],
            resize_keyboard: true

        }


    })



})



bot.action('proffil2', ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, "Форма мои навыки", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Каким иностранным \n" +
                            "языком вы владеете?", callback_data: "1",
                    },
                ],

                [
                    {
                        text: "Какой у вас уровень \n" +
                            "владения?", callback_data: "1",
                    },



                    })
                ],

                [
                    {
                        text: "Какими \n" +
                            "профессиональными \n" +
                            "навыками вы владеете?", callback_data: "1",
                    },
                ],

                [
                    {
                        text: "Какой у вас уровень \n" +
                            "владения?", callback_data: "1",
                    },
                ],


            ]

        }


    })


})


bot.action('prifil1', ctx => {
    ctx.telegram.sendMessage(ctx.chat.id,"Форма для соискателя" , {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Ваш статус",callback_data: "a4",
                    },
                ],

                [
                    {
                        text: "Как вас зовут?", callback_data: "1"
                    },

                ],

                [
                    {
                        text: "Дата рождения?", callback_data: "a4"

                    },

                ],

                [
                    {
                        text: "Рассматриваешь ли \n" +
                            "переезд?", callback_data: "a4"

                    },

                ],

                [
                    {
                        text: "Прикрепить резюме ", callback_data: "a4"

                    },



                ],

                [
                    {
                        text: "Что вам важно в выборе \n" +
                            "компании?", callback_data: "a4"
                    },

                ],

                [
                    {
                        text: "Желаемая заработная \n" +
                            "плата?", callback_data: "a4"

                    },

                ],

                [
                    {
                        text: " Оставьте свой контакт \n" +
                            "для обратной связи! ", callback_data: "a4"
                    }

                ]



            ]


        }







    })





})






bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));