const { getAuditChannel } = require("../utils/functions");
const { MessageEmbed } = require("discord.js");

module.exports.run = 
  async (bot, newMember, oldMember) => {
    if (!oldMember.guild) return;
    const auditChannel = await getAuditChannel(newMember.guild.id);
    const avatar = newMember.user.displayAvatarURL({ dynamic: true });

    // not enabled
    if (auditChannel === null || !auditChannel) return;

    const embed = new MessageEmbed()
      .setAuthor(`${newMember.user.tag}`, avatar)
      .setTimestamp()
      .setColor("ORANGE");

    // Nickname change
    if (oldMember.nickname !== newMember.nickname) {
      // Get nickname log
      const oldNickname = oldMember.nickname || "`None`";
      const newNickname = newMember.nickname || "`None`";
      embed
        .setTitle("Member Update: `Nickname`")
        .setDescription(`${newMember}'s **nickname** was changed.`)
        .addField("Nickname", `${newNickname} ➔ ${oldNickname}`);

      // send message
      bot.channels.cache.get(auditChannel.id).send({ embed });
    }

    // Role add
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      // Get role log
      const role = newMember.roles.cache
        .difference(oldMember.roles.cache)
        .first();
      embed
        .setTitle("Member Update: `Role Add`")
        .setDescription(`${newMember} was **given** the ${role} role.`);

      // send message
      bot.channels.cache.get(auditChannel.id).send({ embed });
    }

    // Role remove
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      // Get role log
      const role = oldMember.roles.cache
        .difference(newMember.roles.cache)
        .first();
      embed
        .setTitle("Member Update: `Role Remove`")
        .setDescription(`${newMember} was **removed** from ${role} role.`);

      // send message
      bot.channels.cache.get(auditChannel.id).send({ embed });
    }
  }
