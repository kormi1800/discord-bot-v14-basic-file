const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,],});
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


client.on('ready', async() => {
    console.log("|========================|")
    console.log(`|   ${client.user.username} dolgozik!   |`)
    console.log("|========================|")
    
});

client.on("messageCreate", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}kaka`){
        message.channel.send("message")
    }
})

client.login(tokenfile.token);