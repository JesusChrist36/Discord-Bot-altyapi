const Discord = require('discord.js')
exports.run = async (client, message, args) => {

        const voiceChannel = message.member.voice.channel
 message.delete()
        if (!voiceChannel) return message.channel.send("Sesli Sohbete Katıl")

        try {
            await voiceChannel.join().then(connection => {
                connection.voice.setSelfDeaf(false)
            })
        } catch(error) {
            console.log(`Kanala katılamadaım  ${error}`)
            return message.channel.send(`Kanala Katılamadım ${error}`)
        }
    }

exports.help = {
    name: "katıl",
    description: "Searchs Wikipedia for a query",
    usage: "wikipedia <query>",
    example: "wikipedia cheese"
}

exports.conf = {
    aliases: ["gel"],
    cooldown: 0
}
