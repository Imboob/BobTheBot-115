const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi i'm tem and this is my friend tem"){
        message.reply("Hi i'm bob!")
    }
    if (message.content == "gaslight"){
        message.reply("käften nils")
    }
})

client.login(process.env.TOKEN)