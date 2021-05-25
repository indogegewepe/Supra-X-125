module.exports = {
    name: "q",
    description: "Command to get song queue",

    async run (client, message, args) {
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
        ).join("\n"));
        
    }
}