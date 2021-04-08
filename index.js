const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const token = '675485146:AAHuyOpGg0QLE33IP5gaBXN8Fx_WKT2pTww';
const bot = new TelegramBot(token, {polling: true});
const trxData = new Map()
const backupData = [
	{
	  "name": "zil1rqwtpwyjxyesmu2q9ar7gtldxhtmp6ygp9wuun",
	  "value": {
		"address": "zil1rqwtpwyjxyesmu2q9ar7gtldxhtmp6ygp9wuun",
		"count": 1,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil13564xcskh6waqg2gxnsmhvw3eh737vysalw7t2",
	  "value": {
		"address": "zil13564xcskh6waqg2gxnsmhvw3eh737vysalw7t2",
		"count": 0,
		"owner": "modilaakbari",
		"chat_id": 703469861,
		"aliases": "modila2"
	  }
	},
	{
	  "name": "zil1qgqt5zaf7y9kpyu0z5f3ecwh7mtvf5jwch0fug",
	  "value": {
		"address": "zil1qgqt5zaf7y9kpyu0z5f3ecwh7mtvf5jwch0fug",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62",
	  "value": {
		"address": "zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62",
		"count": 2,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": null
	  }
	},
	{
	  "name": "zil19gpsvsjlprg430vqw0sm0ul7gyk7nxr3u5x7xv",
	  "value": {
		"address": "zil19gpsvsjlprg430vqw0sm0ul7gyk7nxr3u5x7xv",
		"count": 1,
		"owner": "modilaakbari",
		"chat_id": 703469861,
		"aliases": "modila1"
	  }
	},
	{
	  "name": "zil1dgc49y7cv6duevj0cxp782gurvx8h2xvcv65ce",
	  "value": {
		"address": "zil1dgc49y7cv6duevj0cxp782gurvx8h2xvcv65ce",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "MEXICO"
	  }
	},
	{
	  "name": "zil1d06kndl4lnf82f8fwpgkjlfz7y0cmspuyg4u8e",
	  "value": {
		"address": "zil1d06kndl4lnf82f8fwpgkjlfz7y0cmspuyg4u8e",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil159yvk7q55vrt92h7ylm63rxxxhczeea3hggs4s",
	  "value": {
		"address": "zil159yvk7q55vrt92h7ylm63rxxxhczeea3hggs4s",
		"count": 1,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil1e94fh8qdw9zkhnrps0mt4g5fyfad36d6hu5h06",
	  "value": {
		"address": "zil1e94fh8qdw9zkhnrps0mt4g5fyfad36d6hu5h06",
		"count": 0,
		"owner": "modilaakbari",
		"chat_id": 703469861,
		"aliases": "modila"
	  }
	},
	{
	  "name": "zil18cpyatln6ctkkwkgp48s2770ns30flqxqa4dx8",
	  "value": {
		"address": "zil18cpyatln6ctkkwkgp48s2770ns30flqxqa4dx8",
		"count": 1,
		"owner": "modilaakbari",
		"chat_id": 703469861,
		"aliases": "modila3"
	  }
	},
	{
	  "name": "zil13kkkqp6f98vgkhmq7cuw6gtcsl8yyumgpwmzha",
	  "value": {
		"address": "zil13kkkqp6f98vgkhmq7cuw6gtcsl8yyumgpwmzha",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil166jnepdjwqkmgeg46chdfgpfcc2a63sysxmreg",
	  "value": {
		"address": "zil166jnepdjwqkmgeg46chdfgpfcc2a63sysxmreg",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil15dse7543schr8j4d7zurupy78cvrq8qkramjdw",
	  "value": {
		"address": "zil15dse7543schr8j4d7zurupy78cvrq8qkramjdw",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil1w29uym5j3typchghgh3xryasqxsdjq55mheja7",
	  "value": {
		"address": "zil1w29uym5j3typchghgh3xryasqxsdjq55mheja7",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil168r2fumnvkzcvme953r4yd7g0nwgp7vafeg5ng",
	  "value": {
		"address": "zil168r2fumnvkzcvme953r4yd7g0nwgp7vafeg5ng",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "kuwait"
	  }
	},
	{
	  "name": "zil1anumqqegpr32fx0sh87v80xh4dgndtp2jhzm9g",
	  "value": {
		"address": "zil1anumqqegpr32fx0sh87v80xh4dgndtp2jhzm9g",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "SG2"
	  }
	},
	{
	  "name": "zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k",
	  "value": {
		"address": "zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "asdfasdf"
	  }
	},
	{
	  "name": "zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k",
	  "value": {
		"address": "zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": null
	  }
	},
	{
	  "name": "zil1zhg9amxr5qjjd3z8mm48y0yuuyqk7cga0xtac5",
	  "value": {
		"address": "zil1zhg9amxr5qjjd3z8mm48y0yuuyqk7cga0xtac5",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg",
	  "value": {
		"address": "zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "ANDROID"
	  }
	},
	{
	  "name": "zil1walhhexyej3gkp7mewtcsfsul55e2v07jjmq7q",
	  "value": {
		"address": "zil1walhhexyej3gkp7mewtcsfsul55e2v07jjmq7q",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil1vh6tln9xjc54gaa8frx6cpuje3v3qvutu3sj9l",
	  "value": {
		"address": "zil1vh6tln9xjc54gaa8frx6cpuje3v3qvutu3sj9l",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu4"
	  }
	},
	{
	  "name": "zil1cevtkhh8rgty0ljsxt47hvrpf6t7nhg3k287r6",
	  "value": {
		"address": "zil1cevtkhh8rgty0ljsxt47hvrpf6t7nhg3k287r6",
		"count": 0,
		"owner": "wkrisdiyanto",
		"chat_id": 795965625,
		"aliases": null
	  }
	},
	{
	  "name": "zil1trp8tfcfu064ayzx45l4a3xslffpdjnq3cp586",
	  "value": {
		"address": "zil1trp8tfcfu064ayzx45l4a3xslffpdjnq3cp586",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu7"
	  }
	},
	{
	  "name": "zil15vghap7hfcmg5vqvr572wpmn4qzqzljqswry00",
	  "value": {
		"address": "zil15vghap7hfcmg5vqvr572wpmn4qzqzljqswry00",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu9"
	  }
	},
	{
	  "name": "zil1plyfw8sqxmrr5auj0ygverx3vrzwuzp2epwx8v",
	  "value": {
		"address": "zil1plyfw8sqxmrr5auj0ygverx3vrzwuzp2epwx8v",
		"count": 0,
		"owner": "xmbyrx",
		"chat_id": 1239581842,
		"aliases": null
	  }
	},
	{
	  "name": "zil1n0y7yqvm7cpeq63c0ln3uf7vvt063tkyq7ck3w",
	  "value": {
		"address": "zil1n0y7yqvm7cpeq63c0ln3uf7vvt063tkyq7ck3w",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil165vpnsjv60d7x3gtzcc2u9yl0gfllraygdl7ry",
	  "value": {
		"address": "zil165vpnsjv60d7x3gtzcc2u9yl0gfllraygdl7ry",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil1yjc66zl7ltnjj6l4j08r9ck4k7wgmkwy2qjsm7",
	  "value": {
		"address": "zil1yjc66zl7ltnjj6l4j08r9ck4k7wgmkwy2qjsm7",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "indo"
	  }
	},
	{
	  "name": "zil1ucfxxaq4gvng4wrdsyy9hcjz272kf9g0lp3jys",
	  "value": {
		"address": "zil1ucfxxaq4gvng4wrdsyy9hcjz272kf9g0lp3jys",
		"count": 0,
		"owner": "claudiopf",
		"chat_id": 1695335685,
		"aliases": null
	  }
	},
	{
	  "name": "zil1z5aaaa7mxt5pquswefzh5ugxpk2rcemm5x7v0l",
	  "value": {
		"address": "zil1z5aaaa7mxt5pquswefzh5ugxpk2rcemm5x7v0l",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu1"
	  }
	},
	{
	  "name": "zil1r2xf7rgmv6mw4xzavj5lmw2yu7jemwrkulexzj",
	  "value": {
		"address": "zil1r2xf7rgmv6mw4xzavj5lmw2yu7jemwrkulexzj",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu10"
	  }
	},
	{
	  "name": "zil1hxkqqg7gan3vefsv0g4j9kcuh7dft29kfaa68v",
	  "value": {
		"address": "zil1hxkqqg7gan3vefsv0g4j9kcuh7dft29kfaa68v",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu8"
	  }
	},
	{
	  "name": "zil1h7ednt564g7ufw5lpv2cjhpsvsvug30gppw3rt",
	  "value": {
		"address": "zil1h7ednt564g7ufw5lpv2cjhpsvsvug30gppw3rt",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": null
	  }
	},
	{
	  "name": "zil182s6czzdp3aa03jedf9ym5wydmrmm8q7e339ls",
	  "value": {
		"address": "zil182s6czzdp3aa03jedf9ym5wydmrmm8q7e339ls",
		"count": 0,
		"owner": "xmbyrx",
		"chat_id": 1239581842,
		"aliases": null
	  }
	},
	{
	  "name": "zil1xgncqrwpxujuuefh44qeks8qw0hls3hv87933u",
	  "value": {
		"address": "zil1xgncqrwpxujuuefh44qeks8qw0hls3hv87933u",
		"count": 0,
		"owner": "ichsn",
		"chat_id": 749040222,
		"aliases": "emu5"
	  }
	},
	{
	  "name": "zil1qujfafxuhf6q8esfp06vq3x0zd7dz3tdwh5lc7",
	  "value": {
		"address": "zil1qujfafxuhf6q8esfp06vq3x0zd7dz3tdwh5lc7",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "jakbar"
	  }
	},
	{
	  "name": "zil185hqqwtqkna049t7e8x0ncm054pdpxpkr3enmq",
	  "value": {
		"address": "zil185hqqwtqkna049t7e8x0ncm054pdpxpkr3enmq",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": null
	  }
	},
	{
	  "name": "zil1u7s04tk9de4tcau076er99rsl4rxs8amlkanw6",
	  "value": {
		"address": "zil1u7s04tk9de4tcau076er99rsl4rxs8amlkanw6",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": null
	  }
	},
	{
	  "name": "zil16d20drju9zhn0c3ypgf7ryvqaslakjgy77yfxs",
	  "value": {
		"address": "zil16d20drju9zhn0c3ypgf7ryvqaslakjgy77yfxs",
		"count": 0,
		"owner": "xmbyrx",
		"chat_id": 1239581842,
		"aliases": null
	  }
	},
	{
	  "name": "zil17hu960t9dtntrkuyjmte0ug4fc63jxkkhxyvnv",
	  "value": {
		"address": "zil17hu960t9dtntrkuyjmte0ug4fc63jxkkhxyvnv",
		"count": 0,
		"owner": "farizra",
		"chat_id": 615522910,
		"aliases": "jaktim"
	  }
	},
	{
	  "name": "zil1qd7equsu638quuxkpu6pl6xxjfqchtlj6aeyxu",
	  "value": {
		"address": "zil1qd7equsu638quuxkpu6pl6xxjfqchtlj6aeyxu",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1k3p57v2v9sukvt7hkv79u7kxc5zz6e2hqxv2kv",
	  "value": {
		"address": "zil1k3p57v2v9sukvt7hkv79u7kxc5zz6e2hqxv2kv",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1jyelq80l0m88zgrtwzp6k93qxdkr683xe335fm",
	  "value": {
		"address": "zil1jyelq80l0m88zgrtwzp6k93qxdkr683xe335fm",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1zkppqupdjjn2kgfqxgxpx8957su76kdwfr4sfv",
	  "value": {
		"address": "zil1zkppqupdjjn2kgfqxgxpx8957su76kdwfr4sfv",
		"count": 1,
		"owner": "xmbyrx",
		"chat_id": 1239581842,
		"aliases": null
	  }
	},
	{
	  "name": "zil1tyq72tlawj84n0utnaa7ql5w8nqpwwtrlnaauu",
	  "value": {
		"address": "zil1tyq72tlawj84n0utnaa7ql5w8nqpwwtrlnaauu",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1ggmqfwaup9wm8h3ns7g78cdtmulw0qpaljlqrf",
	  "value": {
		"address": "zil1ggmqfwaup9wm8h3ns7g78cdtmulw0qpaljlqrf",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1ecldn6228hp30qd72csn9kz7yjllad2nfury2u",
	  "value": {
		"address": "zil1ecldn6228hp30qd72csn9kz7yjllad2nfury2u",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil12spj7fdgc9sm7kx8034tf6k072wyuw6gea5ggs",
	  "value": {
		"address": "zil12spj7fdgc9sm7kx8034tf6k072wyuw6gea5ggs",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1q7vwvufngdl5p37lpms9uvq73q0ufdl3cjlw0p",
	  "value": {
		"address": "zil1q7vwvufngdl5p37lpms9uvq73q0ufdl3cjlw0p",
		"count": 1,
		"owner": "gilarramdani",
		"chat_id": 627796136,
		"aliases": "utama"
	  }
	},
	{
	  "name": "zil16vg6ztz2d6sg5dac3sqhajsc6d458r3r3qm2uq",
	  "value": {
		"address": "zil16vg6ztz2d6sg5dac3sqhajsc6d458r3r3qm2uq",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1ly5r0t8zf37ujj0l7ca77ygz482g06rddntaxr",
	  "value": {
		"address": "zil1ly5r0t8zf37ujj0l7ca77ygz482g06rddntaxr",
		"count": 1,
		"owner": "xmbyrx",
		"chat_id": 1239581842,
		"aliases": null
	  }
	},
	{
	  "name": "zil1tt8m73kt0p6har39y68q0hffd07hjljmq5fvkk",
	  "value": {
		"address": "zil1tt8m73kt0p6har39y68q0hffd07hjljmq5fvkk",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1e7mffc4cw0hp3dyzp8xnfr2ds4f6vge078kq09",
	  "value": {
		"address": "zil1e7mffc4cw0hp3dyzp8xnfr2ds4f6vge078kq09",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil10gkrwlma7jkp4caevpn32js6908ypru5305dke",
	  "value": {
		"address": "zil10gkrwlma7jkp4caevpn32js6908ypru5305dke",
		"count": 0,
		"owner": "gilarramdani",
		"chat_id": 627796136,
		"aliases": "yglr"
	  }
	},
	{
	  "name": "zil1re2suuqksukrnng0ln9kjxfkpws387prm7t4g4",
	  "value": {
		"address": "zil1re2suuqksukrnng0ln9kjxfkpws387prm7t4g4",
		"count": 0,
		"owner": "Mantan",
		"chat_id": 993143881,
		"aliases": "2"
	  }
	},
	{
	  "name": "zil15zn23xfcr3ln6jm9m3ewrtprecet6q5a5v28ay",
	  "value": {
		"address": "zil15zn23xfcr3ln6jm9m3ewrtprecet6q5a5v28ay",
		"count": 0,
		"owner": "gilarramdani",
		"chat_id": 627796136,
		"aliases": "ira"
	  }
	},
	{
	  "name": "zil18cmdg9gl7633qyuuxqsn7uy7a0apktar84rpsg",
	  "value": {
		"address": "zil18cmdg9gl7633qyuuxqsn7uy7a0apktar84rpsg",
		"count": 0,
		"owner": "jinovu",
		"chat_id": 679473103,
		"aliases": null
	  }
	},
	{
	  "name": "zil1k3zhfc5zvhhmzeszgek56e9scjqugtc4jldc0m",
	  "value": {
		"address": "zil1k3zhfc5zvhhmzeszgek56e9scjqugtc4jldc0m",
		"count": 0,
		"owner": "gilarramdani",
		"chat_id": 627796136,
		"aliases": null
	  }
	},
	{
	  "name": "zil1zjxk3rr79mzdnjype9frhc5cetna7e0y7jnnw0",
	  "value": {
		"address": "zil1zjxk3rr79mzdnjype9frhc5cetna7e0y7jnnw0",
		"count": 0,
		"owner": "Mantan",
		"chat_id": 993143881,
		"aliases": "3"
	  }
	},
	{
	  "name": "zil1zzklfsdwcryqpqj9wwknlhthxh4wt9guhs09mk",
	  "value": {
		"address": "zil1zzklfsdwcryqpqj9wwknlhthxh4wt9guhs09mk",
		"count": 0,
		"owner": "Mantan",
		"chat_id": 993143881,
		"aliases": "1"
	  }
	}
  ]
if (backupData.length > 0){
	backupData.forEach(async a => {
		let result = await getData(a.address)
		let resultJson = await result.json()
		if(resultJson['docs'].length > 0){
			resultJson['docs'].forEach(trx => {
				if(addr.count < resultJson['docs'].length){
					addr.count += 1
					//bot.sendMessage(addr.chat_id, `[ ${addr.address} ] => GET\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
				}
			})
		}
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
				sendMsg += `[ ${addr.address} ]\nAliases: ${addr.aliases}\nTotal: ${addr.count}\n`
			}else{
				sendMsg += `[ ${addr.address} ]\nTotal: ${addr.count}\n`
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
		array.forEach(each => {
			bot.sendMessage(615522910, JSON.stringify(each)+",")
		})
	}
	
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
					bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} LAND. JANGAN IRI.`)
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