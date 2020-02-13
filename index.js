const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('talkback', 'Talkback');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', (message) => {
   
    var usermessage = message.content;
    
    if(message.content.includes('long time no see')) {
        message.reply('Long time no see...');
    }
});



bot.login('NDY1MTA0ODMxNzAzNjc4OTc3.DiIqLA.EXwyTfRZfA8e2jYszi9c_VSIUqY');

 