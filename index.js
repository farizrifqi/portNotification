const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const token = '675485146:AAHuyOpGg0QLE33IP5gaBXN8Fx_WKT2pTww';
const bot = new TelegramBot(token, {polling: true});
const listAddress = ['zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62', 'zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg']
setInterval(async () => {
    listAddress.forEach(async addr => {
        let result = await fetch(`https://api.micromedia.id/v1/zilliqa/transactions/?address=${addr}`)
        let resultJson = await result.json()
        if (resultJson['status'] == "200"){
            if(resultJson['data']){
                var resultData = resultJson['data']
                resultData.forEach(trx => {
                    let message = trx['message'] ?? null
                    if(!message){
                        console.log(trx)
                        let isSuccess = trx['receiptSuccess'] ? 'Success' : 'Failed'
                        let messageText = `[ ${trx['to']} ]\n\nHash: ${trx['hash']}\nFrom:${trx['from']}\nStatus: ${isSuccess}\n===================================\n`
                        return bot.sendMessage("-1001285503524", messageText);
                    }else{
                        return;
                    }
                })
            }
        }
    })
}, 3600000)