module.exports = {
    name: "s",
    description: "Command to skip the queue",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("join dulu lah!");

        client.player.skip(message)
    }
}