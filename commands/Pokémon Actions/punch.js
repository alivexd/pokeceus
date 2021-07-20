const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "punch",
  category: "fun",
  description: "Punch someone ︶︿︶",
  run: async (client, message, args) => {
    
    
    let user = message.mentions.users.first () || message.author;
    let target = message.author.id == user.id ? "themselfs": user.username ;
    
    let data = await random.getAnimeImgURL("punch");
    
    let embed = new discord.MessageEmbed()
    .setImage(`https://images-ext-2.discordapp.net/external/4z8D3rU1Q8pwQRN02JzoEW8KzIIjghQwRjWWWwn-dfI/https/i.kym-cdn.com/photos/images/original/001/135/370/d3f.gif`)
    .setColor("YELLOW")
    .setTitle(`${message.author.username} Punches ${target}`)
    .setDescription(``)
    .setFooter(`${message.author.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};