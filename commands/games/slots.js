const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'slots',
	category: 'games',
	description: '​How lucky are you? Play slots to find out.',
	usage: 'slots',
	run: async (client, message, args) => {
		const slot = ['🍒', '🍊', '🍋', '🍉', '🍌'];
		const rand1 = Math.floor(Math.random() * slot.length);
		const rand2 = Math.floor(Math.random() * slot.length);
		const rand3 = Math.floor(Math.random() * slot.length);
    const rand4 = Math.floor(Math.random() * slot.length);
		const result = `${slot[rand1]} : ${slot[rand2]} : ${slot[rand3]} : ${slot[rand4]}`;

		message.channel.send('<a:818722669380894741:821734580800192522> Spinning...').then(msg => {
			const bembed = new MessageEmbed();
			if(rand1 == rand2 && rand2 == rand3 && rand3 == rand4) {
				bembed.setColor('YELLOW');
				bembed.setDescription([`
            -------------------


            ${result}


            -------------------
            <:814078754866462721:821734640451846154> You Won!
            `]);
			}
			else {
				bembed.setColor('YELLOW');
				bembed.setDescription([`
            -------------------
            

            ${result}


            -------------------
            <:747689281065189376:821734873344901140> You Lost!
            `]);
			}
			msg.edit(bembed);
		});

	},
};