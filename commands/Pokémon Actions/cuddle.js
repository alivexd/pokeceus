const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cuddle",
  description: "Cuddle someone (*´∇｀*)",
  category: "fun",
  usage:"cuddle @user",
 run: async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/v2/img/cuddle").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const cuddled = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Cuddled ${cuddled}`)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setDescription(``)
      .setImage(`https://images-ext-1.discordapp.net/external/0_uUhz1sm1ZnP1WioWy24nkyFEPsLuSy1m8MdX0j1aw/https/media.tenor.com/images/dbdb944f852228eaa8b45bfb9dadeb32/tenor.gif`)
      .setTimestamp();

    message.channel.send(embed);
  },
};