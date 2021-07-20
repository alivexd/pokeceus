  
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "poke",
  description: "Poke somebody",
  category: "fun",
 run: async (bot, message) => {
    const data = await fetch("https://nekos.life/api/v2/img/poke").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const poked = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setTitle(`${message.author.username} Poked ${poked}`)
      .setDescription(``)
      .setImage(`https://images-ext-1.discordapp.net/external/tBB4aaQxgqxwOeUGIU2yhBTL5__MiKQ2yEagM4RDJZA/https/i.pinimg.com/originals/35/56/c3/3556c3c6f939ec715b5b01cd217c5584.gif`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
