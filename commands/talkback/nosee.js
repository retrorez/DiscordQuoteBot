const commando = require('discord.js-commando');

class Long_Time_No_See extends commando.Command{
    constructor(client) {
        super(client, {
            name: 'nosee',
            group: 'talkback',
            memberName: 'nosee',
            description: 'It has been a while'
        });
    }

    async run(message, args) {

        message.reply('Long time no see...');
    }

}

module.exports = Long_Time_No_See;