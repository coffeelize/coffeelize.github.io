var botui = new BotUI('delivery-bot'),
    address = 'House 1, First Ave.';

botui.message
    .bot({ // show first message
        delay: 200,
        content: 'Hi，欢迎来到MoeCode研究所！😊'
    })
    .then(() => {
        return botui.message.bot({ // second one
            delay: 1500, // wait 1 sec.
            content: '我是Sum Chin :-P'
        })
    }).then(() => {
        return botui.action.button({ // let user do something
            delay: 1500,
            action: [{
                text: '你好呀😝啥是MoeCode研究所呢？',
                value: 'question'
            }]
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: 'moe是日语里面的“萌”'
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: 'code代表我的专业计算机科学'
        })
    }).then(() => {
        return botui.message.bot({
            delay: 1500,
            content: '因为喜欢番剧#日常#，所以叫自己的站点为研究所'
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
                content: '我是华中科技幼儿园的一名本科生'
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '喜欢捣鼓前端'
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
                    content: '我超爱二次元音乐der'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '所以大一开始学琴，现在在练哈农和599'
                })
            }).then(() => {
                return botui.message.bot({
                    delay: 1500,
                    content: '还有我是Animenzzz的粉丝！'
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
                        content: '摄影、画画、平面设计都喜欢一点'
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
                            content: '这是我的企鹅号137 366 871'
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