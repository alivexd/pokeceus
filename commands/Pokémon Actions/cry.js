const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "cry",
  category: "fun",
  description: "Cry T_T",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(`https://media.discordapp.net/attachments/821678587416543252/821725820002762792/pikachu-sad-icegif.png`)
    .setDescription(``)
    .setFooter(message.author.username)
    .setColor("YELLOW")
    .setTitle(`${message.author.username} is crying!`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};