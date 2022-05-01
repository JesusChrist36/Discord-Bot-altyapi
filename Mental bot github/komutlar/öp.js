const Discord = require('discord.js');
let gifler = [ "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif", "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", "https://cdn.weeb.sh/images/B1jKga5Zz.gif", "https://cdn.weeb.sh/images/Hy-oQl91z.gif", "https://cdn.weeb.sh/images/r1cB3aOwW.gif", "https://i.gifer.com/ZN9i.gif", "https://i.gifer.com/UkQ1.gif", "https://i.gifer.com/IM8v.gif", "https://www.icegif.com/wp-content/uploads/2021/10/icegif-1015.gif", "https://media.giphy.com/media/CGXNYwxCB0x2M/giphy.gif"]
let gif = Math.floor((Math.random()*gifler.length));

let emj = [":hearts:", ":cupid:", ":heartpulse:", ":sparkling_heart:", ":blue_heart:", ":heart_eyes:", ":smiling_face_with_3_hearts:", ":kissing_heart:", ":heart_eyes_cat:"]
let emjsnc = Math.floor((Math.random()*emj.length));

let soz = ["Ne Tatlılar", "Darısı başımıza", "ÇOK ŞİRİNNN", "YAAA~", "Ay Canlarım Benim", "Kıskandım Şu an", "Çok yakıştınız (^-^)", "Tamda Kalbinden vurdu", "SONUNDA BE (^U^)"]
let sozsnc = Math.floor((Math.random()*soz.length));

exports.run = async (client, message, args) => {
  const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.mentions.users.first()) return message.reply("Öpmen gereken kişiyi belirtmelisin");
	if (message.mentions.users.first().id === message.author.id) return message.channel.send('Kendini nasıl öpüyon la? :face_with_raised_eyebrow: ');

  let embed = new Discord.MessageEmbed()
  .setTitle(emj[emjsnc] + message.author.username +`, ${Member.user.username}'i öptü`+ ". " + soz[sozsnc] + emj[emjsnc])
  .setColor('RANDOM')
  .setImage(gifler[gif]) 
  message.channel.send(embed)
  delete require.cache[require.resolve(`./öp.js`)]
          const pull = require(`./öp.js`)
          client.commands.set(pull.help.name, pull)
};
exports.help = {
    name: "öp",
    description: "Searchs Wikipedia for a query",
    usage: "wikipedia <query>",
    example: "wikipedia cheese"
}

exports.conf = {
    aliases: ["kiss"],
    cooldown: 0
}
