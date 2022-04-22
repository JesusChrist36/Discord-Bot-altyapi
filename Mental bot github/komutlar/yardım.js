const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

    let embed = new Discord.MessageEmbed()
      .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
      .setThumbnail(client.user.avatarURL())
      .setColor('#FFFB05')
      .setDescription(`YARDIM`)
      .addField('Kategoriler:', `
      **[${prefix}ascii <yazı> en fazla 11 karakterlik ascii yazısı yazmanızı sağlar**
      **[${prefix}ping botun pingini söyler**
      **[${prefix}yaz <yazı> bota yazı yazdırır**
      **[${prefix}gay <kullanıcı> % kaç gay olduğunu söyler**
      **[${prefix}vur Boks makinasına yumruk atarsınız**
      **[${prefix}meme meme(miim) atar**
      **[${prefix}emojiler sunucudaki emojileri gösterir**
      **[${prefix}kullanıcı-bilgi @Kullanıcı kullanıcı hakkında bilgiler verir**
      **[${prefix}sunucu-bilgi Sunucu hakkında bilgi verir**
      **[${prefix}hesapla Hesap mekinesi işlevi görür**
      **[${prefix}öp <kullanıcı> birini öpersin**
      **[${prefix}kızcı % kaç kızcı olduğunu söyler**
      **[${prefix}avatar Avatarınızı gösterir**
      **[${prefix}sil <miktar> belirttiğiniz miktarda mesajı siler**
      `)
      .addField(":tools:")

 message.channel.send(embed)
}



  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'],
    permLevel: 0,
    kategori: "Genel"

  };

  exports.help = {
    name: 'yardım',
    description: 'Komutlar hakkında bilgi verir.',
    usage: 'yardım',
  };
