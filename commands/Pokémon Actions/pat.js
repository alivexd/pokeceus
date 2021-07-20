const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "pat",
  description: "Pat somebody ヾ(¯∇￣๑)",
  category: "fun",
  run:async (bot, message) => {
    const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const patted = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setTitle(`${message.author.username} Patted ${patted}`)
      .setDescription(``)
      .setImage(`https://images-ext-1.discordapp.net/external/PW_1lF1rk_3cK3P46dHIg4d_oFxxX_DE8OiKISKYb10/https/media.tenor.com/images/0eb6f4524a29434ba44d2da08d7ca175/tenor.gif`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};