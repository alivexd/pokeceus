const { MessageEmbed } = require("discord.js");
const { getAuditChannel } = require("../utils/functions");

 module.exports.run= async (bot, role) => {
    const auditChannel = await getAuditChannel(role.guild.id);

    // not enabled
    if (auditChannel === null || !auditChannel) return;

    // channel not found/deleted
    if (!role.guild.channels.cache.some((ch) => ch.name === auditChannel.name))
      return;

    const embed = new MessageEmbed()
      .setTitle("New role Created")
      .setDescription(`Role: **${role}** was created`)
      .setColor("GREEN")
      .setTimestamp();

    bot.channels.cache.get(auditChannel.id).send({ embed });
  }