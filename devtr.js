const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


const { RichEmbed } = require('discord.js')
class Run{
  constructor(client) {
    this.client = client;
  }


};
const run = new Run() 
client.on('messageReactionAdd', (reaction,user) => {
  run.run(reaction,user)
})
client.on('messageReactionRemove', (reaction,user) => {
  run.run(reaction,user)
})
client.on('messageReactionRemoveAll', (reaction,user) => {
  run.run(reaction,user)
})

// --------------------------------------------------------------------------------Düzenlenicek Kısım Başlangıcı -------------------------------------------------------------------------------------------------------------------------------------------

client.on('guildMemberAdd',async member => {
  let gkisi = client.users.get(member.id);
  
    const ktarih = new Date().getTime() - gkisi.createdAt.getTime();   
    if (ktarih < 2592000001) 
  member.addRole("FAKE ROL İD")//fake üyeye verilecek rol
  member.removeRole("KULLANICI ROL ID")//fake üyeden alınacak rol
});

// İSİM YAŞ İSİM DEĞİŞTİRME 

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  //splashen
  member.setNickname(`${tag} İsim • Yaş`);
});

// İSİM YAŞ İSİM DEĞİŞTİRME SON


client.on("guildMemberAdd", member => {  
    var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:777996344010211349>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '1': `<a:br:777996344278515733>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '2': `<a:iki:777996344291098654>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '3': `<a:uc:777996344169594930>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '4': `<a:drt:777996343754227734>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE                        
    '5': `<a:bs:777996344010342430>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '6': `<a:alt:777996343846895658>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '7': `<a:yedi:777996343842439168>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '8': `<a:sekiz:777996343653695509>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '9': `<a:dokz:777996342979067944>`}[d]; // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
      })
  
    }
    const kanal = "790887089071325184"; // HOŞ GELDİN MESAJINI NEREYE ATACAKSA O KANALIN İDSİNİ GİRİN
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' **<a:dikkt:778239532394872872>**'
  if (kurulus > 1296000000) kontrol = ' **<a:gven:778241161894428672>**'
    moment.locale("tr");
    let stg = client.channels.get(kanal);
  stg.send("<a:pembetac:777502401015054378> ** Hoşgeldin! " + member + " Seninle "+ üyesayısı +" Kişiyiz.**  \n\n<a:Yldz:763167710108450837> **Müsait olduğunda Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n<a:wizardbeyazkalp:777501535444664372> **<@&790887013816860742> seninle ilgilenicektir.**\n\n<a:klbk1:778239533602832425>  **Hesabını" + moment(member.user.createdAt).format(" YYYY DD MMMM dddd (hh:mm:ss) ") +  " Tarihinde Oluşturmuşsun.** \n\n<a:opcuk:778239530637590568>  **Hesap Durumu:** "  + kontrol + "   \n\n<a:alter:790893752926339102> **Tagımızı alarak `Ψ` bize destek olabilirsin.** \n\n"
    );
  });

// TAG LOG
client.on("userUpdate", async (oldUser, newUser) => {//splashen
  if (oldUser.username !== newUser.username) {
    let tag = ayarlar.tag
  
    let rol = ayarlar.tagROL;
    
    
    let embed1 = new Discord.RichEmbed()
    .setDescription(`${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    let embed2 = new Discord.RichEmbed()
    .setDescription(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    if (newUser.username.includes(tag) && !client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(ayarlar.tagLOG).send(embed1)
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).removeRole(rol)
      client.channels.get(ayarlar.tagLOG).send(embed2)
    }

  }
})
// TAG LOG SON

client.on('ready', ()=>{
client.channels.get('787636722082644008').join()
})