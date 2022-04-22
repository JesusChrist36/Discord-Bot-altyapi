const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
        const Member = message.mentions.users.first() || message.author;
        const Avatar = Member.displayAvatarURL({ dynamic: true, size: 1024 })

        const embed = new MessageEmbed()
        .setTitle(`${Member.tag}\ Profil Fotoğrafı`)
        .setImage(Avatar)
        .setColor("RANDOM")

        message.channel.send(embed)
    }
    exports.help = {
        name: "avatar",
        description: "Searchs Wikipedia for a query",
        usage: "wikipedia <query>",
        example: "wikipedia cheese"
    }

    exports.conf = {
        aliases: ["pfp"],
        cooldown: 0
    }
