module.exports = {
    name: "p",
    description: "Command to play a song",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("join dulu lah!");

        let search = args.join(" ");

        if(!search) return message.channel.send('Lagune raono!');

        client.player.play(message, search)
    }
}