const fetch = require('node-fetch')
const TelegramBot = require('node-telegram-bot-api');
const token = '675485146:AAHuyOpGg0QLE33IP5gaBXN8Fx_WKT2pTww';
const bot = new TelegramBot(token, {polling: true});
const trxData = new Map()
const cdCheck = new Map()
const backupData = [{"name":"zil15dse7543schr8j4d7zurupy78cvrq8qkramjdw","value":{"address":"zil15dse7543schr8j4d7zurupy78cvrq8qkramjdw","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1dgc49y7cv6duevj0cxp782gurvx8h2xvcv65ce","value":{"address":"zil1dgc49y7cv6duevj0cxp782gurvx8h2xvcv65ce","count":0,"owner":"farizra","chat_id":615522910,"aliases":"MEXICO"}},
{"name":"zil166jnepdjwqkmgeg46chdfgpfcc2a63sysxmreg","value":{"address":"zil166jnepdjwqkmgeg46chdfgpfcc2a63sysxmreg","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62","value":{"address":"zil1zra5yhlgqchr3fn4kj7gaam57h2x6lgrjzmm62","count":20000,"owner":"farizra","chat_id":615522910,"aliases":null}},
{"name":"zil1qgqt5zaf7y9kpyu0z5f3ecwh7mtvf5jwch0fug","value":{"address":"zil1qgqt5zaf7y9kpyu0z5f3ecwh7mtvf5jwch0fug","count":0,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil13564xcskh6waqg2gxnsmhvw3eh737vysalw7t2","value":{"address":"zil13564xcskh6waqg2gxnsmhvw3eh737vysalw7t2","count":10000,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila2"}},
{"name":"zil1rqwtpwyjxyesmu2q9ar7gtldxhtmp6ygp9wuun","value":{"address":"zil1rqwtpwyjxyesmu2q9ar7gtldxhtmp6ygp9wuun","count":10000,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil18cpyatln6ctkkwkgp48s2770ns30flqxqa4dx8","value":{"address":"zil18cpyatln6ctkkwkgp48s2770ns30flqxqa4dx8","count":20000,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila3"}},
{"name":"zil19gpsvsjlprg430vqw0sm0ul7gyk7nxr3u5x7xv","value":{"address":"zil19gpsvsjlprg430vqw0sm0ul7gyk7nxr3u5x7xv","count":20000,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila1"}},
{"name":"zil1trp8tfcfu064ayzx45l4a3xslffpdjnq3cp586","value":{"address":"zil1trp8tfcfu064ayzx45l4a3xslffpdjnq3cp586","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu7"}},
{"name":"zil1walhhexyej3gkp7mewtcsfsul55e2v07jjmq7q","value":{"address":"zil1walhhexyej3gkp7mewtcsfsul55e2v07jjmq7q","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1vh6tln9xjc54gaa8frx6cpuje3v3qvutu3sj9l","value":{"address":"zil1vh6tln9xjc54gaa8frx6cpuje3v3qvutu3sj9l","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu4"}},
{"name":"zil17hu960t9dtntrkuyjmte0ug4fc63jxkkhxyvnv","value":{"address":"zil17hu960t9dtntrkuyjmte0ug4fc63jxkkhxyvnv","count":0,"owner":"farizra","chat_id":615522910,"aliases":"jaktim"}},
{"name":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k","value":{"address":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mz5k","count":0,"owner":"farizra","chat_id":615522910,"aliases":null}},
{"name":"zil182s6czzdp3aa03jedf9ym5wydmrmm8q7e339ls","value":{"address":"zil182s6czzdp3aa03jedf9ym5wydmrmm8q7e339ls","count":0,"owner":"xmbyrx","chat_id":1239581842,"aliases":null}},
{"name":"zil1h7ednt564g7ufw5lpv2cjhpsvsvug30gppw3rt","value":{"address":"zil1h7ednt564g7ufw5lpv2cjhpsvsvug30gppw3rt","count":0,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil1n0y7yqvm7cpeq63c0ln3uf7vvt063tkyq7ck3w","value":{"address":"zil1n0y7yqvm7cpeq63c0ln3uf7vvt063tkyq7ck3w","count":0,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil15vghap7hfcmg5vqvr572wpmn4qzqzljqswry00","value":{"address":"zil15vghap7hfcmg5vqvr572wpmn4qzqzljqswry00","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu9"}},
{"name":"zil165vpnsjv60d7x3gtzcc2u9yl0gfllraygdl7ry","value":{"address":"zil165vpnsjv60d7x3gtzcc2u9yl0gfllraygdl7ry","count":0,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil1zhg9amxr5qjjd3z8mm48y0yuuyqk7cga0xtac5","value":{"address":"zil1zhg9amxr5qjjd3z8mm48y0yuuyqk7cga0xtac5","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1r2xf7rgmv6mw4xzavj5lmw2yu7jemwrkulexzj","value":{"address":"zil1r2xf7rgmv6mw4xzavj5lmw2yu7jemwrkulexzj","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu10"}},
{"name":"zil1anumqqegpr32fx0sh87v80xh4dgndtp2jhzm9g","value":{"address":"zil1anumqqegpr32fx0sh87v80xh4dgndtp2jhzm9g","count":0,"owner":"farizra","chat_id":615522910,"aliases":"SG2"}},
{"name":"zil1tyq72tlawj84n0utnaa7ql5w8nqpwwtrlnaauu","value":{"address":"zil1tyq72tlawj84n0utnaa7ql5w8nqpwwtrlnaauu","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1ucfxxaq4gvng4wrdsyy9hcjz272kf9g0lp3jys","value":{"address":"zil1ucfxxaq4gvng4wrdsyy9hcjz272kf9g0lp3jys","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil185hqqwtqkna049t7e8x0ncm054pdpxpkr3enmq","value":{"address":"zil185hqqwtqkna049t7e8x0ncm054pdpxpkr3enmq","count":0,"owner":"farizra","chat_id":615522910,"aliases":null}},
{"name":"zil1zjxk3rr79mzdnjype9frhc5cetna7e0y7jnnw0","value":{"address":"zil1zjxk3rr79mzdnjype9frhc5cetna7e0y7jnnw0","count":0,"owner":"Mantan","chat_id":993143881,"aliases":"3"}},
{"name":"zil168r2fumnvkzcvme953r4yd7g0nwgp7vafeg5ng","value":{"address":"zil168r2fumnvkzcvme953r4yd7g0nwgp7vafeg5ng","count":0,"owner":"farizra","chat_id":615522910,"aliases":"kuwait"}},
{"name":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k","value":{"address":"zil1gw64cfz96whjuee3g2yjstk6ghjxjzdaz9mdz5k","count":0,"owner":"farizra","chat_id":615522910,"aliases":"asdfasdf"}},
{"name":"zil12spj7fdgc9sm7kx8034tf6k072wyuw6gea5ggs","value":{"address":"zil12spj7fdgc9sm7kx8034tf6k072wyuw6gea5ggs","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1e7mffc4cw0hp3dyzp8xnfr2ds4f6vge078kq09","value":{"address":"zil1e7mffc4cw0hp3dyzp8xnfr2ds4f6vge078kq09","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1xgncqrwpxujuuefh44qeks8qw0hls3hv87933u","value":{"address":"zil1xgncqrwpxujuuefh44qeks8qw0hls3hv87933u","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu5"}},
{"name":"zil1hxkqqg7gan3vefsv0g4j9kcuh7dft29kfaa68v","value":{"address":"zil1hxkqqg7gan3vefsv0g4j9kcuh7dft29kfaa68v","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu8"}},
{"name":"zil1jyelq80l0m88zgrtwzp6k93qxdkr683xe335fm","value":{"address":"zil1jyelq80l0m88zgrtwzp6k93qxdkr683xe335fm","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil16vg6ztz2d6sg5dac3sqhajsc6d458r3r3qm2uq","value":{"address":"zil16vg6ztz2d6sg5dac3sqhajsc6d458r3r3qm2uq","count":10000,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1j7qu8l9pm2rvkw3fzh3qfypwh3n5jdcnlqsy2z","value":{"address":"zil1j7qu8l9pm2rvkw3fzh3qfypwh3n5jdcnlqsy2z","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"13"}},
{"name":"zil1ly5r0t8zf37ujj0l7ca77ygz482g06rddntaxr","value":{"address":"zil1ly5r0t8zf37ujj0l7ca77ygz482g06rddntaxr","count":10000,"owner":"xmbyrx","chat_id":1239581842,"aliases":null}},
{"name":"zil1plyfw8sqxmrr5auj0ygverx3vrzwuzp2epwx8v","value":{"address":"zil1plyfw8sqxmrr5auj0ygverx3vrzwuzp2epwx8v","count":0,"owner":"xmbyrx","chat_id":1239581842,"aliases":null}},
{"name":"zil1u7s04tk9de4tcau076er99rsl4rxs8amlkanw6","value":{"address":"zil1u7s04tk9de4tcau076er99rsl4rxs8amlkanw6","count":0,"owner":"farizra","chat_id":615522910,"aliases":null}},
{"name":"zil13kkkqp6f98vgkhmq7cuw6gtcsl8yyumgpwmzha","value":{"address":"zil13kkkqp6f98vgkhmq7cuw6gtcsl8yyumgpwmzha","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1w29uym5j3typchghgh3xryasqxsdjq55mheja7","value":{"address":"zil1w29uym5j3typchghgh3xryasqxsdjq55mheja7","count":10000,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil159yvk7q55vrt92h7ylm63rxxxhczeea3hggs4s","value":{"address":"zil159yvk7q55vrt92h7ylm63rxxxhczeea3hggs4s","count":10000,"owner":"ichsn","chat_id":749040222,"aliases":null}},
{"name":"zil1d06kndl4lnf82f8fwpgkjlfz7y0cmspuyg4u8e","value":{"address":"zil1d06kndl4lnf82f8fwpgkjlfz7y0cmspuyg4u8e","count":0,"owner":"claudiopf","chat_id":1695335685,"aliases":null}},
{"name":"zil1e94fh8qdw9zkhnrps0mt4g5fyfad36d6hu5h06","value":{"address":"zil1e94fh8qdw9zkhnrps0mt4g5fyfad36d6hu5h06","count":10000,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila"}},
{"name":"zil16d20drju9zhn0c3ypgf7ryvqaslakjgy77yfxs","value":{"address":"zil16d20drju9zhn0c3ypgf7ryvqaslakjgy77yfxs","count":20800,"owner":"xmbyrx","chat_id":1239581842,"aliases":null}},
{"name":"zil1yjc66zl7ltnjj6l4j08r9ck4k7wgmkwy2qjsm7","value":{"address":"zil1yjc66zl7ltnjj6l4j08r9ck4k7wgmkwy2qjsm7","count":0,"owner":"farizra","chat_id":615522910,"aliases":"jaksel"}},
{"name":"zil15zn23xfcr3ln6jm9m3ewrtprecet6q5a5v28ay","value":{"address":"zil15zn23xfcr3ln6jm9m3ewrtprecet6q5a5v28ay","count":0,"owner":"gilarramdani","chat_id":627796136,"aliases":"ira"}},
{"name":"zil1tz95yg57yykd634pugngdcp328u0ezrqdgq2dt","value":{"address":"zil1tz95yg57yykd634pugngdcp328u0ezrqdgq2dt","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu11"}},
{"name":"zil1re2suuqksukrnng0ln9kjxfkpws387prm7t4g4","value":{"address":"zil1re2suuqksukrnng0ln9kjxfkpws387prm7t4g4","count":0,"owner":"Mantan","chat_id":993143881,"aliases":"2"}},
{"name":"zil10gkrwlma7jkp4caevpn32js6908ypru5305dke","value":{"address":"zil10gkrwlma7jkp4caevpn32js6908ypru5305dke","count":0,"owner":"gilarramdani","chat_id":627796136,"aliases":"yglr"}},
{"name":"zil1qujfafxuhf6q8esfp06vq3x0zd7dz3tdwh5lc7","value":{"address":"zil1qujfafxuhf6q8esfp06vq3x0zd7dz3tdwh5lc7","count":0,"owner":"farizra","chat_id":615522910,"aliases":"jakbar"}},
{"name":"zil1tt8m73kt0p6har39y68q0hffd07hjljmq5fvkk","value":{"address":"zil1tt8m73kt0p6har39y68q0hffd07hjljmq5fvkk","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg","value":{"address":"zil1dpjypt0m0t3hdvw7mhe9a6vdtmgcys9nlh54gg","count":0,"owner":"farizra","chat_id":615522910,"aliases":"ANDROID"}},
{"name":"zil1z5aaaa7mxt5pquswefzh5ugxpk2rcemm5x7v0l","value":{"address":"zil1z5aaaa7mxt5pquswefzh5ugxpk2rcemm5x7v0l","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu1"}},
{"name":"zil1uv96jawamwl7h2jhxkt4v68l5temq0gz4z47r5","value":{"address":"zil1uv96jawamwl7h2jhxkt4v68l5temq0gz4z47r5","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila4"}},
{"name":"zil1zkppqupdjjn2kgfqxgxpx8957su76kdwfr4sfv","value":{"address":"zil1zkppqupdjjn2kgfqxgxpx8957su76kdwfr4sfv","count":10600,"owner":"xmbyrx","chat_id":1239581842,"aliases":null}},
{"name":"zil1g0vklxhyc08st5pln24j7zu4c3je3735rn49kq","value":{"address":"zil1g0vklxhyc08st5pln24j7zu4c3je3735rn49kq","count":20000,"owner":"folkwinz","chat_id":1688543957,"aliases":null}},
{"name":"zil1qd7equsu638quuxkpu6pl6xxjfqchtlj6aeyxu","value":{"address":"zil1qd7equsu638quuxkpu6pl6xxjfqchtlj6aeyxu","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1ecldn6228hp30qd72csn9kz7yjllad2nfury2u","value":{"address":"zil1ecldn6228hp30qd72csn9kz7yjllad2nfury2u","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1q7vwvufngdl5p37lpms9uvq73q0ufdl3cjlw0p","value":{"address":"zil1q7vwvufngdl5p37lpms9uvq73q0ufdl3cjlw0p","count":10000,"owner":"gilarramdani","chat_id":627796136,"aliases":"utama"}},
{"name":"zil1tvegnlv2d3hnl6ne92d7qrx76t9fngjkqguuay","value":{"address":"zil1tvegnlv2d3hnl6ne92d7qrx76t9fngjkqguuay","count":30000,"owner":"akimika9","chat_id":1497192015,"aliases":null}},
{"name":"zil1k3p57v2v9sukvt7hkv79u7kxc5zz6e2hqxv2kv","value":{"address":"zil1k3p57v2v9sukvt7hkv79u7kxc5zz6e2hqxv2kv","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}},
{"name":"zil1jtajn30439773853f9f2kkne90tn8cgtzcdcvp","value":{"address":"zil1jtajn30439773853f9f2kkne90tn8cgtzcdcvp","count":0,"owner":"adhiecrew","chat_id":440675357,"aliases":"adhieee"}},
{"name":"zil1qrgl4l2ytqxp7aazzxaq2egvg9lhgsv4kfdc87","value":{"address":"zil1qrgl4l2ytqxp7aazzxaq2egvg9lhgsv4kfdc87","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil14nd0vgdnkfpfzda2sj36tgn753c3dsukgfccpr","value":{"address":"zil14nd0vgdnkfpfzda2sj36tgn753c3dsukgfccpr","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil10a9nqz66uh9xfu7puzuhnn3em28k8sx45rljpu","value":{"address":"zil10a9nqz66uh9xfu7puzuhnn3em28k8sx45rljpu","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil18ggskhzmtqt6ny5xt6ty2ddg63lpc26a7ka06l","value":{"address":"zil18ggskhzmtqt6ny5xt6ty2ddg63lpc26a7ka06l","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil1zvjz0mm7mpk0tkhdza4h9hwt7fv5crva7ed8q9","value":{"address":"zil1zvjz0mm7mpk0tkhdza4h9hwt7fv5crva7ed8q9","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil1hu7rxparla6krhksf5r00ahfkl3xdptqz06cl8","value":{"address":"zil1hu7rxparla6krhksf5r00ahfkl3xdptqz06cl8","count":0,"owner":"wkrisdiyanto","chat_id":795965625,"aliases":null}},
{"name":"zil1yp84ywxwwtuxqyfdt7rj9pazsz88kfxcsm2r5g","value":{"address":"zil1yp84ywxwwtuxqyfdt7rj9pazsz88kfxcsm2r5g","count":0,"owner":"farizra","chat_id":615522910,"aliases":"cikarang"}},
{"name":"zil1uyrea3dcw5shhs5kd4zfjrdqekac8r2v2tvf2g","value":{"address":"zil1uyrea3dcw5shhs5kd4zfjrdqekac8r2v2tvf2g","count":0,"owner":"farizra","chat_id":615522910,"aliases":"medan"}},
{"name":"zil1qzfjyqed7wc4k0lxlpvwu3w68tf4gvy6a2mauw","value":{"address":"zil1qzfjyqed7wc4k0lxlpvwu3w68tf4gvy6a2mauw","count":20000,"owner":"farizra","chat_id":615522910,"aliases":"bdg"}},
{"name":"zil18euy2p4jvrlmvt29npph6q9q6t2dvjztxex9wj","value":{"address":"zil18euy2p4jvrlmvt29npph6q9q6t2dvjztxex9wj","count":0,"owner":"farizra","chat_id":615522910,"aliases":"ciputat"}},
{"name":"zil1r4hajrd796mvf8nd4tkv89k96z7hp65mghl60l","value":{"address":"zil1r4hajrd796mvf8nd4tkv89k96z7hp65mghl60l","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"hapis2"}},
{"name":"zil1gggcpvqsah656atd6nauk9kayr7j90we2lrk4l","value":{"address":"zil1gggcpvqsah656atd6nauk9kayr7j90we2lrk4l","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"hapis2"}},
{"name":"zil19ad3wjtncrgnl5qgyemykzm7n76e84e28390wz","value":{"address":"zil19ad3wjtncrgnl5qgyemykzm7n76e84e28390wz","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"emu12"}},
{"name":"zil1pa2zp80nzye025gu89kq0eldyjrwwgp73e0s28","value":{"address":"zil1pa2zp80nzye025gu89kq0eldyjrwwgp73e0s28","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"hapis3"}},
{"name":"zil1yfe4fvvtkm4qy2jxpssj5hpj9jkf4gj5rfqw66","value":{"address":"zil1yfe4fvvtkm4qy2jxpssj5hpj9jkf4gj5rfqw66","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"14"}},
{"name":"zil1zfzppfttx9xpnt2hgju0qtdw482dlwj9t3a47g","value":{"address":"zil1zfzppfttx9xpnt2hgju0qtdw482dlwj9t3a47g","count":0,"owner":"ichsn","chat_id":749040222,"aliases":"15"}},
{"name":"zil1v683umf4a9uv2hp2ufmmarcjjmgsqztuz7gny9","value":{"address":"zil1v683umf4a9uv2hp2ufmmarcjjmgsqztuz7gny9","count":0,"owner":"farizra","chat_id":615522910,"aliases":"yky"}},
{"name":"zil1n60wmerwr0gj2hql93rdal9765kqlxhawhwwy9","value":{"address":"zil1n60wmerwr0gj2hql93rdal9765kqlxhawhwwy9","count":0,"owner":"Mrb1Milion","chat_id":1776625681,"aliases":null}},
{"name":"zil15qxyaerrqcefewl2a2h5ansa9g2awxqc5pv3a0","value":{"address":"zil15qxyaerrqcefewl2a2h5ansa9g2awxqc5pv3a0","count":0,"owner":"TommiFR","chat_id":576807075,"aliases":null}},
{"name":"zil16vvap609qnvy2yp5ytg3gep22mpvtf0mfz3m47","value":{"address":"zil16vvap609qnvy2yp5ytg3gep22mpvtf0mfz3m47","count":0,"owner":"TommiFR","chat_id":576807075,"aliases":null}},
{"name":"zil144yqc5as33zu5vyamsrj2jzjn8hx4ezw9sd0vd","value":{"address":"zil144yqc5as33zu5vyamsrj2jzjn8hx4ezw9sd0vd","count":0,"owner":"TommiFR","chat_id":576807075,"aliases":null}},
{"name":"zil1vrkqcnw8t275zlvqdefv2xfygqmmh5ht65e8ap","value":{"address":"zil1vrkqcnw8t275zlvqdefv2xfygqmmh5ht65e8ap","count":0,"owner":"TommiFR","chat_id":576807075,"aliases":null}},
{"name":"zil196anvnyftxt2yykgt33vs0qz2hf3cuswjje02j","value":{"address":"zil196anvnyftxt2yykgt33vs0qz2hf3cuswjje02j","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila5"}},
{"name":"zil1scxpq947k5vw955852sv9eqd5q3ga25urmqazw","value":{"address":"zil1scxpq947k5vw955852sv9eqd5q3ga25urmqazw","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila6"}},
{"name":"zil16w2zjh6y9ql5a5uc0gnp4k6c0a9u5665q8t07k","value":{"address":"zil16w2zjh6y9ql5a5uc0gnp4k6c0a9u5665q8t07k","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila7"}},
{"name":"zil1upzfqsffu6q5c4zr9kmzynght5a7axxrtzmdlx","value":{"address":"zil1upzfqsffu6q5c4zr9kmzynght5a7axxrtzmdlx","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila8"}},
{"name":"zil127nfglr7d0t9xyv2f3thry09ueg60nqcf22qnd","value":{"address":"zil127nfglr7d0t9xyv2f3thry09ueg60nqcf22qnd","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila9"}},
{"name":"zil1s6j6dckd5syavav6hxeh96et6v44v9qm93x69d","value":{"address":"zil1s6j6dckd5syavav6hxeh96et6v44v9qm93x69d","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila10"}},
{"name":"zil1dzxe3lra6lpyruc9nw405qq3fh32mlfcfttuu7","value":{"address":"zil1dzxe3lra6lpyruc9nw405qq3fh32mlfcfttuu7","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila11"}},
{"name":"zil16s5nzu20dxek2qgnwpm0vc3gvn4w0yna7pr2e9","value":{"address":"zil16s5nzu20dxek2qgnwpm0vc3gvn4w0yna7pr2e9","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila12"}},
{"name":"zil1jqnx85da8ke8tjps0jpvjkcme59gnnxdwm3ren","value":{"address":"zil1jqnx85da8ke8tjps0jpvjkcme59gnnxdwm3ren","count":0,"owner":"A_monk666","chat_id":1620795956,"aliases":null}},
{"name":"zil1tgdpu95knyy6ytxsjruh89x88vvkshxjp50zjw","value":{"address":"zil1tgdpu95knyy6ytxsjruh89x88vvkshxjp50zjw","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila13"}},
{"name":"zil1l45agts0w2h6sh2mxg4xsmw2d3q6qffre42rcz","value":{"address":"zil1l45agts0w2h6sh2mxg4xsmw2d3q6qffre42rcz","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila14"}},
{"name":"zil134fs9axr24sny0dmumem2c0rterx6wqsuq0ka3","value":{"address":"zil134fs9axr24sny0dmumem2c0rterx6wqsuq0ka3","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila15"}},
{"name":"zil1mtwna8nlllq5uznj4kp374j24r4ucls0ut6u69","value":{"address":"zil1mtwna8nlllq5uznj4kp374j24r4ucls0ut6u69","count":0,"owner":"modilaakbari","chat_id":703469861,"aliases":"modila16"}},
{"name":"zil1cueuta62kx70gd07a0z73yye0pdcpu7lxenmf9","value":{"address":"zil1cueuta62kx70gd07a0z73yye0pdcpu7lxenmf9","count":0,"owner":"farizra","chat_id":615522910,"aliases":"tangersng"}},
{"name":"zil133axl8j0tswlrwumgm6s6qmhync5u3nump4mr3","value":{"address":"zil133axl8j0tswlrwumgm6s6qmhync5u3nump4mr3","count":0,"owner":"farizra","chat_id":615522910,"aliases":"surabaya"}},
{"name":"zil1ert5yqpcm8s2l9gvfvtl8fl58klu87kux4gecy","value":{"address":"zil1ert5yqpcm8s2l9gvfvtl8fl58klu87kux4gecy","count":0,"owner":"jinovu","chat_id":679473103,"aliases":null}}]
if (backupData.length > 0){
	console.log("Backup total: ", backupData.length )
	backupData.forEach(async (a,i) => {
		setTimeout(async () => {
		let addressConstructor = {
			address: a['name'],
			count: a['value']['count'],
			owner: a['value']['owner'],
			chat_id: a['value']['chat_id'],
			aliases: a['value']['aliases']
		}
		//console.log(addressConstructor)
		await trxData.set(a['name'], addressConstructor)
		console.log(i, `Backup => ${a['name']} ${a['value']['count']/10000} PORT`)
		if(backupData.length == i+1){console.log("ready")}	
    },50*i)
	})
}
setInterval(() => {
	cdCheck.forEach((each) => {
		each.cd += 1000;
	})
}, 1000)
bot.onText(/\/check/, async (msg) => {
	let sendMsg
	console.log("check")
	let cdData = cdCheck.get(msg.chat.id);
	if(cdData){
		if(cdData.cd < 60000){
			await bot.sendMessage(msg.chat.id, `Tidak dapat check manual. Cooldown. ${(60000-cdData.cd)/1000} detik.`, {
				"reply_markup": {
					"keyboard": [["/check", "/list"],  ["/help"]]
					}
				})
			return;
		}
	}else{
		let cdConstructor = {
			chat_id: msg.chat.id,
			username: msg.chat.username,
			cd: 0
		}
		cdCheck.set(msg.chat.id, cdConstructor)
		cdData = cdCheck.get(msg.chat.id);
	}
    trxData.forEach(async (addr,i) => {
		setTimeout(async() => {
			if(msg.chat.id == addr.chat_id){
				let result = await getData(addr.address)
				let resultJson = await result.json()
				console.log(resultJson)
				//console.log(resultJson['docs'].length)
				let port = 0
				if(resultJson['docs'].length > 0){
					await resultJson['docs'].forEach(trx => {
						port += parseInt(trx['value'])
						if(addr.count < port){
							addr.count += parseInt(trx['value'])
							//bot.sendMessage(addr.chat_id, `[ ${addr.address} ] => GET\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
						}
					})
				}
				sendMsg = `${addr.address.substr(0,6)}...${addr.address.substr(-4)}\nDapat: ${addr.count/10000} PORT`
				await bot.sendMessage(msg.chat.id, sendMsg, {
					"reply_markup": {
						"keyboard": [["/check", "/list"],  ["/help"]]
						}
					})
			}
		}, 550*i)
	})
	cdData.cd = 0;
	return;
})
bot.onText(/\/start/, async (msg) => {
	bot.sendMessage(msg.chat.id, "/add <address> <aliases>  | Add address\n/remove <address> | Remove address\n/list | Lihat list address\n/check | Check manual",
	{
		"reply_markup": {
			"keyboard": [["/check", "/list"],  ["/help"]]
			}
		})
})
bot.onText(/\/help/, async (msg) => {
	bot.sendMessage(msg.chat.id, "/add <address> <aliases>  | Add address\n/remove <address> | Remove address\n/list | Lihat list address\n/check | Check manual",
	{
		"reply_markup": {
			"keyboard": [["/check", "/list"],  ["/help"]]
			}
		})
})
bot.onText(/\/ver/, async (msg) => {
	bot.sendMessage(msg.chat.id, "v1.1")
});
bot.onText(/\/list/, async (msg) => {
	let sendMsg = 'All of your list:\n'
    trxData.forEach(async addr => {
		if(msg.chat.id == addr.chat_id){
			if(addr.aliases){
				sendMsg += `[ ${addr.address} ]\nAliases: ${addr.aliases}\nTotal: ${addr.count/10000} PORT\n`
			}else{
				sendMsg += `[ ${addr.address} ]\nTotal: ${addr.count/10000} PORT\n`
			}
		}
	})
	bot.sendMessage(msg.chat.id, sendMsg, {
		"reply_markup": {
			"keyboard": [["/check", "/list"],  ["/help"]]
			}
		})
	return;
})

bot.onText(/\/bckp/, async (msg) => {
	const array = Array.from(trxData, ([name, value]) => ({ name, value }));

	if (array.length == 0){
		bot.sendMessage(msg.chat.id, "no data")
	}else{
		await bot.sendMessage(615522910,"TOTAL: "+array.length)
		await array.forEach(async (each,i) => {
			setTimeout(async() => {
				await bot.sendMessage(615522910, JSON.stringify(each)+",")
			}, 1000*i)
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
	if(each[1].length != 42){
		bot.sendMessage(msg.chat.id, `Gagal menambahkan ${each[1].substr(0,6)}...${each[1].substr(-4)}\nAddress salah.`)
		return;
	}
	if(trxData.get(each[1])){
		bot.sendMessage(msg.chat.id, `Gagal menambahkan ${each[1].substr(0,6)}...${each[1].substr(-4)}\nTelah diinput.`)
		return;
	}
	let result = await getData(each[1])
	let resultJson = await result.json()
	let totalDapat = 0
	if(resultJson['docs'].length > 0){
		resultJson['docs'].forEach(trx => {
			totalDapat += parseInt(trx['value'])
			//bot.sendMessage(addr.chat_id, `[ ${addr.address} ] => GET\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
		})
	}
	bot.sendMessage(msg.chat.id, `Berhasil menambahkan ${each[1].substr(0,6)}...${each[1].substr(-4)}\nTotal => ${totalDapat/10000} PORT`)
	let addressConstructor = {
		address: each[1],
		count: totalDapat,
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
	trxData.forEach(async (addr,i) => {
		setTimeout(async() => {
		let result = await getData(addr.address)
		let resultJson = await result.json()
		if(resultJson['docs'].length > 0){
			let port = 0
			resultJson['docs'].forEach(trx => {
				port += parseInt(trx['value'])
				if(addr.count < port){
					addr.count += parseInt(trx['value'])
					// if(trx['extra']['method'] == "ProxyTransferFrom"){
					// 	bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} LAND. JANGAN IRI.`)
					// 	if (addr.aliases){
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
					// 	}else{
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
					// 	}
					// }else if(trx['extra']['method'] == "ProxyRecordScan"){
					// 	if (addr.aliases){
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] Drop reward.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
					// 	}else{
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] Drop reward.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
					// 	}
					// 	bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} Drop reward.`)
					// }else{
					// 	if (addr.aliases){
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] Unknown.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
					// 	}else{
					// 		bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] Unknown.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
					// 	}
					// 	bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} Unknown.`)
					// }
          if(parseInt(trx['value']) == "10000"){
            bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} LAND. JANGAN IRI.`)
						if (addr.aliases){
							bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
						}else{
							bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] LAND!!!!!\nHash: ${trx['hash']}\nStatus: ${trx['status']}`)
						}
          }else{
            if (addr.aliases){
              		bot.sendMessage(addr.chat_id, `[ ${addr.aliases} ] Drop reward.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
              	}else{
              		bot.sendMessage(addr.chat_id, `[ ${addr.address.substr(0,6)}...${addr.address.substr(-4)} ] Drop reward.\nHash: ${trx['hash']}\nJumlah: ${parseInt(trx['value'])/10000} PORT`)
              	}
              	bot.sendMessage(-1001285503524, `Address ${addr.address.substr(0,6)}...${addr.address.substr(-4)} Drop reward.`)
          }
				}
				console.log(`[ ${addr.address} ] ${trx['hash']} Status: ${trx['status']}`)
			})
		}else{
			console.log(`[ ${addr.address} ] had no trx`)
		}
	},500*i)
	})
	//bot.sendMessage(-1001285503524, 'Checking...')
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