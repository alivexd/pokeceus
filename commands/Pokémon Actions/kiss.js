const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  description: "Do you dare to!? >_<  ",
  category: "fun",
 run: async (bot, message) => {
    const data = await fetch("https://nekos.life/api/kiss").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const kissed = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Kissed ${kissed}`)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setDescription(`Children Stay Away 🤣🤣`)
      .setImage(`https://i.makeagif.com/media/1-15-2018/JJzsyU.gif`)
      .setTimestamp();

    message.channel.send(embed);
  },
};