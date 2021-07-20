const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "tickle",
  description: "Tickle someone ﾍ(￣▽￣*)ﾉ",
  category: "fun",
  usage:"tickle @user",
 run: async (bot, message) =>{
    const data = await fetch("https://nekos.life/api/v2/img/tickle").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const tickled = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} Tickled ${tickled}`)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setDescription(``)
      .setImage(`https://images-ext-2.discordapp.net/external/b7dm-9vmxPwjdcMyX4n7lAMJTBHM8cqESVvIeoSMB9M/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWIzMTlhNTItNWE1My00ZWQ2LWE4ZTEtN2JjN2ZlY2RlYmUyXC9kNnRxbHN6LTBjMDFkNjM4LThjMjQtNDFiOS1iMTIwLTE5OWUwOWYyMDdhNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qLDuHo5ShLOj01OeKv31-8DwQc9x2rCMiYAHZOk8bQY/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab319a52-5a53-4ed6-a8e1-7bc7fecdebe2/d6tqlsz-0c01d638-8c24-41b9-b120-199e09f207a4.gif`)
      .setTimestamp();

    message.channel.send(embed);
  },
};