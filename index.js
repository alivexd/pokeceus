
const { Collection, Client } = require("discord.js");
const { token } = require("./config.json");
const bot = new Client({ disableMentions: "everyone" });

const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true
});
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(token);
