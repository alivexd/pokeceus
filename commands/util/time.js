const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'time',
	category: 'util',
	description: 'Shows the current time.',
	aliases: ["day"],
	usage: 'time',
	run: async (client, message, args) => {
		const pEmbed = new MessageEmbed()
			.setColor('YELLOW')
			.addField('Today is', `${moment(Date.now()).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
		message.channel.send(pEmbed);
	},
};