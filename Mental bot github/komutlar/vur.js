const Discord = require('discord.js')

let cevaplar = [ "https://i.gifer.com/KiXv.gif", "https://i.gifer.com/C225.gif", "https://i.gifer.com/3ZLt.gif", "https://i.gifer.com/7XnT.gif", "https://i.gifer.com/7FDz.gif" ,"https://i.gifer.com/f4.gif" ,"https://i.gifer.com/K2eh.gif"]
let sonuç = Math.floor((Math.random() * cevaplar.length));

let emojiler = [":head_bandage:", ":dizzy_face:", ":scream_cat:", ":punch:", ":boom:", ":scream:",]
let emores = Math.floor((Math.random()* emojiler.length));

let söz = ["Acımış olmalı", "Kırık yoktur umarım", "Sanırım Allahına kavuştu", "EYVAH!", "O nasıl vuruş!?",]
let sözsnc = Math.floor((Math.random()*söz.length));

exports.run = async (client, message, args) => {
const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
if(!Member){
 message.reply('**:octagonal_sign: Vurman gereken birini etiketle! :octagonal_sign: **')
}else if(Member == message.member){
    message.reply('**:octagonal_sign: Kendine Vuramazsın! :octagonal_sign: **')
}else {
let embed = new Discord.MessageEmbed()
.setTitle(emojiler[emores] + message.author.username +`, ${Member.user.username}'e vurdu`+ ". " + söz[sözsnc] + emojiler[emores])
.setColor('RANDOM')
.setImage(cevaplar[sonuç])
message.channel.send(embed)
  }
  delete require.cache[require.resolve(`./vur.js`)]
          const pull = require(`./vur.js`)
          client.commands.set(pull.help.name, pull)
}
exports.help = {
    name: "vur",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: [],
    cooldown: 0
}