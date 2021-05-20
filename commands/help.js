const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: ("help" || "h"),
    description: "The help command, what do you expect?",

    async run (client, message, args){

        const utility = new Discord.MessageEmbed()
        .addField('`$ping`', 'Get the bot\'s API ping')
        .addField('`$play`, `$p`', 'Play music from YouTube')
        .addField('`$skip`, `$s`', 'Skip a song')
        .addField('`$stop`', 'Stop the queue')
        .setTimestamp()

        const pages = [
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}