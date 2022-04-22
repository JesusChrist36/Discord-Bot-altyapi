const Discord = require('discord.js')
exports.run = async (client, message, args) => {
      const Miktar = args[0];

      if(!Miktar || isNaN(Miktar) ) return message.reply(`${Miktar} geçerli bi sayı değil :/`)

      const MiktarDüzenle = parseInt(Miktar);

        message.channel.bulkDelete(MiktarDüzenle);
        const msg = await message.channel.send(`${MiktarDüzenle} tane mesaj silindi.`);

        setTimeout(() => msg.delete(), 5000);
}
exports.help = {
    name: "sil",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: ['clear'],
    cooldown: 0
}
