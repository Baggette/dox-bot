const { Client, Intents, Message } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const prefix = "dox"
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('dox is online')
    client.user.setPresence({ activities: [{ name: “your feelings lol”' }], status: 'online' });
});
client.on('messageCreate', (message) => {
    if(message.content.startsWith(prefix)){
        let liberal =[
            "fuck you",
            "smd",
            "no",
            "yes",
            "maybe",
            "idk",
            "ur gay",
            "<33",
            "boom"
        ]
        message.channel.send(`${liberal[Math.floor(Math.random() * liberal.length)]}`)
    }
});
client.login(process.env.TOKEN);
