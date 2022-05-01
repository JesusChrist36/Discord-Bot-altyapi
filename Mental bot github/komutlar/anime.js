const Discord = require("discord.js");
const malScraper = require('mal-scraper');
exports.run = async (client, message, args) => {
    const arama = `${args}`;
    if(!arama){
     message.reply(':baby: Bir anime ismi giriniz:baby: ');
    }else{
    malScraper.getInfoFromName(arama)
      .then((data) => {
      const malEmbed = new Discord.MessageEmbed()
        .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
        .setThumbnail(data.picture)
        .setColor('RANDOM')
        .addField('**:flag_gb: İngilizce Başlık :flag_gb:**', `**${data.englishTitle}**`, true)
        .addField('**:flag_jp: Japonca Başlık :flag_jp:**', `**${data.japaneseTitle}**`, true)
        .addField('**:cyclone: Tür :cyclone:**', `**${data.type}**`, true)
        .addField('**▶️ Bölümler ▶️**', `**${data.episodes}**`, true)
        .addField('**:o: Yaş Kısıtlaması :o:**', `**${data.rating}**`, true)
        .addField('**:writing_hand: Yapımcılar :writing_hand:**', `**${data.producers}**`, true)
        .addField('**:100: Puan :100:**', `**${data.score}**`, true)
        .addField('**Skor istatistiği**', `**${data.scoreStats}**`, true)
        .addField('**Link**', data.url);
    
        message.channel.send(malEmbed);
    
      })
     }
    }
    exports.help = {
        name: "anime",
        description: "Searchs Wikipedia for a query",
        usage: "wikipedia <query>",
        example: "wikipedia cheese"
    }
    
    exports.conf = {
        aliases: ["animeara"],
        cooldown: 0
    }
    