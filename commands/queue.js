const Discord = require('discord.js')

module.exports = {
    name: "lirik",
    description: "Command to show lirik",

    async run (client, message, args) {

        const lyrics = new Discord.MessageEmbed()
        .setDescription(`✨\`${client.ws.ping}\`ms`);

        message.channel.send(lyrics);
    }
}