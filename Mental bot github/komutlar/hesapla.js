const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports.run = async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Bana bi hesaplama yaz :face_with_monocle: ");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Cevap`)
        .setDescription(math.evaluate(args.join(" ")) + '    :white_check_mark: ')

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Hesaplayacak birşey ver :face_with_monocle:  `).then(() => console.log(error));
    }
  }
  exports.help = {
      name: "hesapla",
      description: "Searchs Wikipedia for a query",
      usage: "wikipedia <query>",
      example: "wikipedia cheese"
  }

  exports.conf = {
      aliases: ['math','hesapla','çöz'],
      cooldown: 0
  };
