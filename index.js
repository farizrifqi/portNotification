const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const token = '675485146:AAHuyOpGg0QLE33IP5gaBXN8Fx_WKT2pTww';
const bot = new TelegramBot(token, {polling: true});
const trxData = new Map()
const backupData =
	[
		{
			"name":"zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62",
			"value":{
				"address":"zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62",
				"count":2,
				"owner":"farizra",
				"chat_id":615522910,
				"aliases":null
			}
		},
		{
			"name":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k",
			"value":{
				"address":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k",
				"count":0,
				"owner":"farizra",
				"chat_id":615522910,
				"aliases":null
			}
		},
		{
			"name":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k",
			"value":{
				"address":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k",
				"count":0,
				"owner":"farizra",
				"chat_id":615522910,
				"aliases":"asdfasdf"
			}
		}
	]

if (backupData.length > 0){
	backupData.forEach(async a => {
		let addressConstructor = {
			address: a['name'],
			count: a['value']['count'],
			owner: a['value']['owner'],
			chat_id: a['value']['chat_id'],
			aliases: a['value']['aliases']
		}
		console.log(addressConstructor)
		await trxData.set(a['name'], addressConstructor)
		await console.log(`Backup => ${a['name']}`)
	})
}

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
			sendMsg = `${addr.address.substr(0,6)}...${addr.address.substr(-4)}\nDapat: ${addr.count} PORT`
			bot.sendMessage(msg.chat.id, sendMsg)
		}
	})
	return;
})
bot.onText(/\/start/, async (msg) => {
	bot.sendMessage(msg.chat.id, "/add <address> <aliases>  | Add address\n/remove <address> | Remove address\n/list | Lihat list address\n/check | Check manual")
})
bot.onText(/\/help/, async (msg) => {
	bot.sendMessage(msg.chat.id, "/add <address> <aliases>  | Add address\n/remove <address> | Remove address\n/list | Lihat list address\n/check | Check manual")
})
bot.onText(/\/list/, async (msg) => {
	let sendMsg = 'All of your list:\n'
    trxData.forEach(async addr => {
		if(msg.chat.id == addr.chat_id){
			if(addr.aliases){
				sendMsg += `[ ${addr.address} ]\nAliases: ${addr.aliases}\nTotal:${addr.count}\n`
			}else{
				sendMsg += `[ ${addr.address} ]\nTotal:${addr.count}\n`
			}
		}
	})
	bot.sendMessage(msg.chat.id, sendMsg)
	return;
})

bot.onText(/\/bckp/, async (msg) => {
	const array = Array.from(trxData, ([name, value]) => ({ name, value }));

	if (array.length == 0){
		bot.sendMessage(msg.chat.id, "no data")
	}else{
		bot.sendMessage(msg.chat.id, JSON.stringify(array))
	}
	return;
})
bot.onText(/\/set/, async (msg) => {
	const each = msg.text.split(" ")
	if (each.length <= 2){
		bot.sendMessage(msg.chat.id, `/set <address> <aliases> untuk mengedit aliases list\naddress wajib\naliases optional`)
		return;
	}
	if(trxData.get(each[1])){
		let selected = trxData.get(each[1])
		if(msg.chat.username == selected.owner){
			selected.aliases = each[2]
			trxData.set(each[1], selected)
			bot.sendMessage(msg.chat.id, `${selected.address.substr(0,6)}...${selected.address.substr(-4)} berhasil diubah menjadi ${each[2]}`)
		}else{
			bot.sendMessage(msg.chat.id, "Address tidak terdaftar")
		}
	}else{
		bot.sendMessage(msg.chat.id, "Address tidak terdaftar")
	}
	return;
})
bot.onText(/\/remove/, (msg) => {
	const each = msg.text.split(" ")
	if (each.length == 1){
		bot.sendMessage(msg.chat.id, `/remove <address> untuk menambahkan list\naddress wajib\naliases optional`)
		return;
	}
    if(trxData.get(each[1])){
		let b = trxData.get(each[1])
		if(b.owner == msg.chat.username){
			trxData.delete(each[1])
			bot.sendMessage(msg.chat.id, "Address dihapus")
		}else{
			bot.sendMessage(msg.chat.id, "Address bukan punya ente")
		}
	}else{
		bot.sendMessage(msg.chat.id, "Address tidak ditemukan")
	}
	return;
})

bot.onText(/\/add/, async (msg) => {
    const each = msg.text.split(" ")
	if (each.length == 1){
		bot.sendMessage(msg.chat.id, `/add <address> <aliases> untuk menambahkan list\naddress wajib\naliases optional`)
		return;
	}
	if(trxData.get(each[1])){
		bot.sendMessage(msg.chat.id, `Gagal menambahkan ${each[1].substr(0,6)}...${each[1].substr(-4)}\nTelah diinput.`)
		return;
	}
	let result = await getData(each[1])
	let resultJson = await result.json()
	bot.sendMessage(msg.chat.id, `Berhasil menambahkan ${each[1].substr(0,6)}...${each[1].substr(-4)}\nTotal => ${resultJson['docs'].length} PORT`)
	let addressConstructor = {
		address: each[1],
		count: resultJson['docs'].length,
		owner: msg.chat.username,
		chat_id: msg.chat.id
	}
	if (each.length == 3){
		addressConstructor.aliases = each[2]
	}else{
		addressConstructor.aliases = null
	}
	trxData.set(each[1], addressConstructor)
})

setInterval(() => {
	trxData.forEach(async addr => {
		let result = await getData(addr.address)
		let resultJson = await result.json()
		if(resultJson['docs'].length > 0){
			resultJson['docs'].forEach(trx => {
				if(addr.count < resultJson['docs'].length){
					addr.count += 1
					if (addr.aliases){
						bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
					}else{
						bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
					}
				}
				console.log(`[ ${addr.address} ] ${trx['hash']} Status: ${trx['status']}`)
			})
		}else{
			console.log(`[ ${addr.address} ] had no trx`)
		}
	})
	bot.sendMessage(-1001285503524, 'Checking...')
}, 600000)

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