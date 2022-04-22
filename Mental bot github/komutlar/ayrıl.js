const Discord = require('discord.js')
exports.run = async (client, message, args) => {

        const voiceChannel = message.member.voice.channel
 message.delete()
 if (!voiceChannel) return message.channel.send("Ses Kanalında Değilim!")

   try {
       voiceChannel.leave()
   } catch(error) {
       console.log(`Kanaldan Ayrılamadım: ${error}`)
       return message.channel.send(`Kanaldan Ayrılamadım: ${error}`)
   }
}

exports.help = {
    name: "ayrıl",
    description: "Searchs Wikipedia for a query",
    usage: "wikipedia <query>",
    example: "wikipedia cheese"
}

exports.conf = {
    aliases: ["git"],
    cooldown: 0
}
