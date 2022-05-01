const Discord = require('discord.js')
exports.run = async (client, message, args) => {

var sayı = Math.floor(Math.random() * 999) + 1;

if (sayı<500){
let embed = new Discord.MessageEmbed()

      .setTitle(message.author.username + ', :punch: :boom: Boks Makinasına yumruk attı :punch: :boom:')
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('RANDOM')
      .setDescription('**:eyes: GÜÇSÜZ :eyes:**')
      .addField(`**${sayı}** vurdu :dash: PÜĞ sana`,)
      message.channel.send(embed).catch(err => console.log(err));
};

if (sayı>500){
  let embed = new Discord.MessageEmbed()

  .setTitle(message.author.username + ', :punch: :boom: Boks Makinasına yumruk attı :punch: :boom:')
  .setThumbnail(message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setDescription('**:muscle: MAŞALLAH SENDEKİ GÜÇ NE :muscle:**')
  .addField(`**${sayı}** vurdu :boom: HAY MAŞALLAH!`,)
  message.channel.send(embed).catch(err => console.log(err));
};

}
exports.help = {
    name: "güç",
    description: "Searchs Wikipedia for a query",
    usage: "wikipedia <query>",
    example: "wikipedia cheese"
}

exports.conf = {
    aliases: ["yumrukat"],
    cooldown: 0
}
