const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  description: "Hug someone and make their day ^_^",
  category: "fun",
  usage:"hug @user",
 run: async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Hugged ${hugged}`)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setDescription(``)
      .setImage(`https://images-ext-2.discordapp.net/external/6B5bLueTCwmRqM3n_w7BkekkPssJr689rV9H2YncvmA/https/i.pinimg.com/originals/7b/7e/56/7b7e56964884c4fa2550a30eb2103407.gif`)
      .setTimestamp();

    message.channel.send(embed);
  },
};