const fs = require('fs');
const commands = require('./commands/index');

module.exports = {
  run: function(client, msg) {
    let respond;
    let cmd = msg.content.split(' ')[0];
    msg.content = msg.content.replace(cmd, '');
    try {
      commands[cmd](msg).then(function(response){
        msg.channel.send(response);
      }).catch(function(err){
        console.log(err);
        msg.channel.send('I\'m sorry I don\'t understand.');
      });
    } catch(err) {
      console.log(err);
      msg.channel.send('I\'m sorry I don\'t understand.');
    }
  }
};
