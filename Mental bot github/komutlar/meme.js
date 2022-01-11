const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const Url = `https://reddit.com${permalink}`;
			const Image = post.data.url;
			const Title = post.data.title;
			const Upvotes = post.data.ups;
			const NumComments = post.data.num_comments;

	let embed = new Discord.MessageEmbed()
		.setTitle(`${Title}`)
		.setURL(`${Url}`)
		.setColor('RANDOM')
		.setImage(Image)
		.setFooter(`⬆️ ${Upvotes} 💬 ${NumComments}`)

		message.channel.send(embed)

});
}
module.exports.conf = {
aliases: ['şaka','miim','mizah'],
permLevel: 0,
kategori: 'Eğlence'
};

module.exports.help = {
    name: 'meme',
    description: 'meme oluşturur',
    usage: 'meme'
};
