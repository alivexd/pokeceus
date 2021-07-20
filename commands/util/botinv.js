module.exports = {
  name: "invite",
  description: "Returns the bot invite",
  category: "info",
  aliases:["inv"],
  usage:".invite",
  run: async(bot, message) => {
    const botInvite =
      `https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=8`;

    return message.channel.send(`Invite me here! ${botInvite}`);
  },
};