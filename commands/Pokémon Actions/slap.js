const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  description: "Slap someone ≥﹏≤",
  category: "fun",
 run: async (bot, message) => {
    const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) =>
      res.json()
    );
   const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setTitle(`${message.author.username} slapped ${slapped}`)
      .setDescription(``)
      .setImage(`https://images-ext-1.discordapp.net/external/PX10TDNAu8U5FlWVKn8T_6wDxi2laRQEzHpbQrFMdIU/%3Fitemid%3D5659219/https/media1.tenor.com/images/fe1a96f4d8d1dd72c05f433303790051/tenor.gif`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};