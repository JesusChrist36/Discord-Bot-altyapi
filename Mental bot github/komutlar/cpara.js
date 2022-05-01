const { DiscordAPIError } = require('discord.js')
const request = require('request')
const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  message.delete()
  let cryptoCurrency = args[0].toUpperCase()
  let symbol = args[1] ? args[1].toUpperCase() : 'USD'
  request(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${symbol}`, function (err, response, body) {
      let data = JSON.parse(body)
      if (!data[symbol]) {
        message.reply('Lütfen Geçerli Bir Varlık Seçin').then(m => { setTimeout(() => { m.delete() }, 5000) })
      } else {
        let embed = new Discord.MessageEmbed()
        .setTitle(':currency_exchange:  CoinmarketCap Coin Karşılaştırıcısı :currency_exchange: ')
        .setDescription(`1 tane ${cryptoCurrency} :coin:, ${data[symbol]} ${symbol}'e :dollar: Karşılık Geliyor`)
        .setColor('RANDOM')
        .setFooter('💵 💹 ELON BUYS TWITTER 💹 💵')
        message.channel.send(embed)
      }
    }
  )
}
exports.help = {
    name: "cpara",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: ['crypto'],
    cooldown: 0
}
