const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'wikipedia',
	category: 'util',
	description: 'Returns information from Wikipedia.',
	aliases: ['wiki'],
	usage: 'wikipedia <query>',
	run: async (client, message, args) => {
		const query = args.slice().join(' ');
		if(!query) {
			return message.channel.send(
				'<:747689281065189376:821734873344901140> Please provide a valid query',
			);
		}

		const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

		let body ;
		try {
			body = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				'<:747689281065189376:821734873344901140> An error occured, please try again!',
			);
		}

		try{
			if (body.type === 'disambiguation') {
				const embed = new MessageEmbed()
					.setColor('YELLOW')
					.setTitle(body.title)
					.setURL(body.content_urls.desktop.page)
					.setDescription([`
					${body.extract}

					Disambiguation [page](${body.content_urls.desktop.page}) providing links to topics that could be referred to by the same search term
					`]);

				message.channel.send(embed);
			}
			else {
				const embed = new MessageEmbed()
					.setColor('YELLOW')
					.setTitle(body.title)
					.setThumbnail(body.thumbnail.source)
					.setURL(body.content_urls.desktop.page)
					.setDescription(body.extract);

				message.channel.send(embed);
			}
		}
		catch {
			return message.channel.send(
				'<:747689281065189376:821734873344901140> Please provide a valid query',
			);
		}
	},
};