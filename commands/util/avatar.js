const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get user avatar",
  category: "util",
  usage:"avatar",
  aliases:["av"],
  run : async (bot, message) => {
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .setFooter(message.author.username)
      .setDescription(`Click __[Here](${avatar})__ to download`)
      .setImage(`${avatar}`)
      .setColor("YELLOW")
      .setTimestamp();

    message.channel.send(embed);
  },
};