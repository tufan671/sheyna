const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
 
  if (!message.member.roles.has("790887024462790677") && !message.member.hasPermission("MANAGE_MESSAGES") )
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "762969567957352469";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:777996344010211349>`,
    '1': `<a:br:777996344278515733>`,
    '2': `<a:iki:777996344291098654>`,
    '3': `<a:uc:777996344169594930>`,
    '4': `<a:drt:777996343754227734>`,                      
    '5': `<a:bs:777996344010342430>`,
    '6': `<a:alt:777996343846895658>`,
    '7': `<a:yedi:777996343842439168>`,
    '8': `<a:sekiz:777996343653695509>`,
    '9': `<a:dokz:777996342979067944>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
 '0': `<a:sfr:777996344010211349>`,
    '1': `<a:br:777996344278515733>`,
    '2': `<a:iki:777996344291098654>`,
    '3': `<a:uc:777996344169594930>`,
    '4': `<a:drt:777996343754227734>`,                      
    '5': `<a:bs:777996344010342430>`,
    '6': `<a:alt:777996343846895658>`,
    '7': `<a:yedi:777996343842439168>`,
    '8': `<a:sekiz:777996343653695509>`,
    '9': `<a:dokz:777996342979067944>`}[d];
      })
    }
 
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('777521702539493406').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:777996344010211349>`,
    '1': `<a:br:777996344278515733>`,
    '2': `<a:iki:777996344291098654>`,
    '3': `<a:uc:777996344169594930>`,
    '4': `<a:drt:777996343754227734>`,                      
    '5': `<a:bs:777996344010342430>`,
    '6': `<a:alt:777996343846895658>`,
    '7': `<a:yedi:777996343842439168>`,
    '8': `<a:sekiz:777996343653695509>`,
    '9': `<a:dokz:777996342979067944>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "Ψ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
 '0': `<a:sfr:777996344010211349>`,
    '1': `<a:br:777996344278515733>`,
    '2': `<a:iki:777996344291098654>`,
    '3': `<a:uc:777996344169594930>`,
    '4': `<a:drt:777996343754227734>`,                      
    '5': `<a:bs:777996344010342430>`,
    '6': `<a:alt:777996343846895658>`,
    '7': `<a:yedi:777996343842439168>`,
    '8': `<a:sekiz:777996343653695509>`,
    '9': `<a:dokz:777996342979067944>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:777996344010211349>`,
    '1': `<a:br:777996344278515733>`,
    '2': `<a:iki:777996344291098654>`,
    '3': `<a:uc:777996344169594930>`,
    '4': `<a:drt:777996343754227734>`,                      
    '5': `<a:bs:777996344010342430>`,
    '6': `<a:alt:777996343846895658>`,
    '7': `<a:yedi:777996343842439168>`,
    '8': `<a:sekiz:777996343653695509>`,
    '9': `<a:dokz:777996342979067944>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<a:wizardsonsuz:778254678654713887>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('Ψ Alteria')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
 
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668");
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}