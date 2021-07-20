const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "poll",
    usage:"poll <topic>",
    description: "Create a poll",
    category: "util",
    run : async (bot, message, args) => {
        const question = args.join(" ");

        if (!question) return message.reply("Please provide the topic of poll");

        const embed = new MessageEmbed()
            .setTitle(question)
            .setDescription(`React Asap <a:818722669380894741:821734580800192522>`)
            .setFooter(message.author.username)
            .setColor("YELLOW")
            .setTimestamp();

        const sendMessage = await message.channel.send(embed);

        sendMessage.react("👍🏻");
        sendMessage.react("👎🏻");
        sendMessage.react("🤷🏻");
    }
};