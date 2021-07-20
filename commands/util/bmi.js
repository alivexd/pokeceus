const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bmi",
  description: "Calculate your BMI",
  usage: "bmi <weight in kilograms> <height in centimeters>",
  category: "util",
 run:async (bot, message, args) => {
    const weight = args[0];
    const height = args[1];

    if (!weight)
      return message.channel.send("Please provide your weight in kilograms");

    if (!height)
      return message.channel.send("Please provide your height in centimeters");

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    const embed = new MessageEmbed()
      .setTitle(`<:766928640713555969:821734602879270952> ${message.author.username}'s BMI`)
      .setColor("YELLOW")
      .addField("Weight", `${weight}kg`)
      .addField("Height", `${height}cm`)
      .addField("BMI", bmi);

    message.channel.send({ embed });
  },
};