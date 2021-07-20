const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "membercount",
  description: "Gives total member count of the server! ",
  category: "moderation",
  aliases:["mc"],
  run:async (bot, message) => {
    const { name, memberCount } = message.guild;
    const bots = message.guild.members.cache.filter((mem) => mem.user.bot).size;
    const humans = message.guild.members.cache.filter((mem) => !mem.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(`${name}'s Members`)
      .setColor("YELLOW")
      .setFooter(message.author.username)
      .setTimestamp()
      .addField("**Total**", memberCount, true)
      .addField("**Humans**", humans, true)
      .addField("**Bots**", bots, true);

    message.channel.send({ embed });
  },
};