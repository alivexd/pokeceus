module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**<:766928640713555969:821734602879270952> Pong** ${client.ws.ping}`);
  }
  
}