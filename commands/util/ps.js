const { MessageEmbed } = require("discord.js");
const PlayStore = require("google-play-scraper");

module.exports = {
  name: "playstore",
  aliases: ["ps"],
  description: "Shows Playstore Application Information Of Your Given Name!",
  usage: "playstore <Application Name>",
  category: "util",
  run:async (bot, message, args) => {
    const search = args.join(" ");

    if (!search) return message.channel.send("Please provide search query");

    PlayStore.search({
      term: args.join(" "),
      num: 1,
    }).then((Data) => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send("No Application Found!");
      }

      const Embed = new MessageEmbed()
        .setColor("YELLOW")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField("Price", App.priceText, true)
        .addField("Developer", App.developer, true)
        .addField("Score", App.scoreText, true)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  },
};