module.exports = {
    name: "play",
    description: "Command to play a song",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("join dulu channel dulu lah");

        let search = args.join(" ");

        if(!search) return message.channel.send('Kata kunci salah');

        client.player.play(message, search)
    }
}