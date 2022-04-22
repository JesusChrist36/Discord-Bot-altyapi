const Discord = require('discord.js')
exports.run = async (client, message, args) => {

var sayı = Math.floor(Math.random() * 100) + 1;
const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

  let embed = new Discord.MessageEmbed()
    .setTitle(':rainbow_flag: Gay ölçer :rainbow_flag: ')
    .setThumbnail(Member.user.displayAvatarURL())
    .setColor('RANDOM')
    .addField(`:rainbow_flag: ${Member.user.username}, ${sayı}% Gaysin :rainbow_flag: `)
    message.channel.send(embed)
 
};
exports.help = {
    name: "gay",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: ['lgbt','g'],
    cooldown: 0
}
