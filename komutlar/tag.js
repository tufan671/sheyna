const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  message.channel.send('  İşte Efsanevi Tagımız : ``Ψ``   ')
   }   

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Tagımızı Gösterir',
  usage: 'tag'
};
