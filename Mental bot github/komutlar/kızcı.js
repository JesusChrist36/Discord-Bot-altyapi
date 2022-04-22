const Discord = require('discord.js')
exports.run = async (client, message, args) => {

var sayı = Math.floor(Math.random() * 100) + 1;
const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

if (Member.id == '958657973004169226') {
  let embed = new Discord.MessageEmbed()
  .setTitle('**Üzgünüm. Bu kişiye böyle şeyler yapılmasına izin veremem**')
  .setThumbnail(Member.user.displayAvatarURL())
  .setColor('RANDOM')
  .addField(`:shield: Bu Kişi Korunaklıdır :shield: `)
  message.channel.send(embed)
}else if (Member.id == '761291371545755698') {
  let embed = new Discord.MessageEmbed()
    .setTitle(':eyes: YUH BE KANKA :eyes: ')
    .setThumbnail(Member.user.displayAvatarURL())
    .setColor('RANDOM')
    .addField(`:face_with_raised_eyebrow:  ${Member.user.username}, 10000% Kızcısın. Kızları tanrı olarak mı görüyon? :face_with_raised_eyebrow:  `)
    message.channel.send(embed)
}
else {
  if (sayı>99){
      let embed = new Discord.MessageEmbed()
        .setTitle(':eyes: YUH BE KANKA :eyes: ')
        .setThumbnail(Member.user.displayAvatarURL())
        .setColor('RANDOM')
        .addField(`:face_with_raised_eyebrow:  ${Member.user.username}, ${sayı}% Kızcısın. Kızlaramı tapıyon? :face_with_raised_eyebrow:  `)
        message.channel.send(embed)
  };

  if (sayı<100){
    let embed = new Discord.MessageEmbed()
      .setTitle(':yum: **Vay be Kardeş** :yum: ')
      .setThumbnail(Member.user.displayAvatarURL())
      .setColor('RANDOM')
      .addField(`:yum:  ${Member.user.username}, **${sayı}%** Kızcısın WOW :yum:  `)
      message.channel.send(embed)
  };
 }
}
exports.help = {
    name: "kızcı",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: ["amcı"],
    cooldown: 5
}
