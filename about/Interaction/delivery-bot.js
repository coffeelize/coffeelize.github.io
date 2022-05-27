var botui = new BotUI('delivery-bot'),
    address = 'House 1, First Ave.';

botui.message
    .bot({ // show first message
        delay: 200,
        content: 'Hi，欢迎来到Coffeelize！😊'
    })
    .then(() => {
        return botui.message.bot({ // second one
            delay: 1500, // wait 1 sec.
            content: '我是Cheeph'
        })
    }).then(() => {
        return botui.action.button({ // let user do something
            delay: 1500,
            action: [{
                text: '你好呀😝啥是Coffeelize呢？',
                value: 'question'
            }]
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: 'lize一般为英文单词中的动词后缀'
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: 'Coffee则代表咖啡啦☕️'
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: '因为咖啡#日常#，所以叫自己的站点为coffeelize'
        })
    }).then(() => {
        return botui.message.human({
            delay: 1500,
            content: '原来这样，我知道了！'
        })
    }).then(() => {
        return botui.action.button({ // let user do something
            delay: 1500,
            action: [{
                    text: '那你是谁呢？(°ー°〃)',
                    value: 'question'
                },
                {
                    text: '那我先滚啦～',
                    value: 'exit'
                }
            ]
        })
    }).then(res => {
        if (res.value == 'question') {
            return botui.message.bot({
                delay: 1500,
                content: '我是青海大学附属幼儿园的一名研究生'
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '喜欢捣鼓&折腾'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '但这只是课余时候弄弄！'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '我的目标可是星辰大海😎'
                })
            }).then(() => {
                return botui.message.human({
                    delay: 1500,
                    content: '啊我不想聊学习qaq'
                })
            }).then(() => {
                return botui.action.button({ // let user do something
                    delay: 1500,
                    action: [{
                        text: '你有啥爱好呢？',
                        value: 'question'
                    }]
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '我超爱跑步🏃🏻‍♀️的'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '基本上每周都会有一次跑步，还特别喜欢纯音乐'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '我最喜欢的纯音乐是Pinô，最喜欢的音乐人是羽翀！'
                })
            }).then(() => {
                return botui.action.button({ // let user do something
                    delay: 1500,
                    action: [{
                            text: '还有呢？',
                            value: 'then'
                        },
                        {
                            text: '哇我也是！',
                            value: 'yes'
                        }
                    ]
                })
            }).then(res => {
                if (res.value == 'then') {
                    return botui.message.bot({
                        delay: 1500,
                        content: '乒乓球、羽毛球、平面设计都喜欢一点'
                    }).then(() => {
                        return botui.message.bot({
                            delay: 1500,
                            content: '但是都很菜😅'
                        })
                    }).then(() => {
                        return botui.action.button({ // let user do something
                            delay: 1500,
                            action: [{
                                text: '那你加油噢！我去其他地方逛逛😃',
                                value: 'question'
                            }]
                        })
                    }).then(() => {
                        return botui.message.bot({
                            delay: 1500,
                            content: '玩得开心～再见👋'
                        })
                    })
                } else {
                    return botui.message.bot({
                        delay: 1500,
                        content: '哇！那我想认识你w'
                    }).then(() => {
                        return botui.message.bot({
                            delay: 1500,
                            content: '这是我的企鹅号128 6210 324'
                        })
                    }).then(() => {
                        return botui.action.button({ // let user do something
                            delay: 1500,
                            action: [{
                                    text: '那俺考虑一下！',
                                    value: 'then'
                                },
                                {
                                    text: '木得问题～',
                                    value: 'yes'
                                }
                            ]
                        }).then(res => {
                            if (res.value == 'then') {
                                return botui.message.bot({
                                    delay: 1500,
                                    content: 'Good Bye 👋'
                                }).then(() => {
                                    return botui.message.human({
                                        delay: 1500,
                                        content: '再见！'
                                    })
                                })
                            } else {
                                return botui.message.bot({
                                    delay: 1500,
                                    content: '等你消息！Bye 👋'
                                }).then(() => {
                                    return botui.message.human({
                                        delay: 1500,
                                        content: "再见嘞 👋"
                                    })
                                })
                            }
                        })
                    })
                }
            })
        } else {
            return botui.message.bot({
                delay: 1500,
                content: '欢迎再次光临嗷੭ ᐕ)੭*⁾⁾'
            })
        }
    })