module.exports = async function(client, message) {
    var { MessageEmbed } = require('discord.js');
    var msg = require('quick.db').fetch(`Delete_${message.channel.id}`);
    var deleted = new MessageEmbed()
        .setTitle(':x:  | **Timeout**')
        .setColor('RANDOM')
    message.channel.messages.fetch(msg).then(m => m.edit({ embed: deleted })).catch(err => { return });
};
