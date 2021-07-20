const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "feed",
  description: "Feed someone ~_~",
  category: "fun",
  usage:"feed @user",
 run: async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/v2/img/feed").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const fed = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Fed ${fed}`)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setDescription(``)
      .setImage(`https://images-ext-1.discordapp.net/external/_weWfjHYb5-vJvc2tMnwN7ctqZZ4PYw_wzDZiRFK5nU/http/37.media.tumblr.com/6eae859769cc23177a7726f81721ac68/tumblr_n3yfx2lRnL1rjenv2o1_500.gif`)
      .setTimestamp();

    message.channel.send(embed);
  },
};