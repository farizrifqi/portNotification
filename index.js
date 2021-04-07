const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const token = '675485146:AAHuyOpGg0QLE33IP5gaBXN8Fx_WKT2pTww';
const bot = new TelegramBot(token, {polling: true});

const trxData = new Map()
const listAddress = [
'zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62', //iphone
'zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg', //android
'zil1dgc49y7cv6duevj0cxp782gurvx8h2xvcv65ce', //mexico
'zil1anumqqegpr32fx0sh87v80xh4dgndtp2jhzm9g', //sg2
'zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k' //sg1
//'zil168r2fumnvkzcvme953r4yd7g0nwgp7vafeg5ng' //kuwait
]


bot.onText(/\/check/, async (msg) => {
	let sendMsg
    trxData.forEach(async addr => {
		if(msg.chat.id == addr.chat_id){
			let result = await getData(addr.address)
			let resultJson = await result.json()
			if(resultJson['docs'].length > 0){
				resultJson['docs'].forEach(trx => {
					if(addr.count < resultJson['docs'].length){
						addr.count += 1
						//bot.sendMessage(addr.chat_id, `[ ${addr.address} ] => GET\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
					}
				})
			}
			
			sendMsg = `${addr.address}\nDapat: ${addr.count} PORT`
			bot.sendMessage(msg.chat.id, sendMsg)
		}
	})
	return;
})
bot.onText(/\/remove/, (msg) => {
	const each = msg.text.split(" ")
    if(trxData.get(each[1])){
		let b = trxData.get(each[1])
		if(b.owner == msg.chat.username){
			trxData.delete(each[1])
			bot.sendMessage(msg.chat.id, "Wallet dihapus")
		}else{
			bot.sendMessage(msg.chat.id, "Wallet bukan punya ente")
		}
	}else{
		bot.sendMessage(msg.chat.id, "Wallet tidak ditemukan")
	}
	return;
})

bot.onText(/\/set/, async (msg) => {
    const each = msg.text.split(" ")
	if(trxData.get(each[1])){
		bot.sendMessage(msg.chat.id, `Gagal menambahkan ${each[1]}\nTelah diinput.`)
		return;
	}
	let result = await getData(each[1])
	let resultJson = await result.json()
		bot.sendMessage(msg.chat.id, `Berhasil menambahkan ${each[1]}\nTotal => ${resultJson['docs'].length} PORT`)
		trxData.set(each[1], {address: each[1], count: resultJson['docs'].length, owner: msg.chat.username, chat_id: msg.chat.id})

})

setInterval(() => {
	trxData.forEach(async addr => {
		let result = await getData(addr.address)
		let resultJson = await result.json()
		if(resultJson['docs'].length > 0){
			resultJson['docs'].forEach(trx => {
				if(addr.count < resultJson['docs'].length){
					addr.count += 1
					bot.sendMessage(addr.chat_id, `[ ${addr.address} ] => GET\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
				}
				console.log(`[ ${addr.address} ] ${trx['hash']} Status: ${trx['status']}`)
			})
		}else{
			console.log(`[ ${addr.address} ] had no trx`)
		}
	})
}, 5000)

async function getData(addr){
	const headers = {
		'Accept': 'application/json',
		'Accept-Encoding': 'gzip, deflate, br',
		'Host': 'api.viewblock.io',
		'Origin': 'https://viewblock.io'
	}
	try{
		let result = await fetch("http://api.viewblock.io/zilliqa/addresses/"+addr+"/txs?page=1&network=mainnet&type=tokens", {
			method: "get",
			headers: headers
			})
		return result
	}catch(err){
		console.log(err)
	}
}