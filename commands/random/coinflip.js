const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin'
        });
    }

    async run(message, args) {
        var flip = Math.random() * 2;
        if (flip < 1) {
            flip = "heads";
        }
        else {
            flip = "tails";
        }
        message.reply("You flipped " + flip);
    }
}

module.exports = CoinFlipCommand;