const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "channels",
    description: "Shows all channels in the server",
    category: "moderation",
   run:async (bot, message) => {
        const channels = message.guild.channels.cache;
        const voiceChannels = channels.filter((channel) => channel.type === "voice").map((channel) => channel.name).join(", ");
        const textChannels = channels.filter((channel) => channel.type === "text").map((channel) => `<#${channel.id}>`).join(", ");

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle(`${message.guild.name}'s channels`)
            .addField("**Voice Channels:**", voiceChannels)
            .addField("**Text Channels:**", textChannels)
            .setFooter(message.author.username)
            .setTimestamp();


        message.channel.send(embed);
    }
};