const Discord = require('discord.js')
exports.run = async (client, message, args) => {

var sayı = Math.floor(Math.random() * 100) + 1;

    let embed = new Discord.MessageEmbed()
      .setTitle(':rainbow_flag: Gay ölçer :rainbow_flag: ')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('RANDOM')
      .addField(`:rainbow_flag: ${sayı}% Gaysin :rainbow_flag: `)
      message.channel.send(embed)


}
exports.help = {
    name: "gay",
    description: "% kaç gay olduğunuzu söyler",
    usage: "?gay",
    example: "?gay"
}

exports.conf = {
    aliases: ["lgbt"],
    cooldown: 0
}
