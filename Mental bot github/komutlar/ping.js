const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed()

        .setTitle(`:alarm_clock: ${client.ws.ping}ms`)
        .setColor('RANDOM')
        message.channel.send(embed).catch(err => console.log(err));
         message.delete()
}
module.exports.conf = {
aliases: ['',''],
permLevel: 0,
kategori: 'Hesaplama'
};

module.exports.help = {
    name: 'ping',
    description: 'botun pingini ölçer',
    usage: '?ping'
};
