const Discord = require('discord.js');

const client = new Discord.Client();

// const { token } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');

const distube = require('distube');

const player = new distube(client);

player.on('playSong', (message, queue, song) => {
    message.channel.send(`🎶Memutar ${song.name}🎶!`)
})

client.player = player;

client.commands = new Discord.Collection();

const prefix = "$";

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", console.error);

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity( `my YouTube`, { name: 'Sedenter', type: 'SREAMING', url: 'https://www.youtube.com/channel/UCLO-9nUDXZbYZqtqhlq_1fw'})
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;

        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(process.env.DJS_TOKEN);