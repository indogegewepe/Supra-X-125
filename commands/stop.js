module.exports = {
    name: "stop",
    description: "Command to stop the queue",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("join dulu lah!");

        client.player.stop(message)
    }
}
