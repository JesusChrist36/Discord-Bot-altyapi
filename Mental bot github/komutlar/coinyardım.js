const Discord = require("discord.js");
exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed()
        .setTitle('?cpara <1. Coin> <Para Birimi>')
        .setColor('RANDOM')
        .addFields(
            {name: `:coin: Popüler Coinler :coin:`, value: `**BTC(Bitcoin)**\n **ETH(Ethereum)**\n **USDT(Tether)**\n **BNB(Binance Coin)**\n **USDC(Usd Coin)**\n **LUNA(Terra)**\n **SOL(Solana)**\n **XRP**\n **ADA(Cordano)**\n **DOGE(Dogecoin)**\n **AVAX(Avalanche)**\n **UST(TerraUSD)**\n **BUSD(BinanceUSD)**\n **DOT(PolkaDot)**\n **SHIB(Shiba)**`, inline: true},
            {name: `:dollar: Para Birimleri :dollar:`, value: `**:flag_tr: TRY(Türk Lirası)**\n **:flag_us: USD(ABD Doları)**\n **:flag_eu: EUR(Euro)**\n **:flag_gb: GBP(Sterlin)**\n **:flag_jp: JPY(Japon Yeni)**`, inline: true}
        )
        .setFooter('Coin Yardım', client.user.avatarURL())
        message.channel.send(embed)
}
exports.help = {
    name: "coinyardım",
    description: ".",
    usage: ".",
    example: "."
}

exports.conf = {
    aliases: ['coinhelp','cyardım'],
    cooldown: 0
}