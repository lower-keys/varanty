const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['滝なあああ']
global.namaowner = ['ヂマス-サトリア-タマ']
global.owner = ['6288269131506']
global.premium = ['6288269131506']
global.packname = '滝なああ'
global.author = 'ヂマス'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'P'
global.mess = {
    success: 'success',
    admin: 'only group admin!',
    botAdmin: 'promote me:3',
    owner: 'ᴏᴡɴᴇʀ ᴏɴʟy',
    group: 'ɢʀᴏᴜᴩ ᴏɴʟy!',
    private: 'ᴩʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ᴏɴʟy',
    bot: 'ᴏɴʟy ʙᴏᴛ ɴᴜᴍʙᴇʀ',
    wait: 'ᴡᴀɪᴛ ꜰᴏʀ ɪᴛ',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = { url: 'https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg' }
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

