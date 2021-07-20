require("moment-duration-format");
const moment = require("moment");

module.exports = {
    name: "uptime",
    description: "Returns the uptime of the bot",
    category: "info",
    aliases: ["up"],
   run : async (bot, message) => {
        const uptime = moment
            .duration(bot.uptime)
            .format(" D [days], H [hrs], m [mins], s [secs]");

        return message.channel.send(`${bot.user.username} has been up for ${uptime}`);
    }
};