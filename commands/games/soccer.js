module.exports = {
	name: 'soccer',
	category: 'games',
	description: 'Play a game of soccer.',
	aliases: ['football'],
	usage: 'soccer',
	run: async (client, message, args) => {
		const filter = m => m.author.id === message.author.id;
		const intro = 'Soccer - Hit the ball into a goal where the goalkeeper is not! To hit the ball, type `left`, `right` or `middle`.';
		const possible = [
			'🥅🥅🥅\n      <:747689311935397995:821736541314482178>\n\n      ⚽',
			'🥅🥅🥅\n<:747689311935397995:821736541314482178>\n\n      ⚽',
			'🥅🥅🥅\n            <:747689311935397995:821736541314482178>\n\n      ⚽',
		];
		const panswers = [
			['left', 'right'],
			['middle', 'right'],
			['left', 'middle'],
		];

		const random = randomNoRepeat(possible);
		const index = possible.indexOf(random);
		const answers = panswers[index];
		message.channel.send(`${intro}\n${random}`).then(() => {
			message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time', 'max'] })
				.then(collected => {
					const ans = collected.first();
					if(!answers.includes(ans.content.toLowerCase())) {
						return message.channel.send('<:747689281065189376:821734873344901140> The goalie skillfully blocked your shot!');
					}
					else{
						return message.channel.send('<:814078754866462721:821734640451846154> Congratulations! You scorred a goal.');
					}
				})
				.catch(() => {
					message.channel.send('<:766928640713555969:821734602879270952> Looks like you did not answer in time.');
				});
		});
	},
};

function randomNoRepeat(array) {
	let copy = array.slice(0);
	if (copy.length < 1) { copy = array.slice(0); }
	const index = Math.floor(Math.random() * copy.length);
	const item = copy[index];
	copy.splice(index, 1);
	return item;
}