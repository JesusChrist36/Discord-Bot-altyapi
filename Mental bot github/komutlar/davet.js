const Discord = require('discord.js')


exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
      .setTitle(':arrow_right_hook: **Mental botu sunucunuza ekleyin** :leftwards_arrow_with_hook: ')
      .setThumbnail(client.user.avatarURL())
      .setColor('RANDOM')
      .setDescription(`:arrow_up: **Mental Yükseltin** :arrow_up: `)
      .addField('Mental yükseltmek için:', `
      **Botumuzu kendi sunucunuza ekleyin! :frog:  https://discord.com/api/oauth2/authorize?client_id=918571441702723654&permissions=8&scope=bot :frog: **
      `)


      message.channel.send(embed)


}
module.exports.conf = {
aliases: ['invite','dvt','gel'],
permLevel: 0,
kategori: 'Eğlence'
};

module.exports.help = {
    name: 'davet',
    description: 'davet oluşturur',
    usage: 'davet'
};
